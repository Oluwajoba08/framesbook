import React from 'react'

const StorySkeleton = () => {
  return (
    <div className={`w-full lg:w-[600px] min-[735px]:w-[min(70vw,540px)] skeleton h-64 grid grid-flow-col gap-2 overflow-x-hidden`}>
      <span className={`rounded-xl w-36 h-full`}></span>
      <span style={{animationDelay: '1s'}} className={`rounded-xl w-36 h-full`}></span>
      <span style={{animationDelay: '2s'}} className={`rounded-xl w-36 h-full`}></span>
      <span style={{animationDelay: '3s'}} className={`rounded-xl w-36 h-full`}></span>
    </div>
  )
}

export default StorySkeleton