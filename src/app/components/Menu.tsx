import React from "react"
import Link from "next/link"
import Image from "next/image"

const Menu = async () => {
  return (
    <div className={`bg-[--off-bg-main] border border-[--off-bg-main] shad-css absolute top-[50px] right-3 rounded-md w-[640px] h-[calc(100vh-80px)] p-4 z-[60] overflow-y-scroll scroller`}>
      <p className={`font-bold text-2xl`}>Menu</p>
      <div className={`grid grid-cols-3 gap-4`}>
        <div className={`flex flex-col col-span-2 bg-[--bg-main] p-4 rounded-md`}>
          <div className="flex mb-2">
            <div className={`rounded-l-full xl:rounded-r-none p-3 bg-[--off-bg-main]`}>
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
            <input type="text" placeholder="Search menu" role="search" className=" placeholder:text-[--off-text-main] py-2 pl-1 pr-3 rounded-r-full bg-[--off-bg-main] w-full" />
          </div>
          <p className={`font-semibold`}>Social</p>
          <div className="flex flex-col">
            <Link href={`/events`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -296px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">Events</p>
                <p className="text-sm text-[--off-text-main-off]">Organize or find events and other things to do online and nearby.</p>
              </div>
            </Link>
            <Link href={`/friends`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -296px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">Friends</p>
                <p className="text-sm text-[--off-text-main-off]">Search for friends or people you may know.</p>
              </div>
            </Link>
            <Link href={`/groups`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -37px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">Groups</p>
                <p className="text-sm text-[--off-text-main-off]">Connect with people who share your interests.</p>
              </div>
            </Link>
            <Link href={`/feed`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -296px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">News Feed</p>
                <p className="text-sm text-[--off-text-main-off]">See relevnat post from people and pages you follow.</p>
              </div>
            </Link>
            <Link href={`/feed`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -296px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">Feeds</p>
                <p className="text-sm text-[--off-text-main-off]">See the most recent posts from friends, groups, Pages and more.</p>
              </div>
            </Link>
            <Link href={`/pages`} className={`flex hover:bg-[--off-bg-main] px-1 py-2 rounded gap-3 items-start`}>
              <div>
                <i className={`bg-auto w-9 h-9 bg-no-repeat inline-block`} style={{ backgroundImage: "url('/3d-fb-illus.png')", backgroundPosition: "0px -112px" }}></i>
              </div>
              <div className={`flex flex-col `}>
                <p className="font-semibold">Pages</p>
                <p className="text-sm text-[--off-text-main-off]">Discover and connect with businesses on Framesbook.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={`bg-[--bg-main] rounded-md p-4`}>
          <div className="mb-3">
            <p className="font-bold text-lg">Create</p>
          </div>

          <div className="flex flex-col">
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Post</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Story</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Reel</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Life event</p>
            </Link>

            <span aria-hidden="true" className={`bg-[--off-bg-main-off] h-px w-full mx-auto my-1`}></span>

            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Page</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Ad</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Group</p>
            </Link>
            <Link href={`/new`} className="flex gap-2 items-center hover:bg-[--off-bg-main] px-1 py-2 rounded">
              <div className={`flex justify-center items-center rounded-full p-2 bg-[--off-bg-main]`}>
                <i
                  className={`w-5 h-5`}
                  style={{ backgroundImage: "url('/fb-icons.png')", backgroundPosition: "0px -189px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block" }}
                ></i>
              </div>
              <p className="font-semibold">Event</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
