import React from "react"
import Post from "./Post"
import getPosts from "@/lib/getPosts"

const Posts = () => {
  const posts = getPosts()

  return posts.map((post, index) => {
    return <Post {...post} />
  })
}

export default Posts
