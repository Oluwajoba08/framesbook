"use client"

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Comment from "./Comment"
import type { ExtendedProps } from "./Home/ExpandedPost"
import { CommentProps } from "@/lib/definitions"

const CommentSection = ({ postComments }: { postComments: CommentProps[] }) => {
  const [loading, setLoading] = useState(true)
  // const [comments, setComments] = useState<CommentProps[] | undefined>([])
  const commentRef = useRef(null)

  // useEffect(() => {

  // }, [])

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
