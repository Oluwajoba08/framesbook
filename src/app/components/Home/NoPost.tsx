import Link from "next/link"
import React from "react"

const NoPost = () => {
  return (
    <div className="flex flex-col h-60 justify-center items-center shadow-md gap-1 rounded-md bg-[--off-bg-main] w-[450px] lg:w-[500px]">
      <p className="font-bold text-lg">No more posts</p>
      <p>Add friends to see more posts in your feed</p>
      <Link href={`/friends`} className="rounded-md text-white bg-[--fb-color] px-4 py-2.5 mt-3">
        Find friends
      </Link>
    </div>
  )
}

export default NoPost
