"use client"

// import { getFeelings } from "@/lib/getFeelings" [ abstracted to provider ]
import React, { createContext, useState, useContext, useReducer } from "react"
import type { feelingsType } from "@/lib/definitions"

type feelingProps = {
  feelingSearch: string
  dispatch: React.Dispatch<{ type: string }>
  setFeelingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type propTypes = {
  feelings: feelingsType[]
  feelingsValue: string
  setFeelingsValue: React.Dispatch<React.SetStateAction<string>>
}

export const FeelingContext = createContext<propTypes | null>(null)

const Feelings = ({ feelingSearch, dispatch, setFeelingModalOpen }: feelingProps) => {
  const feel = useContext(FeelingContext)

  return (
    <ul className="grid grid-cols-2 mt-4">
      {feel?.feelings
        .filter((feeling) => feeling.type.includes(feelingSearch))
        .map(({ emoji, id, type }) => {
          return (
            <li
              onClick={() => {
                feel.setFeelingsValue(type)
                setFeelingModalOpen(true)
                dispatch({ type: "ADDFEELING" })
              }}
              key={id}
              className="flex gap-3 items-center cursor-pointer hover:bg-[--bg-main] p-1.5 rounded-md"
            >
              <span className="text-xl p-2 rounded-full bg-[--bg-main]">{emoji}</span>
              <span>{type}</span>
            </li>
          )
        })}
    </ul>
  )
}

export default Feelings
