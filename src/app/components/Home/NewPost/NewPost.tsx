"use client"

import React, { useReducer, useState } from "react"
import Image from "next/image"
import CreatePost from "./CreatePost"
import Link from "next/link"
import { FeelingProvider } from "@/app/providers/FeelingProvider"
// import { FeelingProvider } from "@/app/providers/FeelingProvider"

export type stateTypes = {
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

type pageProps = "normal" | "profile"

const NewPost = ({ firstName, page }: { firstName: string; page: pageProps }) => {
  const [createPostOpen, setCreatePostOpen] = useState(false)

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

  return (
    <>
      <FeelingProvider>
        <div className={`bg-[--off-bg-main] shadow-md py-2 px-2 lg:px-4 rounded-md w-[450px] lg:w-[500px] flex flex-col`}>
          <div onClick={() => setCreatePostOpen(true)} className="flex gap-1 my-2 font-medium">
            <Image src={`/avatar.jpg`} alt="profile" width={32} height={32} className={`rounded-full object-cover h-10 w-10`} />
            <div className="px-3 py-2 rounded-full bg-[--bg-main] dark:bg-[--off-bg-main] w-full">
              <p className="font-medium text-[--off-text-main]">{`What's on your mind${page === "normal" ? ", " + firstName : ""}?`}</p>
            </div>
          </div>
          <span aria-hidden="true" className={`bg-[--off-bg-main-off] h-px w-full mx-auto`}></span>
          <div className="flex lg:gap-1 mt-2 w-full justify-between">
            <div onClick={() => ""} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
              <Image src={`/video-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
              <p className={`font-medium text-[--off-text-main]`}>Live video</p>
            </div>
            <div
              onClick={() => {
                setCreatePostOpen(true)
                dispatch({ type: "ADDPHOTO" })
              }}
              className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}
            >
              <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
              <p className={`font-medium text-[--off-text-main]`}>Photo/video</p>
            </div>
            {page === "normal" ? (
              <div
                onClick={() => {
                  setCreatePostOpen(true)
                  dispatch({ type: "ADDFEELING" })
                }}
                className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}
              >
                <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                <p className={`font-medium text-[--off-text-main]`}>Feeling/activity</p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setCreatePostOpen(true)
                  dispatch({ type: "ADDLIFEEVENT" })
                }}
                className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}
              >
                <Image src={`/emoji-fb.png`} alt="emoji" width={20} height={20} className={`h-6 w-auto`} />
                <p className={`font-medium text-[--off-text-main]`}>Life Event</p>
              </div>
            )}
          </div>
        </div>
        {createPostOpen && <CreatePost setCreatePostOpen={setCreatePostOpen} state={state} dispatch={dispatch} />}
      </FeelingProvider>
    </>
  )
}

export default NewPost
