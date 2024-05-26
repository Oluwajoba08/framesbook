import React from "react"

const EmptyStory = () => {
  return (
    <div className="flex p-2.5 shadow-md rounded-md bg-[--off-bg-main] w-[calc(100vw-50px)] lg:w-[600px] min-[735px]:w-[min(70vw,540px)]">
      <div className="flex gap-2 px-2 items-center hover:bg-[--off-bg-main-off] cursor-pointer rounded-md w-full">
        <div className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#0866ff33] ">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`text-[--fb-color]`}>
            <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg">Create a story</p>
          <p className="">Share a photo or write something.</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyStory
