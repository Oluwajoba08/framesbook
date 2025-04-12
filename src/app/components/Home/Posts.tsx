import React from "react"
import Post from "./Post"
import getPosts from "@/lib/getPosts"

const Posts = () => {
  const posts = getPosts()

  return posts.map((post, index) => {
    return <Post key={post.id} {...post} />
  })
}

export default Posts
