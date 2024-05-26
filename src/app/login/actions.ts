"use server"
// await new Promise((resolve) => setTimeout(resolve,500))
// const { pending } = useFormStatus()
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { createClient } from "@/utils/supabase/server"
import { prisma } from "../db"

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const schema = z.object({
    // email: z.string().email("")),
    // password: z.string().min(6,)
  })
  // const passwordSchema = z.object({
  //   email: z.string().email({
  //     message: "Please enter a valid email"
  //   })
  // })

  console.log(data)

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect("/error")
  }

  //   console.log('login function, no errors')
  revalidatePath("/", "layout")
  redirect("/")
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs

  // const data = Object.fromEntries(formData.entries())
  // console.log(data)

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const fullData = {
    email: formData.get("email") as string,
    fisrtname: formData.get("fisrtname") as string,
    lastname: formData.get("lastname") as string,
    day: formData.get("day") as string,
    month: formData.get("month") as string,
    year: formData.get("year") as string,
  }

  // const { error } = await supabase.auth.signUp(data)

  // if (error) {
  //   redirect('/error')
  // }

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

  revalidatePath("/", "layout")
  redirect("/")
}

// logout
// let { error } = await supabase.auth.signOut()
