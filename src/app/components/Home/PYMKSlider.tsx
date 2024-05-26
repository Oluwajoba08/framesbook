"use client"

import React, { useState, useRef } from "react"

const PYMKSlider = ({ children }: { children: React.ReactNode }) => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const PYMKref = useRef<HTMLDivElement>(null)

  const handleLeftClick = () => {
    if (scrollLeft < PYMKref.current?.clientWidth! / 2 || scrollLeft === PYMKref.current?.clientWidth! / 2) {
      setScrollLeft(0)
      PYMKref.current?.scroll({ top: 0, left: 0, behavior: "smooth" })
    } else {
      setScrollLeft(scrollLeft - PYMKref.current?.clientWidth! / 2)
      PYMKref.current?.scroll({
        top: 0,
        left: scrollLeft - PYMKref.current?.clientWidth! / 2,
        behavior: "smooth",
      })
    }
  }

  const handleRightClick = () => {
    if (scrollLeft < PYMKref.current?.scrollWidth! && PYMKref.current?.scrollWidth! - scrollLeft > PYMKref.current?.clientWidth! / 2) {
      setScrollLeft(scrollLeft + PYMKref.current?.clientWidth! / 2)
      PYMKref.current?.scroll({
        top: 0,
        left: scrollLeft + PYMKref.current?.clientWidth! / 2,
        behavior: "smooth",
      })
    } else {
      setScrollLeft(PYMKref.current?.scrollWidth! - PYMKref.current?.clientWidth! / 2)
      PYMKref.current?.scroll({
        top: 0,
        left: PYMKref.current?.scrollWidth - PYMKref.current?.clientWidth / 2,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative flex flex-col gap-2 shadow-md rounded-md h-min bg-[--off-bg-main] w-[450px] lg:w-[500px]">
      <div className="flex justify-between items-center pr-3 pt-2">
        <p className="font-semibold text-[--off-text-main] pl-3">People You May Know</p>
        <div className="flex justify-center items-center p-1 rounded-full cursor-pointer hover:bg-[--off-bg-main-off]">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main]">
            <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
          </svg>
        </div>
      </div>
      <div ref={PYMKref} className="px-3 grid grid-flow-col gap-x-2 overflow-x-hidden">
        {children}
      </div>
      <div className="px-5 z-[50] absolute h-px left-1/2 -translate-x-1/2 w-[450px] lg:w-[500px] top-[208px] flex justify-between">
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
            scrollLeft === PYMKref.current?.scrollWidth || PYMKref.current?.scrollWidth! - scrollLeft < PYMKref.current?.clientWidth! ? "invisible" : "visible"
          } flex cursor-pointer -rotate-90 -translate-y-1/2 hover:bg-[--off-bg-main-off] rounded-full bg-[--off-bg-main] w-12 h-12 justify-center items-center `}
          onClick={handleRightClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`fill-[--off-text-main] flex justify-center items-center`} height="36" viewBox="0 96 960 960" width="36">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
      </div>
      <p className="font-semibold text-[--fb-color-off-text] text-center w-full py-2 cursor-pointer">See all</p>
    </section>
  )
}

export default PYMKSlider
