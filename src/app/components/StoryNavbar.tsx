"use client"

import React, { useContext, useReducer, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "./Menu"
import Notifications from "./Notifications"
import AccountBar from "./AccountBar"
import MenuSkeleton from "./skeleton/MenuSkeleton"
import NotificationSkeleton from "./skeleton/NotificationSkeleton"
import AccountSkeleton from "./skeleton/AccountSkeleton"
import { ThemeContext } from "../providers/ThemeProvider"
import Messenger from "./Messenger"
import MessengerSkeleton from "./skeleton/MessengerSkeleton"

type stateTypes = {
  addOpen: boolean
  menuOpen: boolean
  messengerOpen: boolean
  notificationOpen: boolean
  accountOpen: boolean
}

const StoryNavbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)

  const initialState = { addOpen: false, menuOpen: false, messengerOpen: false, notificationOpen: false, accountOpen: false }

  const reducer = (state: stateTypes, action: { type: string }) => {
    switch (action.type) {
      case "MENU": {
        return { ...initialState, menuOpen: !state.menuOpen }
      }
      case "ADD": {
        return { ...initialState, addOpen: !state.addOpen }
      }
      case "MESSENGER": {
        return { ...initialState, messengerOpen: !state.messengerOpen }
      }
      case "NOTIFICATION": {
        return { ...initialState, notificationOpen: !state.notificationOpen }
      }
      case "ACCOUNT": {
        return { ...initialState, accountOpen: !state.accountOpen }
      }
      default:
        return initialState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <nav className="h-14 flex items-center fixed top-0 w-full bg-transparent">
      <div className="flex gap-2 px-4 h-full items-center bg-[--off-bg-main] border-b border-b-[--off-bg-main-off] w-[360px]">
        <button className="flex items-center justify-center p-1 w-10 h-10 rounded-full bg-[--bg-main]">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <Link href="/" aria-label="Framesbook">
          <svg className="fill-[--fb-color]" viewBox="0 0 36 36" fill="currentColor" height="40" width="40">
            <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
            <path
              className="fill-white"
              d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="absolute right-0 px-4 flex justify-center items-center pr-4 pl-2 h-full">
        <div className="hidden xl:flex mr-2 relative group h-full items-center justify-center">
          <button
            className={`p-2 rounded-full ${state.menuOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`}
            onClick={() => dispatch({ type: "MENU" })}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`${state.menuOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Menu</p>
        </div>
        <div className="xl:hidden mr-2 relative group h-full flex items-center justify-center">
          <button
            className={`p-2 rounded-full ${state.addOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`}
            onClick={() => dispatch({ type: "ADD" })}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`${state.addOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Add</p>
        </div>
        <div className="mr-2 relative group h-full flex items-center justify-center">
          <button
            className={`p-2 rounded-full ${state.messengerOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`}
            onClick={() => dispatch({ type: "MESSENGER" })}
          >
            <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" className={`${state.messengerOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <g fillRule="evenodd" transform="translate(-450 -1073)">
                <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
              </g>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Messenger</p>
        </div>
        <button onClick={() => toggleDark()} className="bg-[--fb-color] mr-2 p-1.5 text-white font-bold rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
            <path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-305Z" />
          </svg>
        </button>
        <div className="mr-2 relative group h-full flex items-center justify-center">
          <button
            className={`p-2 rounded-full ${state.notificationOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`}
            onClick={() => dispatch({ type: "NOTIFICATION" })}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`${state.notificationOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Notifications</p>
        </div>
        <div className="relative group h-full flex items-center justify-center">
          <div className="cursor-pointer">
            <Image src={`/avatar.jpg`} alt="profile" width={50} height={50} className={`rounded-full object-cover h-9 w-9`} />
          </div>
          <div onClick={() => dispatch({ type: "ACCOUNT" })} className="rounded-full h-4 w-4 absolute bottom-2 right-0 bg-[--off-bg-main] cursor-pointer flex justify-center items-center p-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--text-main]">
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Account</p>
        </div>
      </div>
      {state.menuOpen && (
        <>
          <div className={`fixed inset-0 z-[59]`} onClick={() => dispatch({ type: "MENU" })}></div>
          <Suspense fallback={<MenuSkeleton />}>
            <Menu />
          </Suspense>
        </>
      )}
      {state.notificationOpen && (
        <>
          <div className={`fixed inset-0 z-[59]`} onClick={() => dispatch({ type: "NOTIFICATION" })}></div>
          <Suspense fallback={<NotificationSkeleton />}>
            <Notifications />
          </Suspense>
        </>
      )}
      {state.accountOpen && (
        <>
          <div className={`fixed inset-0 z-[59]`} onClick={() => dispatch({ type: "ACCOUNT" })}></div>
          <Suspense fallback={<AccountSkeleton />}>
            <AccountBar />
          </Suspense>
        </>
      )}
      {state.messengerOpen && (
        <>
          <div className={`fixed inset-0 z-[59]`} onClick={() => dispatch({ type: "MESSENGER" })}></div>
          <Suspense fallback={<MessengerSkeleton />}>
            <Messenger />
          </Suspense>
        </>
      )}
    </nav>
  )
}

// <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="" style={{color: '#0866ff'}}><path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path></svg>

export default StoryNavbar
