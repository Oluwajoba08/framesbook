"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { signup } from "../login/actions"
import SignUpBtn from "./SignUpBtn"

type setBoolProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup = ({ setModalOpen }: setBoolProps) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("")

  const [errors, setErrors] = useState({ firstNameErr: "", lastNameErr: "", emailOrPhoneErr: "", passwordErr: "" })
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [lastNameValid, setLastNameValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const validateForm = () => {}
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === formRef.current) {
      setModalOpen(false)
    }
  }
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFirstName = e.target.value
    setFirstName(inputFirstName)

    if (inputFirstName === "") {
      setErrors((errors) => ({ ...errors, firstNameErr: "Firstname is required" }))
      setFirstNameValid(false)
    } else {
      setErrors((errors) => ({ ...errors, firstNameErr: "" }))
      setFirstNameValid(true)
    }
    console.log("firstNameValid:", firstNameValid)
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLastName = e.target.value
    setLastName(inputLastName)

    if (inputLastName === "") {
      setErrors((errors) => ({ ...errors, lastNameErr: "Lastname is required" }))
      setLastNameValid(false)
    } else {
      setErrors((errors) => ({ ...errors, lastNameErr: "" }))
      setLastNameValid(true)
    }
    console.log("lastNameValid:", lastNameValid)
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
    console.log("emailValid:", emailValid)
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
    console.log("passwordValid:", passwordValid)
  }

  // useEffect(() => {
  //     validateForm()

  // }, [emailOrPhone, password])

  return (
    <div ref={formRef} onClick={(e) => handleClick(e)} className="absolute flex justify-center items-center inset-0 bg-[#ffffffa8] z-[1000]">
      <div className="relative rounded-md flex flex-col bg-white shadow-lg shadow-[#1414143d] w-[430px]">
        <div className="border-b p-5 py-4">
          <p className="font-bold text-3xl">Sign Up</p>
          <p className="text-[off-bg-main]">It's quick and easy.</p>
        </div>

        <div
          className="absolute rounded-full top-3 right-3 p-2 hover:bg-[--off-bg-main]"
          onClick={() => {
            setModalOpen(false)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>

        <form action={signup} className="flex flex-col gap-3 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className={`group relative flex flex-col`}>
              <input
                onChange={(e) => handleFirstNameChange(e)}
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className={`${errors.firstNameErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} bg-[--bg-main] rounded-md px-3 py-2 border-2 border-[--off-bg-main]`}
              />
              {errors.firstNameErr && (
                <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                  <div className="relative">
                    <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.lastNameErr}</div>
                    <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                  </div>
                </div>
              )}
            </div>
            <div className={`group relative flex flex-col`}>
              <input
                onChange={(e) => handleLastNameChange(e)}
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className={`${errors.lastNameErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} bg-[--bg-main] rounded-md px-3 py-2 border-2 border-[--off-bg-main]`}
              />
              {errors.lastNameErr && (
                <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                  <div className="relative">
                    <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.lastNameErr}</div>
                    <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`group relative flex flex-col`}>
            <input
              type="email"
              onChange={(e) => handleEmailChange(e)}
              id="email"
              name="email"
              placeholder="Email or Phone number"
              className={`${errors.emailOrPhoneErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} bg-[--bg-main] rounded-md px-3 py-2 border-2 border-[--off-bg-main]`}
            />
            {errors.emailOrPhoneErr && (
              <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                <div className="relative">
                  <div className="[inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.emailOrPhoneErr}</div>
                  <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                </div>
              </div>
            )}
          </div>
          <div className={`group relative flex flex-col`}>
            <input
              type="password"
              onChange={(e) => handlePasswordChange(e)}
              id="password"
              name="password"
              placeholder="Password"
              className={`${errors.passwordErr ? "border-[--app-colors-red] outline-0" : "focus:outline-[--fb-color]"} bg-[--bg-main] rounded-md px-3 py-2 border-2 border-[--off-bg-main]`}
            />
            {errors.passwordErr && (
              <div className="hidden group-hover:flex absolute -left-[125px] top-2">
                <div className="relative">
                  <div className=" [inline-size:100px] break-words text-sm p-3 rounded-[4px] bg-[--app-colors-red] text-white">{errors.passwordErr}</div>
                  <span className="top-1 -right-3 absolute w-0 h-0 border-y-[8px] border-l-[12px] border-l-[--app-colors-red] border-y-transparent"></span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <legend className="text-xs">Date of birth</legend>
            <div className="grid gap-3 grid-cols-3">
              <select name="day" id="day" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select name="month" id="month" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
              </select>
              <select name="year" id="year" className={`border rounded border-[--off-bg-main] p-1 flex items-center justify-between`}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1959">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <legend className="text-xs">Gender</legend>
            <div className="grid gap-3 grid-cols-2">
              <div className={`border rounded border-[--off-bg-main] px-2 py-1 flex items-center justify-between`}>
                <label htmlFor="Female">Female</label>
                <input defaultChecked type="radio" name="Gender" value="Female" id="Female" />
              </div>
              <div className={`border rounded border-[--off-bg-main] px-2 py-1 flex items-center justify-between`}>
                <label htmlFor="Male">Male</label>
                <input type="radio" name="Gender" value="Male" id="Male" />
              </div>
            </div>
          </div>
          <p className="text-[11px]">
            People who use our service may have uploaded your contact information to Framesbook.
            <Link href={"#"} className="text-[--fb-color]">
              Learn more.
            </Link>
          </p>
          <p className="text-[11px]">
            By clicking Sign Up, you agree to our
            <Link href={"#"} className="text-[--fb-color]">
              Terms
            </Link>
            ,
            <Link href={"#"} className="text-[--fb-color]">
              Privacy Policy
            </Link>
            and
            <Link href={"#"} className="text-[--fb-color]">
              Cookies Policy.
            </Link>
            You may receive SMS notifications from us and can opt out at any time.
          </p>

          <button disabled={!emailValid || !passwordValid || !firstNameValid || !lastNameValid} className="font-bold py-2 px-12 rounded-md bg-[#2abe32] text-white self-center disabled:bg-[#a1eca4]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
