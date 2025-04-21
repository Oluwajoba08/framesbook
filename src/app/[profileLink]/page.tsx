import React from "react"
import Profile from "../components/Profile"
import { prisma } from "../db"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
// import { getProfile } from "@/lib/data"

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const supabase = await createClient()

  // const posts = await getProfile(params.id)
  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect("/login")
  // }

  return <Profile params={params} />
}

export default ProfilePage
