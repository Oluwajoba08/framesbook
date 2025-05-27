"use client"

import React, { useState, useRef } from "react"
import type { CommentProps } from "@/lib/definitions"
import Image from "next/image"
import Link from "next/link"
import { formatDateShort } from "@/lib/formatPostDate"
import { HeartIcon, MoreHorizontalIcon, MicVocalIcon } from "lucide-react"
import LikeIcon from "./svg/Like"
// import { getCurrentUserId } from "@/utils/supabase/server"

const Comment = ({ postComment }: { postComment: CommentProps }) => {
  const [hideComment, setHideComment] = useState(false)
  const [commentOptionsOpen, setCommentOptionsOpen] = useState(false)
  const commentOptionsRef = useRef(null)
  const [currentUserId, setCurrentUserId] = useState<String>("9")
  // const currentUserId = await getCurrentUserId()

  return (
    <div className={`flex relative items-start group gap-1.5 ${hideComment ? "opacity-50" : "opacity-100"}`}>
      <div className="flex items-center">
        <Link href={`/${postComment.author?.profileLink}`} className="rounded-full w-8 h-8 overflow-hidden">
          <Image src={`/${postComment.author?.profileImage}`} className="w-8 h-8 object-cover" width={48} height={48} alt={`${postComment.author.name.split(" ")[0]}'s photo`} />
        </Link>
      </div>
      <div className={`flex flex-col`}>
        <div className="flex gap-1.5">
          <div className={`flex flex-col bg-[--off-bg-main-off] px-3 py-2 rounded-[1.5rem]`}>
            {postComment.authorId === postComment.postAuthorId && (
              <span className="font-semibold">
                Author
                <MicVocalIcon className="ml-1" />
              </span>
            )}
            <Link href={`/${postComment.author?.profileLink}`} className={`font-semibold hover:underline text-xs`}>
              {postComment.author?.name}
            </Link>
            <span className={`text-sm`}>{postComment.content}</span>
          </div>
          <div onClick={() => setCommentOptionsOpen(true)} className="self-center hover:bg-[--off-bg-main-off] cursor-pointer rounded-full p-1 invisible group-hover:visible">
            <MoreHorizontalIcon />
          </div>
        </div>
        <div className="flex justify-between items-center text-xs">
          <div className="flex gap-3 items-center font-semibold px-3">
            <span className="font-normal">{formatDateShort(postComment.createdAt)}</span>
            {hideComment ? (
              <span onClick={() => setHideComment(false)} className={`hover:underline cursor-pointer`}>
                Unhide
              </span>
            ) : (
              <>
                <span onClick={() => console.log("like")} className={`cursor-pointer`}>
                  Like
                </span>
                <span onClick={() => console.log(" Todo reply")} className={`cursor-pointer`}>
                  Reply
                </span>
              </>
            )}
          </div>
          <div>
            {postComment.likes.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="grid grid-flow-col [grid-template-columns:repeat(auto-fit,15px)]">
                  {postComment.likes.some((like) => like.like_role === "LIKE") && <LikeIcon width="20px" height="20px" border="1px solid var(--off-bg-main)" />}
                  {postComment.likes.some((like) => like.like_role === "LOVE") && (
                    // <div className="w-5 h-5 p-0.5 bg-[--fb-colors-red] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                    //   <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                    //     <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                    //   </svg>
                    // </div>
                    <div className="w-5 h-5 p-0.5 bg-[--fb-colors-red] rounded-full flex justify-center items-center">
                      <HeartIcon className="fill-[--fb-colors-red] border-none" />
                    </div>
                  )}
                  {postComment.likes.some((like) => like.like_role === "CARE") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {postComment.likes.some((like) => like.like_role === "HAHA") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {postComment.likes.some((like) => like.like_role === "SAD") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {postComment.likes.some((like) => like.like_role === "WOW") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                </div>
                {postComment.likes.length > 1 && <span>{`${postComment.likes.length}`}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
      {commentOptionsOpen && (
        <>
          <div
            ref={commentOptionsRef}
            className={`fixed inset-0 z-[61]`}
            onClick={(e) => {
              setCommentOptionsOpen(false)
            }}
          ></div>
          <div className={`absolute shad-css z-[62] py-3 flex flex-col top-8 rounded-md overflow-hidden right-4 w-[340px] bg-[--off-bg-main]`}>
            <p
              onClick={() => {
                setCommentOptionsOpen(false)
                setHideComment(true)
              }}
              className={`font-semibold flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}
            >
              Hide comment
            </p>
            <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
              <div className={`flex flex-col`}>
                <p className={`font-semibold`}>Block {postComment.author.name}</p>
                <p className={`text-xs`}>You won't be able to see or contact each other.</p>
              </div>
            </div>
            <p className="font-semibold flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer">Report comment</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Comment
