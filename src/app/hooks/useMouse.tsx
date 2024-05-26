"use client"

import React, { useState, useEffect } from "react"

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  })

  const handleMove: any = (e: React.MouseEvent<Document, MouseEvent>) => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMove)
    return () => {
      document.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return mousePosition
}

export default useMouse
