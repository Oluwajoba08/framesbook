"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Signup from "../components/Signup"
import { useFormState, useFormStatus } from "react-dom"
import { login } from "./actions"
import { Loader } from "lucide-react"
import { toast } from "sonner"

type formDataType = {
  email: string
  password: string
}
type formError = Partial<formDataType>

const Login = () => {
  const [formData, setFormData] = useState<formDataType>({ email: "", password: "" })
  const [errors, setErrors] = useState<formError>({})
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()
  const [state, formAction] = useFormState(login, {
    success: false,
    message: "",
    errors: {},
  })

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setModalOpen((modalOpen) => !modalOpen)
  }

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Email is required"
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) return "Invalid Email"
        break
      case "password":
        if (!value.trim()) return "Password is required"
        if (value.length < 6) return "Password must be at least 6 characters"
        break
      default:
        break
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof formError]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
        setTimeout(() => router.push("/"), 3000)
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <div className="min-h-screen flex bg-[--bg-main] w-screen md:gap-12 gap-6 items-center justify-center px-6 flex-col md:flex-row">
      <div className="flex flex-col gap-3 max-w-[480px] items-center md:items-start">
        <p className="font-bold text-[--fb-color] text-6xl">framesbook</p>
        <p className="text-2xl font-[500]">Framesbook helps you connect and share with the people in your life.</p>
      </div>
      <div className="flex flex-col items-center">
        <form action={formAction} className="flex flex-col p-4 shadow-xl bg-white rounded-md items-center gap-3 w-[360px]">
          <div className="flex flex-col self-stretch">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email address"
              className={`${errors.email ? "border-red-500" : "border-neutral-200"} rounded-md self-stretch px-3 py-2 border-2`}
            />
            {errors.email && <span className="text-[--app-colors-red] text-xs">{errors.email}</span>}
          </div>

          <div className="flex flex-col self-stretch">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.password}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              minLength={6}
              className={`${errors.password ? "border-red-500" : "border-neutral-200"} rounded-md self-stretch px-3 py-2 border-2`}
            />
            {errors.password && <span className="text-[--app-colors-red] text-xs">{errors.password}</span>}
          </div>
          <LoginBtn />
          <Link href={"#"} className="text-[--fb-color] text-sm">
            Forgotten Password?
          </Link>

          <div className="w-full h-[1px] my-2 bg-[--off-bg-main]"></div>
          <button className="font-bold py-3 px-4 rounded-md bg-[#2abe32] text-white" onClick={(e) => openModal(e)}>
            Create new account
          </button>
        </form>
        <p className="mt-8 text-sm">
          <span className="font-[600]">Create a Page</span> for a celebrity, brand or business.
        </p>
      </div>

      {modalOpen && <Signup setModalOpen={setModalOpen} />}
    </div>
  )
}

export default Login

const LoginBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className={`bg-[--fb-color] py-3 px-4 font-bold self-stretch rounded-md text-white disabled:bg-blue-200`}>
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
