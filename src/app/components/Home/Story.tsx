"use client"

import React, { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { StoryProps } from "@/lib/definitions"

type pageProps = Pick<StoryProps, "id" | "author" | "images" | "live">

const Story = ({ id, author, live, images, authorId, createdAt, likes, group, page }: StoryProps) => {
  // const a = useContext()
  const router = useRouter()
  // get user id from state and use it

  return (
    <div
      onClick={() => router.push(`/stories/${id}`)}
      className="h-full relative rounded-xl flex hover:[background-size:300%] cursor-pointer bg-center bg-cover bg-no-repeat overflow-hidden w-36"
      style={images.length !== 0 ? { backgroundImage: `linear-gradient(to bottom, #00000055, #00000000, #00000055), url('/${images[images.length - 1]?.src}')` } : {}}
    >
      <div className={`absolute top-4 left-4 flex flex-col items-center`}>
        <Link href={`/${author.profileLink}`} className={`overflow-hidden w-9 h-9 rounded-full ${live ? "ring-[--app-colors-red]" : "ring-[--fb-color]"} ring-4 `}>
          <Image src={`/${author.profileImage}`} alt={`${author.name}'s profile`} width={64} height={64} className="object-cover w-9 h-9" />
        </Link>
        {live && <span className="bg-[--app-colors-red] text-xs text-white px-1.5 py-0.5 rounded">LIVE</span>}
      </div>
      <div className="absolute bottom-2 left-3 w-3/4">
        <p className="font-medium text-sm text-white">{author.name}</p>
      </div>
    </div>
  )
}

export default Story
