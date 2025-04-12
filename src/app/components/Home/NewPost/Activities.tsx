import { getActivities } from "@/lib/getActivities"
import React from "react"

const Activities = async ({ activitySearch }: { activitySearch: string }) => {
  const activities = await getActivities()
  return (
    <ul className="flex flex-col gap-1 mt-4 w-full h-64 overflow-y-scroll scroller">
      {activities
        .filter((activity) => activity.type.includes(activitySearch))
        .map(({ emoji, id, type }) => {
          return (
            <li onClick={() => ""} key={id} className="flex justify-between items-center cursor-pointer hover:bg-[--bg-main] p-1.5 rounded-md">
              <span className="flex gap-3 items-center">
                <span className="text-xl w-10 aspect-square flex items-center justify-center rounded-full bg-[--bg-main]">{emoji}</span>
                <span>{type}</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="w-7 h-7 fill-[--text-main] -rotate-90">
                <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
              </svg>
            </li>
          )
        })}
    </ul>
  )
}

export default Activities
