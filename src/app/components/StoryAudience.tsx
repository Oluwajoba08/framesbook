"use client"

import React, { useState, useRef, useEffect } from "react"

type audienceTypes = "Friends" | "Public" | "Friends except" | "Custom"

const StoryAudience = ({ setStoryAudienceOpen }: { setStoryAudienceOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const modalRef = useRef(null)
  const confirmModalRef = useRef(null)
  const [confirmModalOPen, SetConfirmModalOPen] = useState(false)
  const [postAudience, setPostAudience] = useState<audienceTypes>("Friends")
  const [defaultAudience, setDefaultAudience] = useState<audienceTypes>("Friends")

  const handleAudChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "public":
        setPostAudience("Public")
        break
      case "friends-except":
        setPostAudience("Friends except")
        break
      case "friends":
        setPostAudience("Friends")
        break
      case "custom":
        setPostAudience("Custom")
        break
      default:
        break
    }
  }
  const handleAudSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDefaultAudience(postAudience)
    setStoryAudienceOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === modalRef.current) {
      setStoryAudienceOpen(false)
    }
  }
  const handleConfirmClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === confirmModalRef.current) {
      SetConfirmModalOPen(false)
    }
  }

  return (
    <div ref={modalRef} onClick={handleClick} className="flex justify-center items-center fixed inset-0 z-[1000] modal">
      <div className="flex flex-col rounded-md overflow-hidden bg-[--off-bg-main] w-[450px] lg:w-[500px] shad-css">
        <div className="flex justify-center items-center border-b border-[--off-bg-main-off] py-3 px-4">
          <p className="font-bold text-xl">Story Privacy</p>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-[450px] lg:w-[500px] ">
            <div className="flex flex-col pt-4 px-1">
              <div className="px-3">
                <p className=" font-semibold text-lg">Who can see your story?</p>
                <p className="text-sm ">Your story will be visible for 24 hours on Framesbook and Messenja.</p>
              </div>
              <div className="flex flex-col leading-3">
                <label className="flex justify-between items-center px-3 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="public">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--off-text-main]">
                        <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-43-61v-82q-35 0-59-26t-24-61v-44L149 497q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437 915Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607 257v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393 488h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">Public</p>
                      <p className="">Anyone on or off Framesbook or Messenja</p>
                    </div>
                  </div>
                  <input type="radio" defaultChecked={defaultAudience === "Public"} onChange={handleAudChange} name="audience" value="public" id="public" className="w-5 h-5 bg-[--fb-color]" />
                </label>

                <label className="flex justify-between items-center px-3 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="friends">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main]">
                        <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">Friends</p>
                      <p className="">Only your Framesbook friends</p>
                    </div>
                  </div>
                  <input defaultChecked={defaultAudience === "Friends"} onChange={handleAudChange} type="radio" name="audience" value="friends" id="friends" className="w-5 h-5 bg-[--fb-color]" />
                </label>

                <label className="flex justify-between items-center px-3 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="custom">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main]">
                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">Custom</p>
                      <p className="">Include and exclude friends and lists</p>
                    </div>
                  </div>
                  <input type="radio" defaultChecked={defaultAudience === "Custom"} onChange={handleAudChange} name="audience" value="custom" id="custom" className="w-5 h-5 bg-[--fb-color]" />
                </label>

                <div className="flex border-t justify-between items-center px-3 py-2 hover:bg-[#0866ff33]">
                  <div className="flex gap-3 items-center">
                    <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--off-text-main]">
                        <path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-lg">Hide story from</p>
                  </div>
                  <svg className="-rotate-90 w-8 fill-[--off-text-main]" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                    <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex p-3 border-t justify-end">
              <div className="flex items-center gap-2">
                <button onClick={() => setStoryAudienceOpen(false)} className="px-5 py-1.5 rounded-md font-semibold hover:bg-[--off-bg-main-off]">
                  Cancel
                </button>
                <button onClick={() => SetConfirmModalOPen(true)} className="px-8 py-1.5 bg-[--fb-color] text-white rounded-md font-semibold">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {confirmModalOPen && (
        <div ref={confirmModalRef} onClick={handleConfirmClick} className="flex justify-center items-center fixed inset-0 z-[1000] modal">
          <div className="flex flex-col rounded-md overflow-hidden bg-[--off-bg-main] w-[450px] lg:w-[500px] shad-css">
            <div className="flex justify-between items-center border-b border-[--off-bg-main-off-hover] py-3 px-4">
              <div className={`invisible flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1 `}></div>
              <p className="font-bold text-xl">Change Story Privacy</p>
              <div onClick={() => SetConfirmModalOPen(false)} className={`flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col w-[450px] lg:w-[500px] ">
                <div className="flex flex-col p-4">
                  <p className="text-sm ">Changes you make will be applied to any photos and videos currently in your story in addition to those you add from now on.</p>
                </div>
                <div className="flex p-3 justify-end">
                  <div className="flex items-center gap-2">
                    <button onClick={() => SetConfirmModalOPen(false)} className="px-5 py-1.5 rounded-md font-semibold hover:bg-[--off-bg-main-off]">
                      Cancel
                    </button>
                    <button onClick={handleAudSubmit} className="px-8 py-1.5 bg-[--fb-color] text-white rounded-md font-semibold">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryAudience
