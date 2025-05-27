"use client"

import React, { useState, useRef, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"
import { signup } from "../login/actions"
import { toast } from "sonner"

type PageProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type formDataType = {
  firstname: string
  lastname: string
  email: string
  password: string
  gender: string
}

type formError = Partial<formDataType>

const MAX_NUMBER_OF_YEARS = 100
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const YEARS = Array.from({ length: MAX_NUMBER_OF_YEARS }, (_, i) => new Date().getFullYear() - MAX_NUMBER_OF_YEARS + i + 1).reverse()

const Signup = ({ setModalOpen }: PageProps) => {
  const [formData, setFormData] = useState<formDataType>({ firstname: "", lastname: "", email: "", password: "", gender: "" })
  const [errors, setErrors] = useState<formError>({})
  const router = useRouter()

  const formRef = useRef(null)
  const [state, formAction] = useActionState(signup, {
    success: false,
    message: "",
    errors: {},
  })

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstname":
        if (!value.trim()) return "Firstname is required"
        if (value.trim().length < 2) return "Firstname must be at least two characters"
        break
      case "lastname":
        if (!value.trim()) return "Lastname is required"
        if (value.trim().length < 2) return "Lastname must be at least two characters"
        break
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === formRef.current) {
      setModalOpen(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof formError]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
        setTimeout(() => router.push("/verify-email"), 3000)
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <div ref={formRef} onClick={(e) => handleClick(e)} className="absolute flex justify-center items-center inset-0 bg-[#ffffffa8] z-[1000]">
      <div className="relative rounded-md flex flex-col bg-white shadow-lg shadow-[#1414143d] w-[430px]">
        <div className="border-b p-5 py-4">
          <p className="font-bold text-3xl">Sign Up</p>
          <p className="text-[off-bg-main]">It's quick and easy.</p>
        </div>

        <div
          className="absolute cursor-pointer rounded-full top-3 right-3 p-2 hover:bg-[--bg-main]"
          onClick={() => {
            setModalOpen(false)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>

        <form action={formAction} className="flex flex-col gap-3 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className={`group relative flex flex-col`}>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                required
                minLength={2}
                placeholder="First Name"
                className={`${errors.firstname ? "border-red" : "border-[--off-bg-main]"} bg-[--bg-main] rounded-md px-3 py-2 border-2`}
              />
              {errors.firstname && (
                <div className="hidden group-hover:flex absolute z-10 -left-[125px] top-2">
                  <div className="relative">
                    <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.firstname}</div>
                    <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                  </div>
                </div>
              )}
            </div>
            <div className={`group relative flex flex-col`}>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="lastname"
                value={formData.lastname}
                required
                minLength={2}
                name="lastname"
                placeholder="Last Name"
                className={`${errors.lastname ? "border-[--app-colors-red]" : "border-[--off-bg-main]"} bg-[--bg-main] rounded-md px-3 py-2 border-2`}
              />
              {errors.lastname && (
                <div className="hidden group-hover:flex absolute z-10 -left-[125px] top-2">
                  <div className="relative">
                    <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.lastname}</div>
                    <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`group relative flex flex-col`}>
            <input
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.email}
              required
              id="email"
              name="email"
              placeholder="Email"
              className={`${errors.email ? "border-[--app-colors-red]" : " border-[--off-bg-main]"} bg-[--bg-main] rounded-md px-3 py-2 border-2`}
            />
            {errors.email && (
              <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                <div className="relative">
                  <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.email}</div>
                  <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                </div>
              </div>
            )}
          </div>
          <div className={`group relative flex flex-col`}>
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.password}
              id="password"
              name="password"
              required
              minLength={6}
              placeholder="Password"
              className={`${errors.password ? "border-[--app-colors-red]" : "border-[--off-bg-main]"} bg-[--bg-main] rounded-md px-3 py-2 border-2`}
            />
            {errors.password && (
              <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                <div className="relative">
                  <div className=" [inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.password}</div>
                  <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <legend className="text-xs">Date of birth</legend>
            <div className="grid gap-3 grid-cols-3">
              <select name="day" id="day" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select name="month" id="month" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                {MONTHS.map((month) => (
                  <option key={month} value={month}>
                    {month.slice(0, 3)}
                  </option>
                ))}
              </select>
              <select name="year" id="year" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <legend className="text-xs">Gender</legend>
            <div className="grid gap-3 grid-cols-2">
              <div className={`border rounded border-[--off-bg-main] px-2 py-1 flex items-center justify-between`}>
                <label htmlFor="Female">Female</label>
                <input defaultChecked type="radio" name="gender" value="Female" id="Female" />
              </div>
              <div className={`border rounded border-[--off-bg-main] px-2 py-1 flex items-center justify-between`}>
                <label htmlFor="Male">Male</label>
                <input type="radio" name="gender" value="Male" id="Male" />
              </div>
            </div>
          </div>
          <p className="text-[11px]">
            People who use our service may have uploaded your contact information to Framesbook.{" "}
            <Link href={"#"} className="text-[--fb-color]">
              Learn more.
            </Link>
          </p>
          <p className="text-[11px]">
            By clicking Sign Up, you agree to our{" "}
            <Link href={"#"} className="text-[--fb-color]">
              Terms
            </Link>
            ,
            <Link href={"#"} className="text-[--fb-color]">
              {" "}
              Privacy Policy{" "}
            </Link>
            and
            <Link href={"#"} className="text-[--fb-color]">
              {" "}
              Cookies Policy.{" "}
            </Link>
            You may receive SMS notifications from us and can opt out at any time.
          </p>
          <SignupBtn />
        </form>
      </div>
    </div>
  )
}

export default Signup

const SignupBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className={`bg-[--fb-color] py-3 px-4 font-bold self-stretch rounded-md text-white disabled:bg-blue-200`}>
      {pending ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin" />
          <span className="ml-1">Creating account...</span>
        </div>
      ) : (
        "Sign up"
      )}
    </button>
  )
}
