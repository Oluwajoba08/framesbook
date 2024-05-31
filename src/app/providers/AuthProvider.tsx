"use client"
import React, { createContext } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

type ContextType = {}

export const AuthContext = createContext<ContextType>({})

const AuthProvider = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
}

export default AuthProvider
