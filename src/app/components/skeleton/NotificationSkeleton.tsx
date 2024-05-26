import React from 'react'

const NotificationSkeleton = () => {
  return (
    <div className={`bg-[--off-bg-main] border border-[--off-bg-main] absolute top-[50px] right-3 rounded-md w-96 h-[calc(100vh-80px)] p-3 z-[60] overflow-y-hidden skeleton`}>
      <p className={`font-bold text-2xl mb-1`}>Notifications</p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span className='w-14 h-14 rounded-full'></span>
          </div>
          <span className='w-full h-4 rounded-full'></span>
        </div>
        
        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '1s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '1s'}} className='w-full h-4 rounded-full'></span>
        </div>
      
        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '2s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '2s'}} className='w-4/6 h-4 rounded-full'></span>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '3s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '3s'}} className='w-3/5 h-4 rounded-full'></span>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '4s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '4s'}} className='w-full h-4 rounded-full'></span>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '5s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '5s'}} className='w-full h-4 rounded-full'></span>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex'>
            <span style={{animationDelay: '6s'}} className='w-14 h-14 rounded-full'></span>
          </div>
          <span style={{animationDelay: '6s'}} className='w-2/6 h-4 rounded-full'></span>
        </div>
      </div>
    </div>
  )
}

export default NotificationSkeleton