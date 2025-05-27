"use client"

import React, { useState } from "react"
import type { CommentProps, User } from "@/lib/definitions"
import Image from "next/image"
import Link from "next/link"
import Comment from "./Comment"
// import { getCurrentUserId } from "@/utils/supabase/server"

type CommentPageProps = {
  postComments: CommentProps[]
  setExpandPost: React.Dispatch<React.SetStateAction<boolean>>
}

const CommentSnippet = ({ postComments, setExpandPost }: CommentPageProps) => {
  const [newComment, setNewComment] = useState("")
  // const currentUserId = await getCurrentUserId()

  return (
    <div className="border-t border-[--off-bg-main-off-fade]">
      <p onClick={() => setExpandPost(true)} className="font-semibold underline py-2 text-sm">
        View more comments
      </p>
      <Comment postComment={postComments[0]} />
      {/* TODO adjust this later to only show 1 relevant comment */}
      <div className={`flex gap-2 py-3`}>
        <div className="rounded-full w-8 h-8 overflow-hidden ">
          <Image src={`/avatar.jpg`} className="w-8 h-8 object-cover" width={48} height={48} alt={`avatar`} />
        </div>
        {/* Bottom form */}
        <div className="relative w-full">
          <input className="text-sm w-full rounded-full p-2 bg-[--off-bg-main-off] text-neutral-400" placeholder={`Comment as ${"Oluwajoba Bukola"}`} value={newComment} onChange={(e) => setNewComment(e.target.value)} />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
            <span>😎</span>
            <span>🙂</span>
            <span>📷</span>
            <span>💳</span>
            <span>🧧</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSnippet
