import React from "react"

const CreatePostSkeleton = () => {
  return (
    <div className="flex justify-center items-center  fixed inset-0 z-[1000] bg-[#00000055]">
      <div className="flex flex-col rounded-md overflow-hidden bg-[--off-bg-main] w-[450px] lg:w-[500px] h-[450px]">
        <div className="flex justify-between border-b border-[--off-text-main-off]">
          <div className="flex invisible justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
          <p className="font-bold text-2xl">Create post</p>
          <div className="flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-2"></div>
        </div>
      </div>
    </div>
  )
}

export default CreatePostSkeleton
