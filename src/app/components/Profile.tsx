"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import friends from "@/lib/friends"
import CreatePost from "./Home/CreatePost"
// import Posts
// import { redirect } from "next/navigation"

const Profile = ({ params }: { params: { id: string } }) => {
  const [activeTab, setActiveTab] = useState<"posts" | "about" | "friends" | "photos" | "videos" | "reels" | "more">("posts")
  const [openPYMK, setOpenPYMK] = useState(false)
  const [createPostOpen, setCreatePostOpen] = useState(false)

  return (
    <main className="flex flex-col items-center bg-[--bg-main] pt-14 min-h-screen">
      <section className="flex flex-col w-full items-center" style={{ backgroundImage: "linear-gradient(to bottom, var(--off-text-main), var(--off-bg-main) 60%)" }}>
        <div className="flex flex-col lg:w-[960px] items-center">
          <div className="rounded-b-xl w-full max-w-5xl flex px-8 py-4 items-end justify-end h-[58vh] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/avatar.jpg")' }}>
            <button className="bg-[--off-bg-main] flex gap-1 px-3 py-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
              </svg>
              <p className="font-medium text-[off-text-main]">Edit cover photo</p>
            </button>
          </div>
          <div className="flex flex-col md:w-[840px]">
            <div className="flex relative justify-between w-full py-4 pl-44">
              <div className="absolute rounded-full left-0 -top-8 w-40 h-40 overflow-hidden border-[4px] border-[--off-bg-main]">
                <Image src={`/avatar.jpg`} alt="profile" width={200} height={200} className="object-cover w-40 h-40" />
              </div>
              <div className="absolute bottom-3 cursor-pointer left-28 bg-[--off-bg-main-off] rounded-full p-2 flex justify-center items-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                  <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="text-3xl font-bold">Oluwajoba Bukola</p>
                <p>825 friends</p>
                <div className="flex justify-between w-full">
                  <div className="flex ml-2 items-center">
                    {friends.map(({ profileImage, id }, index) => {
                      return (
                        <div key={id} className={`w-8 h-8 overflow-hidden rounded-full border-2 border-[--off-bg-main] -ml-2 `}>
                          <Image src={`/${profileImage}`} alt={`image`} width={48} height={48} className="object-cover w-8 h-8" />
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex gap-2 self-end">
                    <div className="flex bg-[--fb-color] items-center rounded h-min px-3 py-1.5 gap-1 justify-between cursor-pointer">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="fill-white">
                        <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
                      </svg>
                      <p className="font-medium text-white">Add to story</p>
                    </div>
                    <div className="flex bg-[--off-text-main-off] items-center rounded h-min px-3 py-1.5 gap-1 justify-between cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white h-5">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                      <p className="font-medium text-white">Edit profile</p>
                    </div>
                    <div className="flex bg-[--off-text-main-off] justify-center items-center rounded h-min px-3 py-1.5 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className="w-6 h-6 fill-white">
                        <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="h-px bg-[--off-text-main-off] w-full my-2"></span>
            <div className="flex justify-between mb-3 items-center">
              <div className="flex">
                <div onClick={() => setActiveTab("posts")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "posts" ? "text-[--fb-color]" : ""}`}>Posts</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "posts" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("about")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "about" ? "text-[--fb-color]" : ""}`}>About</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "about" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("friends")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "friends" ? "text-[--fb-color]" : ""}`}>Friends</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "friends" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("photos")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "photos" ? "text-[--fb-color]" : ""}`}>Photos</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "photos" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("videos")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "videos" ? "text-[--fb-color]" : ""}`}>Videos</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "videos" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("reels")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "reels" ? "text-[--fb-color]" : ""}`}>Reels</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "reels" ? "flex" : "hidden"}`}></span>
                </div>
                <div onClick={() => setActiveTab("more")} className="flex px-3 py-2 hover:bg-[--off-bg-main-off] rounded cursor-pointer relative">
                  <p className={`font-medium ${activeTab === "more" ? "text-[--fb-color]" : ""}`}>More</p>
                  <span className={`absolute left-0 top-12 bg-[--fb-color] h-1 w-full block rounded-t-md ${activeTab === "more" ? "flex" : "hidden"}`}></span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </div>
              </div>
              <div onClick={() => setOpenPYMK((openPYMK) => !openPYMK)} className="flex bg-[--off-text-main-off] items-center rounded h-min px-3 py-1.5 justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                  <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row w-full max-w-[840px] min-h-screen justify-between pt-4 px-3 md:px-0">
        <div className="flex flex-col gap-5">
          <div className="bg-[--off-bg-main] p-3 rounded-md">
            <p className="font-bold text-lg">Intro</p>
          </div>
          <div className="bg-[--off-bg-main] p-3 rounded-md">
            <p className="font-bold text-lg">Photos</p>
          </div>
          <div className="bg-[--off-bg-main] p-3 rounded-md">
            <p className="font-bold text-lg">Friends</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div className={`bg-[--off-bg-main] py-2 px-2 lg:px-4 rounded-md w-[450px] lg:w-[500px] flex flex-col`}>
            <div className="flex gap-1 my-2 font-medium">
              <Image src={`/profile-image.jpg`} alt="profile" width={64} height={64} className={`rounded-full object-cover h-10 w-10`} />
              <div onClick={() => setCreatePostOpen(true)} className="cursor-pointer px-3 py-2 rounded-full bg-[--bg-main] w-full">
                <p className="font-medium text-[--off-text-main]">{`What's on your mind?`}</p>
              </div>
            </div>
            <span aria-hidden="true" className={`bg-[--off-bg-main-off] h-px w-full mx-auto`}></span>
            <div className="flex lg:gap-1 mt-2 lg:px-3 w-full justify-between">
              <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                <Image src={`/video-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
                <p className={`font-medium text-[--off-text-main]`}>Live video</p>
              </div>
              <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                <Image src={`/photo-fb.png`} alt="photo" width={20} height={20} className={`h-6 w-auto`} />
                <p className={`font-medium text-[--off-text-main]`}>Photo/video</p>
              </div>
              <div onClick={() => setCreatePostOpen(true)} className={`cursor-pointer rounded flex gap-1.5 items-center p-2 hover:bg-[--off-bg-main-off] justify-center`}>
                <Image src={`/emoji-fb.png`} alt="video" width={20} height={20} className={`h-6 w-auto`} />
                <p className={`font-medium text-[--off-text-main]`}>Life event</p>
              </div>
            </div>
          </div>
          {createPostOpen && <CreatePost setCreatePostOpen={setCreatePostOpen} />}
          {/* {posts.map(() =>{
            
          })} */}
        </div>
      </div>
    </main>
  )
}

export default Profile
