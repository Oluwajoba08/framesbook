import React from 'react'

const MenuSkeleton = () => {

  return (
    <div className={`bg-[--off-bg-main] border border-[--off-bg-main] absolute top-[50px] right-3 rounded-md w-[640px] h-[calc(100vh-80px)] p-4 z-[60] overflow-y-hidden skeleton`}>
      <p className={`font-bold text-2xl mb-1`}>Menu</p>
      <div className={`grid grid-cols-3 gap-3`}>
        <div className={`flex flex-col col-span-2 bg-[--bg-main] p-4 rounded-md`}>
            <div className='flex mb-2'>
                <span className='h-9 rounded-full w-full'></span>
            </div>
            <span className={`h-4 w-20 rounded-full my-3`}></span>
            <div className="flex flex-col gap-7 mt-2">
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '1s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '1s'}} className='h-4 w-32 rounded-full'></span>
                        <span style={{animationDelay: '2s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '2s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '2s'}} className='h-4 w-32 rounded-full'></span>
                        <span style={{animationDelay: '3s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '3s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '3s'}} className='h-4 w-24 rounded-full'></span>
                        <span style={{animationDelay: '4s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '4s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '4s'}} className='h-4 w-28 rounded-full'></span>
                        <span style={{animationDelay: '5s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '5s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '5s'}} className='h-4 w-32 rounded-full'></span>
                        <span style={{animationDelay: '6s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
                <div className={`flex rounded items-center gap-2`}>
                    <div className='flex'><span style={{animationDelay: '6s'}} className={`h-9 w-9 rounded-full`} ></span></div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <span style={{animationDelay: '6s'}} className='h-4 w-32 rounded-full'></span>
                        <span style={{animationDelay: '7s'}} className='h-4 w-full rounded-full'></span>
                    </div>
                </div>
            </div>

        </div>

        <div className={`bg-[--bg-main] rounded-md p-4`}>
            <div className='flex mb-3'>
                <span className='h-4 w-20 rounded-full'></span>
            </div>

            <div className="flex flex-col gap-10 mt-8">
                <div className="flex gap-4 flex-col">
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '1s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '1s'}} className='h-4 rounded-full w-full'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '2s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '2s'}} className='h-4 rounded-full w-full'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '3s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '3s'}} className='h-4 rounded-full w-3/5'></span>
                    </div>
                </div>
                <div className="flex gap-4 flex-col">
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '4s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '4s'}} className='h-4 rounded-full w-full'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '5s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '5s'}} className='h-4 rounded-full w-full'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '6s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '6s'}} className='h-4 rounded-full w-4/6'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '7s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '7s'}} className='h-4 rounded-full w-3/6'></span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <div className={`flex justify-center items-center rounded-full `}>
                            <span style={{animationDelay: '8s'}} className={`w-9 h-9 rounded-full`}></span>
                        </div>
                        <span style={{animationDelay: '8s'}} className='h-4 rounded-full w-full'></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuSkeleton