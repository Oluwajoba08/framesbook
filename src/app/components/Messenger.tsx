import React from "react"

const Messenger = () => {
  return (
    <div className={`bg-[--off-bg-main] border border-[--off-bg-main] shad-css absolute top-[50px] right-3 rounded-md w-[340px] h-[calc(100vh-80px)] z-[60] overflow-y-scroll`}>
      <div className="flex justify-between px-3 my-3">
        <p className="font-bold text-2xl">Chats</p>
        <div className="flex gap-1 relative">
          <div onClick={() => console.log("messenger")} className="flex justify-center items-center rounded-full cursor-pointer hover:bg-[--off-bg-main-off] w-8 h-8 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
          </div>
          <div onClick={() => console.log("messenger54")} className="flex justify-center items-center rounded-full cursor-pointer hover:bg-[--off-bg-main-off] w-8 h-8 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
          </div>
          <div onClick={() => console.log("messenger454")} className="flex justify-center items-center rounded-full cursor-pointer hover:bg-[--off-bg-main-off] w-8 h-8 p-1">
            <i className={`bg-auto w-5 h-5 bg-no-repeat inline-block`} style={{ backgroundImage: " url('/fb-icons.png')", backgroundPosition: "0px -189px" }}></i>
          </div>
        </div>
      </div>

      <div className="flex px-3">
        <div className={`rounded-l-full rounded-r-none p-3 bg-[--off-bg-main-off]`}>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-[--off-text-main]">
            <g fillRule="evenodd" transform="translate(-448 -544)">
              <g fillRule="nonzero">
                <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                <path
                  d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                  transform="translate(448 544)"
                ></path>
                <path
                  d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                  transform="translate(448 544)"
                ></path>
                <path
                  d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                  transform="translate(448 544)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <input type="text" placeholder="Search Messenger" role="search" className="placeholder:text-[--off-text-main] py-2 pl-1 pr-3 rounded-r-full bg-[--off-bg-main-off] w-full" />
      </div>

      <div className="relative flex w-min ml-3 my-3">
        <p className="rounded-full py-1.5 px-3 bg-[#0866ff77] font-medium">Inbox</p>
        <span className="bg-[--fb-color] w-2 h-2 rounded-full absolute right-0.5 top-0.5"></span>
      </div>
    </div>
  )
}

export default Messenger
