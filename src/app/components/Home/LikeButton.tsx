"use client"
import React, { useEffect, useState } from "react"
import type { like, postProps } from "@/lib/definitions"
import { likeThisPost, unLikeThisPost } from "@/app/actions/like"
import { getLikes } from "@/lib/data"
import LoveIcon from "../svg/Love"
import LikeIcon from "../svg/Like"

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
      {likeType === "like" ? (
        <svg onClick={() => toggleLike(likeType)} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" width="24" height="24">
          <path
            className="fill-[--app-colors-blue]"
            d="m720 840h-440v-520l280-280 50 50q7 7 11.5 19 4.5 12 4.5 23v14l-44 174h258q32 0 56 24 24 24 24 56v80q0 7-2 15-2 8-4 15l-120 282q-9 20-30 34-21 14-44 14zm-440-520l-43.3 0.3-1 519.5 44.3 0.2h-200v-520z"
          />
        </svg>
      ) : likeType === "love" ? (
        <LoveIcon onClick={() => toggleLike("love")} />
      ) : likeType === "care" ? (
        <p onClick={() => toggleLike("care")}>🥰</p>
      ) : likeType === "haha" ? (
        <p onClick={() => toggleLike("haha")}>😂</p>
      ) : likeType === "sad" ? (
        <p onClick={() => toggleLike("sad")}>😥</p>
      ) : likeType === "wow" ? (
        <p onClick={() => toggleLike("wow")}>😮</p>
      ) : (
        <svg onClick={() => toggleLike("like")} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main-off]">
          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
        </svg>
      )}
      <p
        onClick={() => {
          toggleLike(likeType !== undefined ? likeType : "like")
        }}
        className={`${likeType === "like" ? "text-[--app-colors-blue]" : likeType === "love" ? "text-[--app-colors-red]" : likeType !== undefined ? "text-[--app-colors-yellow]" : "text-[--off-text-main-off]"} font-semibold`}
      >
        {likeType === undefined ? `Like` : String(likeType[0].toUpperCase() + likeType.slice(1))}
      </p>
      <div className="rounded-full absolute -top-12 left-0 hidden gap-2 p-1.5 items-center justify-between group-hover:flex bg-[--off-bg-main] shadow-md">
        <div onClick={() => toggleLike("like")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "like" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <LikeIcon />
        </div>
        <div onClick={() => toggleLike("love")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "love" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <LoveIcon onClick={() => toggleLike("love")} />
        </div>
        <div onClick={() => toggleLike("care")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "care" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>🥰</p>
        </div>
        <div onClick={() => toggleLike("haha")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "haha" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😂</p>
        </div>
        <div onClick={() => toggleLike("sad")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "sad" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😥</p>
        </div>
        <div onClick={() => toggleLike("wow")} className={`rounded-full flex items-center justify-center p-1.5 w-10 h-10 ${likeType === "wow" ? "bg-[--off-bg-main-off]" : "hover:bg-[--off-bg-main-off]"} `}>
          <p>😮</p>
        </div>
      </div>
    </div>
  )
}

export default LikeButton
