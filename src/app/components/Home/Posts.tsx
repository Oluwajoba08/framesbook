"use client"

import React from "react"
import Post from "./Post"
import { postProps } from "@/lib/definitions"

const Posts = ({ posts, authorId }: { posts: postProps[]; authorId: string | null }) => {
  if (authorId) {
    if (!posts) {
      return (
        <div className="px-3 py-2 h-full justify-center items-center shadow-md rounded-md bg-[--off-bg-main] w-[450px] lg:w-[500px]">
          <p className="text-xl">This user has no posts</p>
        </div>
      )
    } else {
      return (
        <>
          {posts
            .filter((post) => post.authorId === authorId)
            .map((post, index) => {
              return <Post key={post.id} {...post} />
            })}
        </>
      )
    }
  }

  if (!posts) {
    return (
      <div className="px-3 py-2 h-full justify-center items-center shadow-md rounded-md bg-[--off-bg-main] w-[450px] lg:w-[500px]">
        <p className="text-xl">Add friends to see posts.</p>
      </div>
    )
  }

  return (
    <>
      {posts?.map((post, index) => {
        return <Post key={post.id} {...post} />
      })}
    </>
  )
}

export default Posts
