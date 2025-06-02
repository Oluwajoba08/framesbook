import React from "react"
import Profile from "../components/Profile"
import { AlertCircle } from "lucide-react"
import { createClient, getCurrentUserId } from "@/utils/supabase/server"
import { prisma } from "../db"
import { notFound } from "next/navigation"
import { postProps, type User } from "../../lib/definitions"
import Link from "next/link"
// import { redirect } from "next/navigation"

const page = async (props: { params: Promise<{ profileLink: string }> }) => {
  const params = await props.params
  // const currentUserId = await getCurrentUserId()

  const userRes = await fetch("http://localhost:8000/users")
  const users: User[] = await userRes.json()

  const postRes = await fetch("http://localhost:8000/posts")
  const posts: postProps[] = await postRes.json()

  const user = users.find((singleUser) => singleUser.profileLink === params.profileLink)
  const userPosts = posts.filter((post) => post.authorId === user?.id)
  // console.log(currentUserId)
  // for testing, we

  // const profiledUser = true;
  // const profiledUser = await prisma.user.findUnique({
  //   where: {
  //     profile_link: params.profileLink,
  //   },
  // })
  // const profilePosts = await prisma.posts.findMany({
  //   where: {
  //     authorId: profiledUser.id,
  //   },
  // })

  if (!user) {
    notFound()
  }

  return <Profile user={user} posts={userPosts} />
}

export default page
