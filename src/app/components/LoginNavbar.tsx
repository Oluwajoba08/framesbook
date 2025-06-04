"use client"

import React, { useState, useActionState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"
import { Loader } from "lucide-react"
import { login } from "../login/actions"

type formDataType = {
  email: string
  password: string
}
type formError = Partial<formDataType>

const LoginNavbar = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<formError>({})
  const router = useRouter()
  const [state, formAction] = useActionState(login, {
    success: false,
    message: "",
    errors: {},
  })

  const validateField = (name: string, value: string) => {
    //jkjk
  }

  return (
    <nav className={`h-14 top-0 bg-[--off-bg-main] dark:bg-[--bg-main] items-center px-4 shad-css fixed w-full z-[100]`}>
      <div className="flex justify-between">
        <p className="text-xl font-bold">Framesbook</p>
        <form action={formAction} className="flex gap-2">
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Email address" className={"border-neutral-200 rounded-md px-3 py-2 border-2"} />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="Password" className={"border-neutral-200 rounded-md px-3 py-2 border-2"} />
          <LoginBtn />
          <Link href={"/recover/initiate"} className="text-[--fb-color] text-sm">
            Forgotten Account?
          </Link>
        </form>
      </div>
    </nav>
  )
}

export default LoginNavbar

const LoginBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className={`bg-[--fb-color] py-3 px-4 font-bold rounded-md text-white disabled:bg-blue-200`}>
      {pending ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin" />
          <span className="ml-1">Logging in...</span>
        </div>
      ) : (
        "Log in"
      )}
    </button>
  )
}
