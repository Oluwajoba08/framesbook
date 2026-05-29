"use client"

import React, { useState } from "react"
import LoginNavbar from "@/app/components/LoginNavbar"

const page = () => {
  ;("")
  const [email, setEmail] = useState("")

  return (
    <>
      <LoginNavbar />
      <main className="min-h-screen items-center justify-center bg-[--off-bg-main]">
        <div className="flex flex-col bg-[--bg-main] px-4 py-3 rounded-t-sm w-'[720px]">
          <p className="text-xl">Find Your Account</p>
          <span className="h-[1px] my-3 w-full bg-[--off-text-main]"></span>
          <div className="flex flex-col">
            <p>Please enter your email address to search for your account</p>
            <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </main>
    </>
  )
}

export default page
