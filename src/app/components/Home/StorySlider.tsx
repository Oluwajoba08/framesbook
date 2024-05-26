"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const StorySlider = ({ children }: { children: React.ReactNode }) => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const storyRef = useRef<HTMLDivElement>(null)

  const handleLeftClick = () => {
    if (scrollLeft < storyRef.current?.clientWidth! || scrollLeft === storyRef.current?.clientWidth!) {
      setScrollLeft(0)
      storyRef.current?.scroll({ top: 0, left: 0, behavior: "smooth" })
    } else {
      setScrollLeft(scrollLeft - storyRef.current?.clientWidth!)
      storyRef.current?.scroll({
        top: 0,
        left: scrollLeft - storyRef.current?.clientWidth!,
        behavior: "smooth",
      })
    } // else {
    //   setScrollLeft();
    //   storyRef.current?.scroll({top: 0, left: 0, behavior: "smooth"});
    // }
  }

  const handleRightClick = () => {
    if (scrollLeft < storyRef.current?.scrollWidth! && storyRef.current?.scrollWidth! - scrollLeft > storyRef.current?.clientWidth!) {
      setScrollLeft(scrollLeft + storyRef.current?.clientWidth!)
      storyRef.current?.scroll({
        top: 0,
        left: scrollLeft + storyRef.current?.clientWidth!,
        behavior: "smooth",
      })
    } else {
      setScrollLeft(storyRef.current?.scrollWidth! - storyRef.current?.clientWidth!)
      storyRef.current?.scroll({
        top: 0,
        left: storyRef.current?.scrollWidth - storyRef.current?.clientWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <div ref={storyRef} className={`w-[calc(100vw-50px)] lg:w-[600px] min-[735px]:w-[min(70vw,540px)] h-64 grid grid-flow-col gap-2 overflow-x-hidden`}>
      <div className={`rounded-xl overflow-hidden relative w-36 flex flex-col items-center`}>
        <Image src={`/profile-image.jpg`} alt={`profile`} width={200} height={200} className="object-cover h-4/5 w-auto" />
        <div className="bg-[--off-bg-main] w-full h-1/5"></div>
        <div className="absolute flex flex-col items-center gap-1 w-full bottom-2 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-[--fb-color] p-1 border-4 border-[--off-bg-main]">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={`text-white`}>
              <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
            </svg>
          </div>
          <p className="font-bold text-sm text-center">Create story</p>
        </div>
      </div>
      {children}
      <div className="px-5 absolute h-px left-1/2 -translate-x-1/2 w-[calc(100vw-50px)] lg:w-[600px] min-[735px]:w-[min(70vw,540px)] bg-red top-[208px] flex justify-between">
        <div
          className={`${
            scrollLeft === 0 ? "invisible" : "visible"
          } flex cursor-pointer rotate-90 -translate-y-1/2 hover:bg-[--off-bg-main-off] rounded-full bg-[--off-bg-main] w-12 h-12 justify-center items-center `}
          onClick={handleLeftClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`fill-[--off-text-main] flex justify-center items-center`} height="36" viewBox="0 96 960 960" width="36">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
        <div
          className={`${
            scrollLeft === storyRef.current?.scrollWidth || storyRef.current?.scrollWidth! - scrollLeft < storyRef.current?.clientWidth! ? "invisible" : "visible"
          } flex cursor-pointer -rotate-90 -translate-y-1/2 hover:bg-[--off-bg-main-off] rounded-full bg-[--off-bg-main] w-12 h-12 justify-center items-center `}
          onClick={handleRightClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`fill-[--off-text-main] flex justify-center items-center`} height="36" viewBox="0 96 960 960" width="36">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default StorySlider
