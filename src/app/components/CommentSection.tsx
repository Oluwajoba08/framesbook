"use client"

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import type { ExtendedProps } from "./Home/ExpandedPost"

type funcProps = {
  id: string
  createdAt: number
  authorId: string
  content: string
}

const CommentSection = ({ currentUserId, id }: ExtendedProps) => {
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState<funcProps[] | undefined>([])
  const commentRef = useRef(null)

  function getComments(postId: string) {
    return [
      { id: "32920424", createdAt: Date.now(), authorId: "129130913", content: "Hello from comment section" },
      {
        id: "3292770424",
        createdAt: Date.now(),
        authorId: "129144530913",
        content: "Hello 2 from comment section",
      },
    ]
  }

  useEffect(() => {
    const data = getComments(id)

    if (data) {
      setComments(data)
    }
  }, [])

  return (
    <>
      {loading ? (
        <div className="">
          <div className="">
            <div></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default CommentSection
