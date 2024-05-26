import React from 'react'

const AccountSkeleton = () => {

  return (
    <aside className={`bg-[--off-bg-main] absolute top-[50px] right-5 rounded-md w-[350px] h-[calc(100vh-150px)] p-4 z-[60] skeleton`}>
      <div className={`flex flex-col shad-css p-3 rounded-md`}>
        <div className={`flex gap-2 items-center`}>
          <div className='flex'>
            <span className='rounded-full h-9 w-9'></span>
          </div>
          <span className='rounded-full w-full h-4'></span>
        </div>
        <div className={`h-px w-full my-4 bg-[--off-bg-main-off]`}></div>
        <span style={{animationDelay: '1s'}} className='w-full h-4 rounded-full'></span>
      </div>
      <div className='mt-6 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <div className='flex'>
            <span style={{animationDelay: '2s'}} className='rounded-full h-9 w-9'></span>
          </div>
          <span style={{animationDelay: '2s'}} className='rounded-full h-4 w-full'></span>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex'>
            <span style={{animationDelay: '3s'}} className='rounded-full h-9 w-9'></span>
          </div>
          <span style={{animationDelay: '3s'}} className='rounded-full h-4 w-full'></span>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex'>
            <span style={{animationDelay: '4s'}} className='rounded-full h-9 w-9'></span>
          </div>
          <span style={{animationDelay: '4s'}} className='rounded-full h-4 w-3/4'></span>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex'>
            <span style={{animationDelay: '5s'}} className='rounded-full h-9 w-9'></span>
          </div>
          <span style={{animationDelay: '5s'}} className='rounded-full h-4 w-2/4'></span>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex'>
            <span style={{animationDelay: '6s'}} className='rounded-full h-9 w-9'></span>
          </div>
          <span style={{animationDelay: '6s'}} className='rounded-full h-4 w-full'></span>
        </div>

        <div className='flex mt-2'>
          <span style={{animationDelay: '7s'}} className='rounded-full h-4 w-full'></span>
        </div>
      </div>
    </aside> 
  )
}

export default AccountSkeleton