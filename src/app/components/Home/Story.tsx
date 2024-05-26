"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

type storyProps = {
  id: string
  username: string
  avatar: string | "/avatar.jpg"
  coverImage: string
  profileLink: string
  live: boolean
}

const Story = ({ username, avatar, coverImage, live, profileLink, id }: storyProps) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/stories/${id}`)}
      className="h-full relative rounded-xl flex hover:[background-size:300%] cursor-pointer bg-center bg-cover bg-no-repeat overflow-hidden w-36"
      style={{ backgroundImage: `linear-gradient(to bottom, #00000055, #00000000, #00000055), url('/${coverImage}')` }}
    >
      <div className={`absolute top-4 left-4 flex flex-col items-center`}>
        <Link href={`/${profileLink}`} className={`overflow-hidden w-9 h-9 rounded-full ${live ? "ring-[--app-colors-red]" : "ring-[--fb-color]"} ring-4 `}>
          <Image src={`/${avatar}`} alt={`${username}'s profile`} width={64} height={64} className="object-cover w-9 h-9" />
        </Link>
        {live && <span className="bg-[--app-colors-red] text-xs text-white px-1.5 py-0.5 rounded">LIVE</span>}
      </div>
      <div className="absolute bottom-2 left-3 w-3/4">
        <p className="font-medium text-sm text-white">{username}</p>
      </div>
    </div>
  )
}

export default Story
