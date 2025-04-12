"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { createClient } from "@/utils/supabase/server"
import { prisma } from "../db"
import { ApiResponse } from "@/lib/definitions"

export async function login(prevState: any, formData: FormData): Promise<ApiResponse> {
  try {
    const supabase = createClient()

    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    const dataSchema = z.object({
      email: z.string().email("Invalid email format").trim(),
      password: z.string().min(6, "Password must be at least 6 characters"),
    })

    const userData = dataSchema.safeParse(rawData)
    if (!userData.success) {
      return {
        success: false,
        message: `Validation failed: ${userData.error.errors[0].message}`,
      }
    }

    const { data, error } = await supabase.auth.signInWithPassword(userData.data)
    if (error) {
      return {
        success: false,
        message: "An unexpected error occured. Please try again later.",
      }
    }

    console.log("Log in successful")
    return {
      success: true,
      message: "Logged in successfully",
      data: data.user,
    }
  } catch (err) {
    console.error("Unexpected error: ", err)
    return {
      success: false,
      message: "An unexpected error occured. Please try again later.",
    }
  }
}

export async function signup(prevState: any, formData: FormData): Promise<ApiResponse> {
  try {
    const supabase = createClient()

    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      gender: formData.get("gender") as string,
      day: formData.get("day"),
      month: formData.get("month") as string,
      year: formData.get("year"),
    }

    const dataSchema = z.object({
      email: z.string().email("Invalid email address").trim(),
      password: z.string().min(6, "Password must be at least 6 characters"),
      firstname: z.string().min(2, "Firstname must be at least 2 characters").trim(),
      lastname: z.string().min(2, "Lastname must be at least 2 characters").trim(),
      gender: z.string(),
      day: z.string(),
      month: z.string(),
      year: z.string(),
    })

    const userData = dataSchema.safeParse(rawData)
    console.log(userData)
    if (!userData.success) {
      return {
        success: false,
        message: `Validation failed: ${userData.error.errors[0].message}`,
      }
    }

    const { data, error } = await supabase.auth.signUp({
      email: userData.data.email,
      password: userData.data.password,
      options: {
        data: {
          firstname: userData.data.firstname,
          lastname: userData.data.lastname,
        },
      },
    })

    if (error) {
      return {
        success: false,
        message: "An unexpected error occured. Please try again later.",
      }
    }

    // if (data.user) { // can use prisma.profile.create
    // const user = await prisma.user.create({
    //   data: {
    //     name: fullData.fisrtname + " " + fullData.lastname,
    //     email: fullData.email,
    //     profile: {
    //       create: {
    //         bio: "Hi there, I am new to framesbook.",
    //         date_of_birth: Date(),
    //       },
    //     },
    //   },
    // })
    // }
    console.log("signup successful")
    return {
      success: true,
      message: "Signup successful! Please check your email to verify your account.",
      data: { userId: data.user?.id },
    }
  } catch (err) {
    console.error("Unexpected error: ", err)
    return {
      success: false,
      message: "An unexpected error occured. Please try again later.",
    }
  }
}

export async function logout() {
  const supabase = createClient()

  try {
    let { error } = await supabase.auth.signOut()
    redirect("/login")
  } catch (err) {
    // add better ux later
    console.error("Failed to logout: ", err)
  }
}
