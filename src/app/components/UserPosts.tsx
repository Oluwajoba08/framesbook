import React, { Suspense } from "react"
import Posts from "./Home/Posts"
import PostSkeleton from "./skeleton/PostSkeleton"
import { postProps } from "@/lib/definitions"

const UserPosts = async ({ authorId: id }: { authorId: string | null }) => {
  const res = await fetch("http://localhost:8000/posts")
  const data: postProps[] = await res.json()

  return (
    <Suspense fallback={<PostSkeleton />}>
      <Posts posts={data} authorId={id} />
    </Suspense>
  )
}

export default UserPosts
