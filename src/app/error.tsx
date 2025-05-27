"use client"

import React, { useEffect } from "react"
// import { useRouter } from "next/navigation"

const error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  // const router = useRouter()

  useEffect(() => {
    // Optional
    console.error(error)
  }, [error])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-1 items-center">
        <p className="font-bold text-2xl">Something went wrong.</p>
        <p className="text-xl">This may be because of a technical error that we're working to get fixed. Try reloading this page.</p>
        <button onClick={() => reset()} className="rounded-md bg-[--fb-color] px-3 py-2 text-black flex">
          Try again
        </button>
      </div>
    </div>
  )
}

export default error
