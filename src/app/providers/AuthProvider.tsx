"use client"
import React, { createContext } from "react"
// import { createClient } from "@/utils/supabase/client"
// import { prisma } from "../db" // can't use async in client component

type ContextType = {}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const supabase = createClient()

  // const {
  //   data: { user },
  //   error,
  // } = await supabase.auth.getUser()

  // const userProfile = await prisma.user.findUnique({
  //   where: {
  //     id: user?.id,
  //   },
  // })

  // return <AuthContext.Provider value={{ user, userProfile }}>{children}</AuthContext.Provider>
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
