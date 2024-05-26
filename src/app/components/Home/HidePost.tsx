import React from "react"
import type { postProps } from "@/lib/definitions"

const HidePost = async ({ id, group, author, setHidePost }: { id: string; group: postProps["group"]; author: postProps["author"]; setHidePost: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="flex flex-col shadow-md p-3 rounded-md bg-[--off-bg-main] w-[450px] lg:w-[500px]">
      <div className="flex justify-between items-center hover:bg-[--off-bg-main-off] px-2 rounded py-1.5 cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col">
            <p className="font-semibold text-[--text-main]">Hidden</p>
            <p className="text-xs text-[--off-text-main]">Hiding posts help Framesbook personalize your Feed.</p>
          </div>
        </div>
        <button onClick={() => setHidePost(false)} className="px-3 py-1.5 self-center bg-[--off-bg-main-off] rounded font-semibold">
          Undo
        </button>
      </div>
      <span className="h-px w-full bg-[--off-text-main-off] my-1"></span>
      <div className="flex gap-2 items-center hover:bg-[--off-bg-main-off] px-2 rounded py-1.5 cursor-pointer">
        <div className="flex flex-col">
          <p className="font-semibold text-[--text-main]">Snooze {author.name.split(" ")[0]} for 30 days</p>
          <p className="text-xs text-[--off-text-main]">Temporarily stop seeing posts.</p>
        </div>
      </div>
      <div className="flex gap-2 items-center hover:bg-[--off-bg-main-off] px-2 rounded py-1.5 cursor-pointer">
        <div className="flex flex-col">
          <p className="font-semibold text-[--text-main]">Report Post</p>
          <p className="text-xs text-[--off-text-main]">We won't let {author.name.split(" ")[0]} know who reported this.</p>
        </div>
      </div>
      <div className="flex h-12 gap-2 items-center hover:bg-[--off-bg-main-off] px-2 rounded py-1.5 cursor-pointer">
        <p className="font-semibold text-[--text-main]">Manage your Feed</p>
      </div>
    </div>
  )
}

export default HidePost
