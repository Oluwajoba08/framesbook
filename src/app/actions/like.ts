"use server"
import type { postProps } from "@/lib/definitions"
import { revalidatePath } from "next/cache"
import { createClient, getCurrentUserId } from "@/utils/supabase/server"
import type { like } from "@/lib/definitions"
import { likePost, unLikePost } from "@/lib/data"

export async function likeThisPost(postId: postProps["id"], likes: like[], role: like["like_role"]) {
  const userId = await getCurrentUserId()

  if (!userId) {
    return {
      success: false,
      message: "User not authenticated",
    }
  }
  if (!postId) {
    return {
      success: false,
      message: "post ID is required",
    }
  }

  const like = await likePost(postId, role, userId)
  revalidatePath("/")
}

export async function unLikeThisPost(postId: postProps["id"]) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    // redirect("/login")
  }

  const like = await unLikePost(postId, "ere435")
  revalidatePath("/")
}
