"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
// import useMouse from "@/app/hooks/useMouse"
import type { FriendRequests } from "@/lib/definitions"

const FriendReq = ({ id, name, image, mutualFriends, link }: FriendRequests) => {
  const positionRef = useRef<HTMLDivElement>(null)
  const [close, setClose] = useState(false)

  return (
    <div className={`${close ? "hidden" : "flex flex-col"} relative w-[200px] h-[280px] rounded-md overflow-x-hidden`}>
      <div className="h-[64%] w-full overflow-hidden">
        <Image src={`/${image}`} alt={`${name}'s profile image`} width={200} height={200} className="object-cover h-full w-full" />
      </div>
      <div className="flex flex-col p-2 border-x border-b border-[--off-bg-main-off-hover] rounded-b-md">
        <div className={`hover:underline group `}>
          <p ref={positionRef} className="font-semibold cursor-pointer">
            {name}
          </p>
          <div
            style={{
              left: positionRef.current?.getBoundingClientRect().left! - Number(positionRef.current?.parentElement?.parentElement?.parentElement?.parentElement?.scrollLeft!),
              top: positionRef.current?.getBoundingClientRect().top,
            }}
            className={`fixed z-[1200] w-80 border border-[--off-bg-main-off] gap-3 rounded-md shad-css bg-[--bg-main] p-2 hidden group-hover:flex flex-col`}
          >
            <div className="flex items-start gap-1">
              <div className="h-20 w-20 flex rounded-full overflow-hidden mr-2">
                <Image src={`/${image}`} alt="image" className={`object-cover w-20 h-full `} width={100} height={100} />
              </div>
              <div className="flex flex-col gap-2 max-w-[200px]">
                <p className="font-bold text-xl">{name}</p>
                <div className="flex flex-col">
                  {mutualFriends.length > 0 && (
                    <div className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="w-7 h-7 fill-[--fb-color-off-text]">
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                      </svg>
                      <p className="text-sm max-w-[160px]">
                        {mutualFriends.length} mutual friend{mutualFriends.length > 1 && "s"} including <span className="font-semibold">{mutualFriends[0]?._name}</span>
                        {mutualFriends[1] && (
                          <span>
                            {" "}
                            and <span className="font-semibold">{mutualFriends[1]?._name}</span>
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full items-center">
              <div className="flex gap-1 rounded w-full items-center justify-center bg-[--fb-color] cursor-pointer">
                <div className="w-6 h-6 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="w-5 h-5 fill-white">
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                </div>
                <p className="py-1.5 font-semibold text-white">Add friend</p>
              </div>
              <div className="flex gap-1 rounded w-full items-center justify-center bg-[--off-bg-main-off] cursor-pointer">
                <div className="w-6 h-6 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="w-5 h-5">
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                </div>
                <p className="py-1.5 font-semibold">Message</p>
              </div>
              <div onClick={() => ""} className="flex px-2 self-stretch bg-[--off-bg-main-off] items-center rounded justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="">
                  <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          {mutualFriends.map(({ _id, _image, _name }, index) => {
            return (
              <div key={_id} className={`w-5 h-5 overflow-hidden rounded-full ${index > 0 && "-ml-2"}`}>
                <Image src={`/${_image}`} alt={`image`} className="object-cover w-6 h-6" width={64} height={64} />
              </div>
            )
          })}
          <p className="text-[--off-text-main] text-sm">
            {mutualFriends.length} mutual friend{mutualFriends.length > 1 && "s"}
          </p>
        </div>
        <div className="flex gap-1 mt-1 rounded items-center justify-center bg-[--fb-color-off] cursor-pointer">
          <div className="w-6 h-6 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="w-5 h-5 fill-[--fb-color-off-text]">
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </div>
          <p className="py-2 font-semibold text-[--fb-color-off-text]">Add friend</p>
        </div>
      </div>
      <div onClick={() => setClose(true)} className="absolute rounded-full top-3 right-3 p-1 w-6 h-6 flex justify-center items-center bg-[#00000055] cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
    </div>
  )
}

export default FriendReq
