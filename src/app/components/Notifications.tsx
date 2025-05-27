import React from "react"
import Image from "next/image"
import Link from "next/link"
import getNotifications from "@/lib/getNotifications"

const Notifications = () => {
  const notifications = getNotifications()

  return (
    <div className={`bg-[--off-bg-main] border border-[--off-bg-main] shad-css absolute top-[50px] right-3 rounded-md w-96 h-[calc(100vh-80px)] p-2 z-[60] overflow-y-scroll scroller`}>
      <p className={`font-bold text-2xl m-1`}>Notifications</p>
      <div className="flex flex-col gap-1 mt-3 ">
        {notifications.map(({ id, time, title, coverImage, read, username }, index) => {
          return (
            <Link href={`#`} key={id} className="grid relative group grid-cols-10 w-full p-2 rounded-md">
              <div className="flex col-span-2">
                <Image src={`/${coverImage}`} alt={`image`} width={100} height={100} className="w-14 h-14 rounded-full object-cover " />
              </div>
              <div className="flex items-center justify-between w-full col-span-8">
                <div className="flex flex-col">
                  <p className="font-medium max-w-[250px] [line-height:18px]">
                    <span className="font-semibold">{username + " "}</span>
                    {title}
                  </p>
                  <span className="text-[--fb-color] font-medium text-xs">{time}</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className={`w-3 h-3 rounded-full ${read ? "bg-[--secondary-icon]" : "bg-[--fb-color]"}`}></span>
                </div>
              </div>
              <div className="absolute right-6 top-1/2 hidden group-hover:flex justify-center items-center bg-[--off-bg-main] -translate-y-1/2 rounded-full h-9 w-9 p-1 border border-[--off-bg-main-off]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                  <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                </svg>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Notifications
