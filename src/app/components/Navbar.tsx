"use client"

import React from "react"
import { useContext, useReducer, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Menu from "./Menu"
import Notifications from "./Notifications"
import AccountBar from "./AccountBar"
import Search from "./Search"
import MenuSkeleton from "./skeleton/MenuSkeleton"
import NotificationSkeleton from "./skeleton/NotificationSkeleton"
import AccountSkeleton from "./skeleton/AccountSkeleton"
import { ThemeContext } from "../providers/ThemeProvider"
import Messenger from "./Messenger"
import MessengerSkeleton from "./skeleton/MessengerSkeleton"
import SearchSkeleton from "./skeleton/SearchSkeleton"

type stateTypes = {
  addOpen: boolean
  menuOpen: boolean
  messengerOpen: boolean
  notificationOpen: boolean
  accountOpen: boolean
  searchOpen: boolean
}

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  const pathname = usePathname()

  // const [searchOpen, setSearchOpen] = useState(false);
  const initialState = { addOpen: false, menuOpen: false, messengerOpen: false, notificationOpen: false, accountOpen: false, searchOpen: false }

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
      case "SEARCH": {
        return { ...initialState, searchOpen: !state.searchOpen }
      }
      default:
        return initialState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <nav className={`${pathname.includes("/stories") && !pathname.includes("stories/create") ? "hidden" : "flex"} h-14 top-0 bg-[--off-bg-main] dark:bg-[--bg-main] items-center px-4 border-b border-b-[--off-bg-main-off] fixed w-full z-[100]`}>
      <div className="flex gap-2 absolute">
        <Link href="/" aria-label="Framesbook">
          <svg className="fill-[--fb-color]" viewBox="0 0 36 36" fill="currentColor" height="40" width="40">
            <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
            <path
              className="fill-white"
              d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
            ></path>
          </svg>
        </Link>
        <div onClick={() => dispatch({ type: "SEARCH" })} className="flex">
          <div className={`rounded-full xl:rounded-l-full xl:rounded-r-none p-3 bg-[--bg-main] dark:bg-[--off-bg-main]`}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-[--off-text-main]">
              <g fillRule="evenodd" transform="translate(-448 -544)">
                <g fillRule="nonzero">
                  <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                  <path
                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                    transform="translate(448 544)"
                  ></path>
                  <path
                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                    transform="translate(448 544)"
                  ></path>
                  <path
                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                    transform="translate(448 544)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            className="text-[--off-text-main] py-2 pl-1 pr-3 rounded-r-full bg-[--bg-main] dark:bg-[--off-bg-main] hidden xl:inline
            w-[210px]"
          >
            <p>Search Framesbook</p>
          </div>
        </div>
      </div>

      <ul className={`${pathname.includes("/stories") ? "hidden" : "flex"} justify-start min-[735px]:justify-center items-center w-full h-full px-[110px] transition-all `}>
        <li className="relative hidden min-[735px]:flex flex-col items-center justify-center h-full group">
          <Link href="/" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path>
                </svg>
              )}
            </div>
            {pathname === "/" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Home</p>
        </li>

        <li className="relative hidden min-[735px]:flex flex-col items-center justify-center h-full group ml-1.5">
          <Link href="/watch" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/watch" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/watch" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M9.427 2h5.146c1.824 0 3.293 0 4.45.155 1.2.162 2.21.507 3.012 1.31.803.802 1.148 1.813 1.31 3.013.155 1.156.155 2.625.155 4.449v.146c0 1.824 0 3.293-.155 4.45-.162 1.2-.507 2.21-1.31 3.012-.802.803-1.813 1.148-3.013 1.31-1.156.155-2.625.155-4.449.155H9.427c-1.824 0-3.293 0-4.45-.155-1.2-.162-2.21-.507-3.013-1.31-.802-.802-1.147-1.813-1.309-3.013C.5 14.366.5 12.897.5 11.073v-.146c0-1.824 0-3.293.155-4.45.162-1.2.507-2.21 1.31-3.013.802-.802 1.813-1.147 3.013-1.309C6.134 2 7.603 2 9.427 2zm.571 6.135A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2a1 1 0 0 0-.998.003zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
                  <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
                </svg>
              )}
            </div>
            {pathname === "/watch" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Video</p>
        </li>

        <li className="relative hidden min-[735px]:flex flex-col items-center justify-center h-full group ml-1.5">
          <Link href="/marketplace" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/marketplace" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/marketplace" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M4.581 1c-1.38 0-2.597.905-2.993 2.227l-.816 2.72A6.45 6.45 0 0 0 .5 7.8c0 1.425.573 2.716 1.501 3.655L2 11.5v4.57c0 1.355 0 2.471.119 3.355.124.928.396 1.747 1.053 2.403.656.657 1.475.928 2.403 1.053.884.12 2 .119 3.354.119h6.142c1.354 0 2.47 0 3.354-.119.928-.125 1.747-.396 2.403-1.053.657-.656.928-1.475 1.053-2.403.12-.884.119-2 .119-3.354V11.5l-.001-.045A5.183 5.183 0 0 0 23.5 7.8a6.47 6.47 0 0 0-.272-1.854l-.816-2.719A3.125 3.125 0 0 0 19.42 1H4.58zM20 12.716V16c0 1.442-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.551.074-1.24.094-2.159.1V17.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 8 17.5v3.498c-.918-.005-1.608-.025-2.159-.099-.706-.095-1.033-.262-1.255-.485-.223-.222-.39-.55-.485-1.255C4.002 18.424 4 17.443 4 16v-3.284A5.192 5.192 0 0 0 5.7 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 12 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 18.3 13a5.2 5.2 0 0 0 1.7-.284zM14 21h-4v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
                </svg>
              )}
            </div>
            {pathname === "/marketplace" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Marketplace</p>
        </li>

        <li className="relative hidden min-[735px]:flex flex-col items-center justify-center h-full group ml-1.5">
          <Link href="/groups" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/groups" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/groups" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5zM3.373 8.017a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path>
                </svg>
              )}
            </div>
            {pathname === "/groups" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Groups</p>
        </li>

        <li className="relative hidden xl:flex flex-col items-center justify-center h-full group ml-1.5">
          <Link href="/gaming" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/gaming" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/gaming" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M7.5 4a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h9a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7h-9zM8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
                  <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path>
                </svg>
              )}
            </div>
            {pathname === "/gaming" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Gaming</p>
        </li>

        <li className="relative flex xl:hidden flex-col items-center justify-center h-full group ml-1.5">
          <Link href="/bookmarks" className="flex items-center justify-center flex-col h-full w-[clamp(8vw,100px,10vw)]">
            <div className={`${pathname !== "/bookmarks" && "hover:bg-[--off-bg-main-off]"} duration-300 flex h-[calc(100%-6px)] w-full rounded-lg justify-center items-center`}>
              {pathname === "/bookmarks" ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--fb-color]">
                  <path d="M3.25 2.75a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5H3.25zM2 12c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 13.25 2 12.69 2 12zm0 8c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 21.25 2 20.69 2 20z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[--secondary-icon]">
                  <path d="M3.25 2.75a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5H3.25zM2 12c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 13.25 2 12.69 2 12zm0 8c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 21.25 2 20.69 2 20z"></path>
                </svg>
              )}
            </div>
            {pathname === "/bookmarks" ? <span className=" bg-[--fb-color] h-1 absolute w-full bottom-0 rounded-t"></span> : null}
          </Link>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">More</p>
        </li>
      </ul>

      <div className="absolute right-0 flex justify-center items-center pr-4 pl-2 h-full">
        <div className="hidden xl:flex mr-2 relative group h-full items-center justify-center">
          <button className={`p-2 rounded-full ${state.menuOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`} onClick={() => dispatch({ type: "MENU" })}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`${state.menuOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Menu</p>
        </div>
        <div className="xl:hidden mr-2 relative group h-full flex items-center justify-center">
          <button className={`p-2 rounded-full ${state.addOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`} onClick={() => dispatch({ type: "ADD" })}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`${state.addOpen ? "text-[--fb-color]" : "text-[--primary-icon]"}`}>
              <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
            </svg>
          </button>
          <p className="text-sm px-3 py-2 bg-white rounded-lg opacity-75 text-black absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden group-hover:flex shadow-md">Add</p>
        </div>
        <div className="mr-2 relative group h-full flex items-center justify-center">
          <button className={`p-2 rounded-full ${state.messengerOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`} onClick={() => dispatch({ type: "MESSENGER" })}>
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
          <button className={`p-2 rounded-full ${state.notificationOpen ? "bg-[--fb-color-off]" : "bg-[--off-bg-main-off]"} hover:bg-[--off-bg-main-off-hover] duration-100 cursor-pointer`} onClick={() => dispatch({ type: "NOTIFICATION" })}>
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
      {state.searchOpen && (
        <>
          <div className={`fixed inset-0 z-[59]`} onClick={() => dispatch({ type: "SEARCH" })}></div>
          <Suspense fallback={<SearchSkeleton />}>
            <Search dispatch={dispatch} />
          </Suspense>
        </>
      )}
    </nav>
  )
}

// <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="" style={{color: '#0866ff'}}><path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path></svg>

export default Navbar
