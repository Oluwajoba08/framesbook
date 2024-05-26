"use client"

import React from "react"
import Image from "next/image"

const error = () => {
  return (
    <div className="h-[calc(100vh-56px)] w-screen flex justify-center items-center">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-2xl">This page isn't available right now</p>
        <p className="text-xl">This may be because of a technical error that we're working to get fixed. Try reloading this page.</p>
        <button className="bg-[--fb-color] px-8 py-3 text-white">Reload Page</button>
      </div>
    </div>
  )
}

export default error
