import React from "react"
import Profile from "../components/Profile"
import { AlertCircle } from "lucide-react"
import { createClient } from "@/utils/supabase/server"
import { prisma } from "../db"
import { notFound } from "next/navigation"
// import { redirect } from "next/navigation"

const ProfilePage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params
  const supabase = await createClient()

  const profiledUser = true
  // const profiledUser = await prisma.user.findUnique({
  //   where: {
  //     id: params.id,
  //   },
  // })

  if (!profiledUser) {
    notFound()
  }

  return <Profile id={params.id} />
}

export default ProfilePage
