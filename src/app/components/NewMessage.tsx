import Link from "next/link"
import React from "react"

const NewMessage = () => {
  return (
    <div className="fixed group right-9 bottom-5 z-40 rounded-full shad-css">
      <Link href={`/new`} className={`rounded-full bg-[--off-bg-main] p-3.5 flex justify-center items-center `}>
        <i className={`bg-auto w-5 h-5 bg-no-repeat inline-block `} style={{ backgroundImage: " url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundBlendMode: "difference" }}></i>
      </Link>
      <p className="w-max text-sm text-black px-3 py-2 bg-white rounded-lg opacity-50 absolute right-14 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex shadow-md">New Message</p>
    </div>
  )
}

export default NewMessage
