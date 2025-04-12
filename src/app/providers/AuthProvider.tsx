"use client"
import React, { createContext } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

type ContextType = {}

{
  /* <i aria-hidden="true" background-position: 0px -377px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i> */
}
export const AuthContext = createContext({})

export const AuthProvider = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect("/login")
  // }

  return <AuthContext.Provider value={{ data, error }}>{children}</AuthContext.Provider>
}
