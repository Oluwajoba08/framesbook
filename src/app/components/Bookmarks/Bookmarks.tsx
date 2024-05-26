"use client"

import React, { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const BookmarksUI = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const asideRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const handleDropdown = () => {
    if (dropdownOpen) {
      asideRef.current && asideRef.current.scroll(0, 0)
      setdropdownOpen(false)
    } else {
      setdropdownOpen(true)
    }
  }

  return (
    <aside
      style={{ left: 0 }}
      ref={asideRef}
      className={`${pathname === "/bookmarks" ? "w-full flex" : "w-[270px] lg:flex hidden"} bg-[--bg-main] fixed z-50 top-14 h-[calc(100vh-56px)] pt-3 ${
        dropdownOpen ? "overflow-y-scroll" : "overflow-y-hidden"
      } group ${pathname !== "/bookmarks" ? "scroller" : ""}`}
    >
      <div className="flex flex-col w-full relative">
        <div className="">
          <Link href={`/profile`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <div className="w-9 h-9 flex items-center justify-center">
              <Image height={36} width={36} src={`/avatar.jpg`} alt={`profile`} className={`rounded-full object-cover h-8 w-8`} />
            </div>
            <p className="font-semibold text-[--text-main]">{`Oluwajoba Bukola`}</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/friends`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -296px" }}></i>
            <p className="font-semibold text-[--text-main]">Friends</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/onthisday`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -444px" }}></i>
            <p className="font-semibold text-[--text-main]">Memories</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -185px" }}></i>
            <p className="font-semibold text-[--text-main]">Saved</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/groups`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -37px" }}></i>
            <p className="font-semibold text-[--text-main]">Groups</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/watch`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Video</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Ads Manager</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Climate Science Center</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Events</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Feeds</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -333px" }}></i>
            <p className="font-semibold text-[--text-main]">Fundraisers</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/gaming`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Gaming Video</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/marketplace`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -407px" }}></i>
            <p className="font-semibold text-[--text-main]">Marketplace</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/messages`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/fb-icons2.png')", backgroundPosition: "0px 0px" }}></i>
            <p className="font-semibold text-[--text-main]">Messenger</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/fb-icons2.png')", backgroundPosition: "0px 0px" }}></i>
            <p className="font-semibold text-[--text-main]">Messenger Kids</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Orders and payments</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -112px" }}></i>
            <p className="font-semibold text-[--text-main]">Pages</p>
          </Link>
        </div>
        <div className="">
          <Link href={`/gaming`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -74px" }}></i>
            <p className="font-semibold text-[--text-main]">Play games</p>
          </Link>
        </div>
        <div className="">
          <Link href={`#`} className="flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]">
            <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -518px" }}></i>
            <p className="font-semibold text-[--text-main]">Recent ad activity</p>
          </Link>
        </div>
        <div className={`${dropdownOpen ? "" : "absolute top-[264px]"} w-full bg-[--bg-main] h-[calc(100vh-264px)] flex flex-col items-center`}>
          <button className={`flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main] w-full`} onClick={handleDropdown}>
            <div className="w-9 h-9 flex justify-center items-center">
              <div className={`rounded-full bg-[--off-bg-main] w-7 h-7 flex justify-center items-center `}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`fill-[--off-text-main] flex justify-center items-center`} height="36" viewBox="0 96 960 960" width="36">
                  <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
                </svg>
              </div>
            </div>
            <p className="font-semibold text-[--text-main]">See {dropdownOpen ? "less" : "more"}</p>
          </button>
          <div className={`bg-[--off-bg-main-off] h-px w-[90%] my-1`}></div>
        </div>
      </div>
      {/* <div className={` `}> to be implemented later
            <p>Your Shortcuts</p>
            <div>
                <div className='flex gap-3 items-center px-3 py-1 hover:bg-[--off-bg-main]'>
                    <Image src={`/dg.png`} alt={``} />
                </div>
            </div>
        </div> */}
    </aside>
  )
}

export default BookmarksUI
