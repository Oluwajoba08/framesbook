import React from "react"
import { Frown } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex items-center justify-center gap-2">
      <Frown className="w-8 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>This user does not exist.</p>
      <Link href={"/"} className="text-white rounded-md px-3 py-2 mt-3 bg-blue-500">
        Go Home
      </Link>
    </main>
  )
}
