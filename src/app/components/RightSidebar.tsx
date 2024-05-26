import React from "react"
import Image from "next/image"

const RightSidebar = () => {
  return (
    <aside className={`bg-[--bg-main] fixed w-[260px] hidden min-[735px]:flex top-14 right-0 z-40 h-[calc(100vh-56px)] border-l border-[--off-bg-main-off] overflow-y-hidden`}>
      <div className={`flex flex-col w-full`}>
        {/* <h3 className="text-[--off-text-main] font-medium my-4">Sponsored</h3>
        <div className={`flex items-center gap-3 hover:bg-[--off-bg-main] py-2`}>
          <Image src={`/bank-ad.jpeg`} width={80} height={80} className={`object-cover rounded-lg w-24`} alt={`sponsored`} />
          <div className={`flex flex-col`}>
            <p className={`font-medium`}>Mobile Banking</p>
            <p className={`text-xs text-[#7e7e7e]`}>mobilebanking.com</p>
          </div>
        </div>
        <div className={`flex items-center gap-3 hover:bg-[--off-bg-main] py-2`}>
          <Image src={`/football-ad.jpg`} width={80} height={80} className={`object-cover rounded-lg w-24`} alt={`sponsored`} />
          <div className={`flex flex-col`}>
            <p className={`font-medium`}>VBN Logistics</p>
            <p className={`text-xs text-[#7e7e7e]`}>vbnlogistics.com</p>
          </div>
        </div> */}
        <h3 className="text-[--off-text-main] font-semibold my-4">Group Conversations</h3>
        <div className={`flex items-center gap-2 hover:bg-[--off-bg-main]`}>
          <div className="flex justify-center items-center w-8 h-8 p-1 rounded-full bg-[--off-bg-main] ">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={`fill-[--text-main]`}>
              <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
            </svg>
          </div>
          <p className="font-semibold">Create New Group</p>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
