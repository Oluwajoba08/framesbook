import React from 'react'

const PostSkeleton = () => {


  return (
    <div className={`bg-[--off-bg-main] py-4 px-5 rounded-md w-[500px] h-[285px] flex flex-col justify-between`}>
      <div className='flex gap-3 items-center skeleton'>
        <span className='rounded-full w-10 h-10'></span>
        <div className='flex flex-col gap-1.5'>
          <span className='h-3 rounded-md w-[80px]'></span>
          <span className='h-3 rounded-md w-[100px]'></span>
        </div>
      </div>

      <div className='flex justify-around w-full skeleton'>
        <span className='h-3 rounded-md w-16 '></span>
        <span className='h-3 rounded-md w-16 '></span>
        <span className='h-3 rounded-md w-16 '></span>
      </div>
    </div>
  )
}

export default PostSkeleton