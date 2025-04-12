"use client"

import React from "react"
import Navbar from "./Navbar"
import NewMessage from "./NewMessage"
import { usePathname } from "next/navigation"

const ConditionalLayout = () => {
  const pathname = usePathname()
  const hideOnRoutes = ["/login", "/messages", "/live", "/stories"]

  if (hideOnRoutes.includes(pathname)) return null

  return (
    <>
      <Navbar />
      <NewMessage />
    </>
  )
}

export default ConditionalLayout
