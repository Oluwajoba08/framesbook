import React from "react"
import { Frown } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="bg-[--bg-main] h-screen flex flex-col items-center justify-center gap-1">
      <Frown className="w-16 h-16 stroke-[--off-text-main]" />
      <h2 className="text-3xl font-semibold">404 Not Found</h2>
      <p className="text-lg">This user does not exist.</p>
      <Link href={"/"} className="font-bold text-white rounded-md px-3 py-2 mt-3 bg-[--fb-color]">
        Go Home
      </Link>
    </main>
  )
}
