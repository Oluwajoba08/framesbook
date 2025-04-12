import React, { Suspense } from "react"
import StoryPageSkeleton from "./skeleton/StoryPageSkeleton"

// async function getStory(){
//   console.log("Work on getStory function")
// }

const StoryContent = async ({ id }: { id: string }) => {
  // const story = await getStory()

  return (
    // <div className="w-full grid [grid-template-columns:360px_1fr]">
    //   <div className="mt-14 overflow-y-scroll bg-[--off-bg-main] flex flex-col w-[360px] p-3">
    //     <p className="text-2xl font-bold">Stories</p>
    //     <div className="flex flex-col w-full">
    //       <p className="font-medium my-3">Your Story</p>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 ">
    //         <span style={{ animationDelay: "1s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "1s" }} className="rounded-full h-6 w-2/3"></span>
    //           <span style={{ animationDelay: "1s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col w-full">
    //       <p className="font-medium my-3">All Stories</p>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 mb-6">
    //         <span style={{ animationDelay: "2s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "2s" }} className="rounded-full h-6 w-full"></span>
    //           <span style={{ animationDelay: "2s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 mb-6">
    //         <span style={{ animationDelay: "3s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "3s" }} className="rounded-full h-6 w-full"></span>
    //           <span style={{ animationDelay: "3s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 mb-6">
    //         <span style={{ animationDelay: "4s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "4s" }} className="rounded-full h-6 w-5/6"></span>
    //           <span style={{ animationDelay: "4s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 mb-6">
    //         <span style={{ animationDelay: "5s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "5s" }} className="rounded-full h-6 w-1/2"></span>
    //           <span style={{ animationDelay: "5s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //       <div className="grid grid-flow-col grid-cols-6 w-full gap-2 mb-6">
    //         <span style={{ animationDelay: "6s" }} className="rounded-full w-10 h-10"></span>
    //         <div className="grid gap-2 col-span-5">
    //           <span style={{ animationDelay: "6s" }} className="rounded-full h-6 w-2/3"></span>
    //           <span style={{ animationDelay: "6s" }} className="rounded-full h-4 w-1/3"></span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="overflow-hidden w-[calc(100vw-360px)] justify-self-stretch bg-[--bg-main] flex justify-center items-start ">
    //     <div className="w-72 h-[500px] bg-[--off-text-main] mt-4 rounded-lg py-6 px-3 grid grid-flow-col grid-cols-6">
    //       <span className="rounded-full w-10 h-10 "></span>
    //       <div className="ml-2 flex flex-col gap-2 col-span-5">
    //         <span className="rounded-full h-3 w-2/3"></span>
    //         <span className="rounded-full h-3 w-1/3"></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <StoryPageSkeleton />
  )
}

export default StoryContent
