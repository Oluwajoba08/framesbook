"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const page = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [check, setCheck] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex w-full mt-14">
      <div className="flex flex-col gap-2 p-2 bg-[--off-bg-main] w-[360px] relative">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl ml-2">Friends</h2>
          <div onClick={() => setSettingsOpen((settingsOpen) => !settingsOpen)} className={`rounded-full bg-[--bg-main] p-2 cursor-pointer`}>
            <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
            </svg>
          </div>
        </div>
        <div className={`absolute z-[70] top-4 left-2 right-2 p-4 bg-[--off-bg-main] shad-css rounded-md flex-col ${settingsOpen ? "flex" : "hidden"}`}>
          <p className="font-bold text-lg">Notification settings</p>
          <p className="text-sm">You can manage how you are notified about friends updates.</p>
          <span className="h-px w-full bg-[--off-bg-main-off] my-3"></span>
          <div className={`flex justify-between items-center`}>
            <div className="flex gap-2 items-center">
              <div className={`rounded-full bg-[--bg-main] p-1`}>
                <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                </svg>
              </div>
              <p className="font-semibold">Show notification dots</p>
            </div>
            <div className={`relative flex `}>
              <input
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
                className="w-10 h-6 absolute z-[80] top-0 opacity-0 left-1/2 -translate-x-1/2"
                type="checkbox"
                name="shownotificationdots"
                id="shownotificationdots"
              />
              <div className={`flex items-center rounded-full h-6 w-12 ${check ? "bg-[--fb-color]" : "bg-[--off-bg-main-off]"} p-0.5`}>
                <div className={`rounded-full h-full aspect-square bg-white ${check ? "ml-auto" : ""} `}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className={`flex gap-3 p-2 items-center cursor-pointer rounded-md ${pathname === "/friends" ? "bg-[--bg-main]" : ""}`}>
            <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/friends" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
              </svg>
            </div>
            <p className="font-bold">Home</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <div className={`flex gap-3 p-2 items-center rounded-md ${pathname === "/" ? "bg-[--bg-main]" : ""}`}>
              <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
              </div>
              <p className="font-bold">Friend requests</p>
            </div>
            <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <div className={`flex gap-3 p-2 items-center rounded-md ${pathname === "/" ? "bg-[--bg-main]" : ""}`}>
              <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
              </div>
              <p className="font-bold">Suggestions</p>
            </div>
            <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <div className={`flex gap-3 p-2 items-center rounded-md ${pathname === "/" ? "bg-[--bg-main]" : ""}`}>
              <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
              </div>
              <p className="font-bold">All friends</p>
            </div>
            <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
          <div className={`flex gap-3 p-2 items-center cursor-pointer rounded-md ${pathname === "/" ? "bg-[--bg-main]" : ""}`}>
            <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
              </svg>
            </div>
            <p className="font-bold">Birthdays</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <div className={`flex gap-3 p-2 items-center rounded-md ${pathname === "/" ? "bg-[--bg-main]" : ""}`}>
              <div className={`flex justify-center items-center p-1 w-9 h-9 rounded-full ${pathname === "/" ? "bg-[--fb-color]" : "bg-[--bg-main]"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
              </div>
              <p className="font-bold">Custom lists</p>
            </div>
            <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-56px)] flex justify-center items-center w-[calc(100vw-360px)]">
        {/* logic for finding friends */}
        <div className="flex flex-col gap-3 items-center">
          <Image src={`/null_states_people_gray_wash.svg`} alt="photo" width={100} height={100} className="w-36" />
          <p className="font-bold text-xl">When you have friend requests or suggestions, you'll see them here.</p>
        </div>
      </div>
    </div>
  )
}

export default page
