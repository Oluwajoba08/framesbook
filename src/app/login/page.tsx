"use client"

import React, { useState } from "react"
import Link from "next/link"
import Signup from "../components/Signup"
import LoginBtn from "../components/LoginBtn"
import { login } from "./actions"

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ emailOrPhoneErr: "", passwordErr: "" })
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setModalOpen((modalOpen) => !modalOpen)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value
    setEmailOrPhone(inputEmail)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    // const phoneRegex = /^\+(?:[0-9]?){6,14}[0-9]$/;

    if (inputEmail === "") {
      // setErrors((errors) => ({...errors, emailOrPhoneErr: 'Email or Phone Number is required'}));
      setErrors((errors) => ({ ...errors, emailOrPhoneErr: "Email is required" }))
      setEmailValid(false)
      // } else if (!emailRegex.test(inputEmail) && !phoneRegex.test(inputEmail)){
    } else if (!emailRegex.test(inputEmail)) {
      setErrors((errors) => ({ ...errors, emailOrPhoneErr: "Invalid Email" }))
      setEmailValid(false)
    } else {
      setErrors((errors) => ({ ...errors, emailOrPhoneErr: "" }))
      setEmailValid(true)
    }
  }
  // CcCfYznEAeE6nUN7
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value
    setPassword(inputPassword)

    if (!inputPassword) {
      setErrors((errors) => ({ ...errors, passwordErr: "Password is required" }))
      setPasswordValid(false)
    } else if (inputPassword.length < 6) {
      setErrors((errors) => ({ ...errors, passwordErr: "Password must be at least 6 characters" }))
      setPasswordValid(false)
    } else {
      setErrors((errors) => ({ ...errors, passwordErr: "" }))
      setPasswordValid(true)
    }
  }

  return (
    <div className="h-screen absolute z-[999] inset-0 flex bg-[--bg-main] gap-12 items-center justify-center px-6 flex-col md:flex-row">
      <div className="flex flex-col gap-3 max-w-[480px] items-center md:items-start">
        <p className="font-bold text-[--fb-color] text-6xl">framesbook</p>
        <p className="text-2xl font-[500]">Framesbook helps you connect and share with the people in your life.</p>
      </div>
      <div className="flex flex-col items-center">
        <form action={login} className="flex flex-col p-4 shadow-xl bg-white rounded-md items-center gap-3 w-[360px]">
          <div className="flex flex-col self-stretch">
            <input
              onChange={(e) => handleEmailChange(e)}
              type="email"
              placeholder="Email address"
              className={`${errors.emailOrPhoneErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} rounded-md self-stretch px-3 py-2 border-2 border-[--bg-main]`}
            />
            {errors.emailOrPhoneErr && <span className="text-[--app-colors-red] text-xs">{errors.emailOrPhoneErr}</span>}
          </div>

          <div className="flex flex-col self-stretch">
            <input
              onChange={(e) => handlePasswordChange(e)}
              type="password"
              placeholder="Password"
              className={`${errors.passwordErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} rounded-md self-stretch px-3 py-2 border-2 border-[--bg-main]`}
            />
            {errors.passwordErr && <span className="text-[--app-colors-red] text-xs">{errors.passwordErr}</span>}
          </div>
          <button
            disabled={!emailOrPhone || !password || !emailValid || !passwordValid}
            type="submit"
            className={`bg-[--fb-color] py-3 px-4 font-bold self-stretch rounded-md text-white disabled:bg-blue-200`}
          >
            Log in
          </button>
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
