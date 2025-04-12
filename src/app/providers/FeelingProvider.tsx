"use client"
import { getFeelings } from "@/lib/getFeelings"
import { FeelingContext } from "../components/Home/NewPost/Feelings"
import { useEffect, useState } from "react"
import type { feelingsType } from "@/lib/definitions"

export const FeelingProvider = ({ children }: { children: React.ReactNode }) => {
  const [feelings, setFeelings] = useState<feelingsType[]>([])
  const [feelingsValue, setFeelingsValue] = useState("")

  useEffect(() => {
    const getFeelingsFunc = async () => {
      const feelingsArray = await getFeelings()
      setFeelings(feelingsArray)
    }

    getFeelingsFunc()
  }, [])

  return <FeelingContext.Provider value={{ feelings, feelingsValue, setFeelingsValue }}>{children}</FeelingContext.Provider>
}
