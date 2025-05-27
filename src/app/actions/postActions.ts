"use server"

import { prisma } from "@/app/db"
import { getCurrentUserId, createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid"
import path from "path"
import type { Audience } from "@/lib/definitions"

export async function createPostWithImageAndAudience(formData: FormData) {
  const userId = await getCurrentUserId()

  if (!userId) {
    return { success: false, message: "User not authenticated" }
  }

  const supabase = await createClient()

  const content = formData.get("content") as string
  const imageFile = formData.get("image") as File | null
  const audienceType = formData.get("audience")
  //   const audienceUserJson = formData.get("audienceUsers") as string | null

  if (!content && !imageFile) {
    return { success: false, message: "Post must have content or an image" }
  }

  let imageUrl: string | null = null

  if (imageFile && imageFile.size > 0) {
    // Image upload logic
    const bucketName = "post-images"
    const uniqueFileName = `${uuidv4()}${path.extname(imageFile.name)}`
    const filePath = `${userId}/${uniqueFileName}`

    try {
      const { data: publiUrlData } = supabase.storage.from(bucketName).getPublicUrl(filePath)

      if (publiUrlData) {
        imageUrl = publiUrlData.publicUrl
      } else {
        console.error("Failed to get public URL after upload")
      }
    } catch (error) {
      console.error("Unexpected image upload error", error)
      return { success: false, message: "An unexpected error during image upload" }
    }

    // Db create post logic
    try {
      // work on exclude and include friends
    } catch (error) {}
  }

  try {
    const newPost = await prisma.posts.create({
      data: {
        content: content || "",
        images: imageUrl,
        author_id: userId,

        // audience: audienceType
      },
    })
    revalidatePath("/")
    revalidatePath(`/${userId}`)

    return { success: true, message: "Post created successfully", post: newPost }
  } catch (error) {}
}
