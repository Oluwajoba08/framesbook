"use client"

import React, { useState, useRef, useEffect, useReducer } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

type stateTypes = {
  addOpen: boolean
  addPhotoOpen: boolean
  addPostAudienceOpen: boolean
  addFeelingOpen: boolean
  addTagOpen: boolean
  addVideoOpen: boolean
  addGifOpen: boolean
  addLocationOpen: boolean
  addLifeEventOpen: boolean
}

const CreatePost = ({ setCreatePostOpen }: { setCreatePostOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const initialState = {
    addOpen: false,
    addPhotoOpen: false,
    addPostAudienceOpen: false,
    addFeelingOpen: false,
    addTagOpen: false,
    addVideoOpen: false,
    addGifOpen: false,
    addLocationOpen: false,
    addLifeEventOpen: false,
  }

  const reducer = (state: stateTypes, action: { type: string }) => {
    switch (action.type) {
      case "ADDPHOTO": {
        return { ...initialState, addPhotoOpen: !state.addPhotoOpen }
      }
      case "ADD": {
        return { ...initialState, addOpen: !state.addOpen }
      }
      case "ADDPOSTAUDIENCE": {
        return { ...state, addPostAudienceOpen: !state.addPostAudienceOpen }
      }
      case "ADDFEELING": {
        return { ...state, addFeelingOpen: !state.addFeelingOpen }
      }
      case "ADDTAG": {
        return { ...state, addTagOpen: !state.addTagOpen }
      }
      case "ADDVIDEO": {
        return { ...initialState, addVideoOpen: !state.addVideoOpen }
      }
      case "ADDGIF": {
        return { ...initialState, addGifOpen: !state.addGifOpen }
      }
      case "ADDLOCATION": {
        return { ...state, addLocationOpen: !state.addLocationOpen }
      }
      case "ADDLIFEEVENT": {
        return { ...initialState, addLifeEventOpen: !state.addLifeEventOpen }
      }
      default:
        return initialState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const modalRef = useRef(null)
  const [postAudience, setPostAudience] = useState<"Friends" | "Public" | "Only me" | "Friends except" | "Specific friends" | "Custom">("Friends")
  const [defaultAudience, setDefaultAudience] = useState<"Friends" | "Public" | "Only me" | "Friends except" | "Specific friends" | "Custom">("Friends")
  const [inputValue, setInputValue] = useState("")
  const [photo, setPhoto] = useState(null)

  const handleAudChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "public":
        setPostAudience("Public")
        break
      case "only-me":
        setPostAudience("Only me")
        break
      case "specific-friends":
        setPostAudience("Specific friends")
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
    dispatch({ type: "ADDPOSTAUDIENCE" })
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === modalRef.current) {
      setCreatePostOpen(false)
    }
  }

  return (
    <div ref={modalRef} onClick={handleClick} className="flex justify-center items-center fixed inset-0 z-[1000] bg-[#000000cc]">
      <div className="flex flex-col rounded-md overflow-hidden bg-[--off-bg-main] w-[450px] lg:w-[500px] max-h-[600px]">
        <div className="flex justify-between items-center border-b border-[--off-bg-main-off-hover] py-3 px-4">
          <div
            onClick={() => (state.addOpen ? dispatch({ type: "ADD" }) : state.addPostAudienceOpen ? dispatch({ type: "ADDPOSTAUDIENCE" }) : state.addTagOpen ? dispatch({ type: "ADDTAG" }) : "")}
            className={`${
              state.addOpen || state.addPostAudienceOpen || state.addTagOpen ? "visible" : "invisible"
            } flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1 `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
          <p className="font-bold text-xl">{state.addOpen ? "Add to your post" : state.addTagOpen ? "Tag people" : state.addPostAudienceOpen ? "Post Audience" : "Create post"}</p>
          <div
            onClick={() => setCreatePostOpen(false)}
            className={`${
              state.addOpen || state.addPostAudienceOpen || state.addTagOpen ? "invisible" : "visible"
            } flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
        <div className="flex w-full">
          {state.addOpen ? (
            <AnimatePresence>
              <motion.div
                initial={{ x: 500, width: 0, opacity: 0 }}
                animate={{ x: 0, width: 500, opacity: 1 }}
                exit={{ x: 500, width: 0, height: 0, opacity: 0 }}
                transition={{ type: "tween" }}
                key="add"
                className="grid grid-cols-2 justify-items-start p-3 gap-1 w-[450px] lg:w-[500px] max-h-[600px] "
              >
                <button onClick={() => dispatch({ type: "ADDPHOTO" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Photo/video</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDTAG" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Tag people</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDFEELING" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Feeling/activity</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDLOCATION" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Check in</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDGIF" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">GIF</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDVIDEO" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/video-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Live video</p>
                </button>
                <button onClick={() => dispatch({ type: "ADDLIFEEVENT" })} className={`rounded-md flex gap-1 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                  <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                  <p className="font-semibold">Life event</p>
                </button>
              </motion.div>
            </AnimatePresence>
          ) : state.addTagOpen ? (
            <AnimatePresence>
              <motion.div
                initial={{ x: 500, width: 0, opacity: 0 }}
                animate={{ x: 0, width: 500, opacity: 1 }}
                exit={{ x: 500, width: 0, height: 0, opacity: 0 }}
                transition={{ type: "tween" }}
                key="addTag"
                className="p-3 flex flex-col w-[450px] lg:w-[500px] max-h-[600px]"
              >
                <div className="flex items-center w-full gap-4">
                  <div className="flex w-full">
                    <div className={`rounded-l-full rounded-r-none p-3 bg-[--off-bg-main-off]`}>
                      <Image src={`/tag.png`} alt="tag" />
                    </div>
                    <input type="text" placeholder="Search for friends" role="search" className=" placeholder:text-[--off-text-main] py-2 pl-1 pr-3 w-full rounded-r-full bg-[--off-bg-main-off]" />
                  </div>
                  <p className="font-semibold text-[--fb-color] px-3 py-2 hover:bg-[--off-bg-main-off] rounded-md cursor-pointer">Done</p>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : state.addPostAudienceOpen ? (
            <AnimatePresence>
              <motion.div
                initial={{ x: 500, width: 0, opacity: 0 }}
                animate={{ x: 0, width: 500, opacity: 1 }}
                exit={{ x: 500, width: 0, height: 0, opacity: 0 }}
                transition={{ type: "tween" }}
                key="addPostAudience"
                className="flex flex-col w-[450px] lg:w-[500px] max-h-[600px]"
              >
                <div className="flex flex-col overflow-y-scroll h-64 p-4">
                  <p className=" font-semibold text-lg">Who can see your post?</p>
                  <p className="text-sm ">Your post will show up in Feed, on your profile and in search results.</p>
                  <p className="text-sm mt-3">
                    Your default audience is set to <span className="font-medium">{defaultAudience}</span> but you can change the audience of this specific post.
                  </p>
                  <div className="flex flex-col leading-3">
                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="public">
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--off-text-main]">
                            <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-43-61v-82q-35 0-59-26t-24-61v-44L149 497q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437 915Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607 257v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393 488h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">Public</p>
                          <p className="">Anyone on or off Framesbook</p>
                        </div>
                      </div>
                      <input type="radio" defaultChecked={defaultAudience === "Public"} onChange={handleAudChange} name="audience" value="public" id="public" className="w-5 h-5 bg-[--fb-color]" />
                    </label>

                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="friends">
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main]">
                            <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">Friends</p>
                          <p className="">Your friends on Framesbook</p>
                        </div>
                      </div>
                      <input defaultChecked={defaultAudience === "Friends"} onChange={handleAudChange} type="radio" name="audience" value="friends" id="friends" className="w-5 h-5 bg-[--fb-color]" />
                    </label>

                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="friends-except">
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--off-text-main]">
                            <path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">Friends except...</p>
                          <p className="">Don't show to some friends</p>
                        </div>
                      </div>
                      <input
                        type="radio"
                        defaultChecked={defaultAudience === "Friends except"}
                        onChange={handleAudChange}
                        name="audience"
                        value="friends-except"
                        id="friends-except"
                        className="w-5 h-5 bg-[--fb-color]"
                      />
                    </label>

                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="only-me">
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--off-text-main]">
                            <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">Only me</p>
                        </div>
                      </div>
                      <input type="radio" defaultChecked={defaultAudience === "Only me"} onChange={handleAudChange} name="audience" value="only-me" id="only-me" className="w-5 h-5 bg-[--fb-color]" />
                    </label>

                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="specific-friends">
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-14 h-14 p-3 bg-[--off-bg-main-off] rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main]">
                            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">Specific friends</p>
                          <p className="">Only show to some friends</p>
                        </div>
                      </div>
                      <input
                        type="radio"
                        defaultChecked={defaultAudience === "Specific friends"}
                        onChange={handleAudChange}
                        name="audience"
                        value="specific-friends"
                        id="specific-friends"
                        className="w-5 h-5 bg-[--fb-color]"
                      />
                    </label>

                    <label className="flex justify-between items-center px-1 py-2 hover:bg-[#0866ff33] rounded-md " htmlFor="custom">
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
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="flex gap-2 relative group">
                    <input
                      disabled={postAudience === defaultAudience}
                      defaultChecked
                      type="checkbox"
                      name="default-audience"
                      id="default-audience"
                      className="disabled:bg-[--off-bg-main-off-hover] w-5 h-5 peer"
                    />
                    <p className="font-semibold peer-disabled:text-[--off-bg-main-off-hover]">Set as default audience.</p>
                    <div className="bg-[--fb-color] p-3 hidden group-hover:flex justify-between absolute z-50 bottom-12 left-3 rounded-md max-w-[300px]">
                      <p className=" w-full text-white text-sm p-1">To change your default audience, choose a different audience and then select this option.</p>
                      <div onClick={() => "e"} className={`flex justify-center items-center rounded-full cursor-pointer hover:bg-[#00000033] w-6 h-6 p-0.5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="absolute bg-[--fb-color] hidden group-hover:flex bottom-8 left-3 w-12 h-12 rounded"
                      style={{ background: "linear-gradient(135deg, var(--fb-color) 56%, #00000000 56%)" }}
                    ></div>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <button onClick={() => dispatch({ type: "ADDPOSTAUDIENCE" })} className="px-5 py-1.5 rounded-md font-semibold hover:bg-[--off-bg-main-off]">
                      Cancel
                    </button>
                    <button onClick={handleAudSubmit} className="px-8 py-1.5 bg-[--fb-color] text-white rounded-md font-semibold">
                      Done
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ x: -500, width: 0, opacity: 0 }}
                animate={{ x: 0, width: 500, opacity: 1 }}
                exit={{ x: -500, width: 0, height: 0, opacity: 0 }}
                transition={{ type: "tween" }}
                key="default"
                className="flex flex-col py-3 justify-between h-full gap-1 w-[450px] lg:w-[500px] max-h-[600px]"
              >
                <div className="flex gap-2 items-center px-4">
                  <div className="rounded-full w-10 h-10 overflow-hidden ">
                    <Image src={`/avatar.jpg`} width={48} height={48} alt="avatar" className="w-12 h-auto object-cover" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{"Oluwajoba Bukola"}</p>
                    <div onClick={() => dispatch({ type: "ADDPOSTAUDIENCE" })} className="rounded bg-[--off-bg-main-off] p-0.5 flex items-center gap-1 cursor-pointer">
                      <div className="flex justify-center items-center w-5 h-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="fill-[--text-main] w-5 h-5">
                          <path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Friends</p>
                      <div className="flex justify-center items-center w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main] w-5 h-5">
                          <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${state.addPhotoOpen ? "overflow-y-scroll scroller h-56" : ""} w-full px-4 pr-2`}>
                  <textarea
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={`What's on your mind, ${"Oluwajoba"}?`}
                    className="w-full bg-transparent text-2xl focus-within:outline-none resize-none h-28"
                  />
                  {state.addPhotoOpen && (
                    <div className="w-full flex flex-col gap-2 p-2 rounded-lg border border-[--off-bg-main-off]">
                      <div className="flex justify-center items-center bg-[--off-bg-main-off] rounded h-36">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 p-1.5 rounded-full bg-[--off-bg-main-off-hover] flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                              <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
                            </svg>
                          </div>
                          <p className="text-lg font-semibold">Add Photos/Videos</p>
                          <p className="text-xs">or drag and drop</p>
                        </div>
                      </div>
                      <div className="flex justify-around items-center bg-[--off-bg-main-off] rounded h-16">
                        <div className="bg-[--off-bg-main-off-hover] rounded-full p-1.5 w-9 h-9 flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
                          </svg>
                        </div>
                        <p className="text-sm">Add photos and videos from your mobile device.</p>
                        <button className="bg-[--off-bg-main-off-hover] font-semibold rounded-md px-2.5 py-1">Add</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex w-full justify-between ">
                  <div></div>
                  <div></div>
                </div>
                <div className="flex flex-col w-full px-4">
                  <div className="flex w-full justify-between items-center border border-[--off-bg-main-off] py-2 px-3 rounded-md">
                    <p className="font-semibold">Add to your post</p>
                    <div className="flex gap-2">
                      <div
                        onClick={() => dispatch({ type: "ADDPHOTO" })}
                        className={`rounded-full flex gap-1.5 items-center p-2 ${state.addPhotoOpen ? "bg-[--off-bg-main-off-hover]" : "hover:bg-[--off-bg-main-off]"} cursor-pointer justify-center`}
                      >
                        <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
                      </div>
                      <div
                        onClick={() => dispatch({ type: "ADDVIDEO" })}
                        className={`rounded-full flex gap-1.5 items-center p-2 ${state.addVideoOpen ? "bg-[--off-bg-main-off-hover]" : "hover:bg-[--off-bg-main-off]"} cursor-pointer justify-center`}
                      >
                        <Image src={`/video-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
                      </div>
                      <div
                        onClick={() => dispatch({ type: "ADDFEELING" })}
                        className={`rounded-full flex gap-1.5 items-center p-2 ${state.addFeelingOpen ? "bg-[--off-bg-main-off-hover]" : "hover:bg-[--off-bg-main-off]"} cursor-pointer justify-center`}
                      >
                        <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                      </div>
                      <div onClick={() => dispatch({ type: "ADD" })} className={`rounded-full flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] cursor-pointer justify-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main-off]">
                          <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={!inputValue || !photo}
                    className="mt-2 px-4 w-full py-2 bg-[--fb-color] disabled:bg-[--off-bg-main-off-hover] disabled:text-[--off-text-main-off] rounded-md font-bold"
                  >
                    Post
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreatePost
