"use client"

import React, { useState } from "react"
import Link from "next/link"
// import { useRouter } from "next/navigation"

const LoginModal = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  //   const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    // sjfs
    e.preventDefault()
    // const res = fetch("", {
    //   method: "POST",
    // })
  }

  return (
    <div className="flex bg-[--bg-main] w-screen md:gap-12 gap-6 items-center justify-center px-6 flex-col md:flex-row">
      <div className="flex flex-col items-center">
        <form className="flex flex-col p-4 shadow-xl bg-white rounded-md items-center gap-3 w-[360px]">
          <div className="flex flex-col self-stretch">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Email address" className={`rounded-md self-stretch px-3 py-2 border-2`} />
          </div>

          <div className="flex flex-col self-stretch">
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="Password" className={`rounded-md self-stretch px-3 py-2 border-2`} />
          </div>
          <button disabled={isLoading} type="submit" onSubmit={handleSubmit} className={`bg-[--fb-color] py-3 px-4 font-bold self-stretch rounded-md text-white disabled:bg-blue-200`}>
            "Log in"
          </button>
          <Link href={"/login/identify"} className="text-[--fb-color] text-sm">
            Forgotten Password?
          </Link>

          <div className="w-full h-[1px] my-2 bg-[--off-bg-main]"></div>
          <Link href={"/reg"} className="font-bold py-3 px-4 rounded-md bg-[#2abe32] text-white" onClick={(e) => ""}>
            Create new account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
