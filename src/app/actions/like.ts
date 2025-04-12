"use server"
import type { postProps } from "@/lib/definitions"
import { revalidatePath } from "next/cache"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import type { like } from "@/lib/definitions"
import { likePost, unLikePost } from "@/lib/data"

export async function likeThisPost(postId: postProps["id"], likes: like[], role: like["like_role"]) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    // redirect("/login")
    console.log("User not logged in")
  }

  const like = await likePost(postId, role, "ere435")
  revalidatePath("/")
}

export async function unLikeThisPost(postId: postProps["id"]) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    // redirect("/login")
  }

  const like = await unLikePost(postId, "ere435")
  revalidatePath("/")
}
