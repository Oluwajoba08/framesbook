"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import CreatePost from "./CreatePost"

type newPostProps = {
  firstName: string
}

const NewPost = ({ firstName }: newPostProps) => {
  const [createPostOpen, setCreatePostOpen] = useState(false)

  return (
    <>
      <div className={`bg-[--off-bg-main] shadow-md py-2 px-2 lg:px-4 rounded-md w-[450px] lg:w-[500px] flex flex-col`}>
        <div onClick={() => setCreatePostOpen(true)} className="flex gap-1 my-2 font-medium">
          <Image src={`/profile-image.jpg`} alt="profile" width={32} height={32} className={`rounded-full object-cover h-10 w-10`} />
          <div className="px-3 py-2 rounded-full bg-[--bg-main] dark:bg-[--off-bg-main] w-full">
            <p className="font-medium text-[--off-text-main]">{`What's on your mind, ${firstName}?`}</p>
          </div>
        </div>
        <span aria-hidden="true" className={`bg-[--off-bg-main-off] h-px w-full mx-auto`}></span>
        <div className="flex lg:gap-1 mt-2 w-full justify-between">
          <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
            <Image src={`/video-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
            <p className={`font-medium text-[--off-text-main]`}>Live video</p>
          </div>
          <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
            <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
            <p className={`font-medium text-[--off-text-main]`}>Photo/video</p>
          </div>
          <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
            <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
            <p className={`font-medium text-[--off-text-main]`}>Feeling/activity</p>
          </div>
        </div>
      </div>
      {createPostOpen && <CreatePost setCreatePostOpen={setCreatePostOpen} />}
    </>
  )
}

export default NewPost
