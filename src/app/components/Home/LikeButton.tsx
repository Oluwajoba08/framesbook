"use client"
import React, { useEffect, useState } from "react"
import type { like, postProps } from "@/lib/definitions"
import { ThumbsUpIcon, HeartIcon } from "lucide-react"
import { likeThisPost, unLikeThisPost } from "@/app/actions/like"
import { getLikes } from "@/lib/data"
// import LoveIcon from "../svg/Love"
// import LikeIcon from "../svg/Like"

const LikeButton = ({ postId, likes, setPostLikes }: { postId: string; likes: postProps["likes"]; setPostLikes: React.Dispatch<React.SetStateAction<like[]>> }) => {
  const [likeType, setLikeType] = useState<like["like_role"] | undefined>(undefined)

  async function toggleLike(role: like["like_role"]) {
    if (likeType === role) {
      setLikeType(undefined)
      await unLikeThisPost(postId)
    } else if (likeType !== undefined) {
      setLikeType(role)
      await unLikeThisPost(postId)
      await likeThisPost(postId, likes, role)
    } else {
      setLikeType(role)
      await likeThisPost(postId, likes, role)
    }
  }

  useEffect(() => {
    // check if user had liked post before
    async function validateLikes() {
      const postLikes = await getLikes(postId)
      setPostLikes(postLikes)
    }
    validateLikes()

    return () => {}
  }, [likeType])

  return (
    <div className={`relative group py-1.5 px-6 rounded-md flex items-center justify-center gap-2  cursor-pointer hover:bg-[--off-bg-main-off]`}>
      {likeType === "LIKE" ? (
        // <svg onClick={() => toggleLike(likeType)} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" width="24" height="24">
        //   <path d="m720 840h-440v-520l280-280 50 50q7 7 11.5 19 4.5 12 4.5 23v14l-44 174h258q32 0 56 24 24 24 24 56v80q0 7-2 15-2 8-4 15l-120 282q-9 20-30 34-21 14-44 14zm-440-520l-43.3 0.3-1 519.5 44.3 0.2h-200v-520z" />
        // </svg>
        <ThumbsUpIcon className="fill-[--app-colors-blue] w-4" onClick={() => toggleLike(likeType)} />
      ) : likeType === "LOVE" ? (
        <HeartIcon className="fill-[--app-colors-red] w-4" onClick={() => toggleLike("LOVE")} />
      ) : // <LoveIcon onClick={() => toggleLike("LOVE")} />
      likeType === "CARE" ? (
        <p onClick={() => toggleLike("CARE")}>🥰</p>
      ) : likeType === "HAHA" ? (
        <p onClick={() => toggleLike("HAHA")}>😂</p>
      ) : likeType === "SAD" ? (
        <p onClick={() => toggleLike("SAD")}>😥</p>
      ) : likeType === "WOW" ? (
        <p onClick={() => toggleLike("WOW")}>😮</p>
      ) : likeType === "ANGRY" ? (
        <p onClick={() => toggleLike("ANGRY")}>😡</p>
      ) : (
        // <svg onClick={() => toggleLike("LIKE")} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
        //   <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
        // </svg>
        <ThumbsUpIcon className="fill-[--text-main]" onClick={() => toggleLike(likeType)} />
      )}
      <p
        onClick={() => {
          toggleLike(likeType !== undefined ? likeType : "LIKE")
        }}
        className={`${likeType === "LIKE" ? "text-[--app-colors-blue]" : likeType === "LOVE" ? "text-[--app-colors-red]" : likeType !== undefined ? "text-[--app-colors-yellow]" : "text-[--text-main]"} font-medium`}
      >
        {likeType === undefined ? `Like` : String(likeType[0].toUpperCase() + likeType.slice(1).toLowerCase())}
      </p>
      <div className="rounded-full absolute -top-12 left-0 hidden gap-2 p-1.5 items-center justify-between group-hover:flex bg-[--off-bg-main] shadow-md">
        <div onClick={() => toggleLike("LIKE")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "LIKE" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          {/* <LikeIcon /> */}
          <ThumbsUpIcon className="fill-[--app-colors-blue]" />
        </div>
        <div onClick={() => toggleLike("LOVE")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "LOVE" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          {/* <LoveIcon onClick={() => toggleLike("LOVE")} /> */}
          <HeartIcon className="fill-[--app-colors-red]" />
        </div>
        <div onClick={() => toggleLike("CARE")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "CARE" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>🥰</p>
        </div>
        <div onClick={() => toggleLike("HAHA")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "HAHA" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😂</p>
        </div>
        <div onClick={() => toggleLike("SAD")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "SAD" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😥</p>
        </div>
        <div onClick={() => toggleLike("WOW")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "WOW" ? "" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😮</p>
        </div>
      </div>
    </div>
  )
}

export default LikeButton
