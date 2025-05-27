import React from "react"
import Image from "next/image"
import Link from "next/link"

const AccountBar = () => {
  return (
    <aside className={`bg-[--off-bg-main] absolute top-[50px] shad-css z-[60] right-5 rounded-md w-[350px] h-[calc(100vh-80px)] p-3 `}>
      <div className={`flex flex-col shad-css p-1 rounded-md`}>
        <Link href={`/profile`} className={`flex gap-2 items-center px-3 py-1 hover:bg-[--off-bg-main-off] rounded-md`}>
          <div className={`flex w-9 h-9`}>
            <Image className={`object-cover rounded-full h-9 w-9`} src={`/avatar.jpg`} height={50} width={50} alt={`profile`} />
          </div>
          <p className="font-semibold text-lg">Oluwajoba Bukola</p>
        </Link>
        <span aria-hidden="true" className={`bg-[--off-bg-main-off] h-px w-11/12 mx-auto my-2`}></span>
        <p className="text-[--fb-color] font-medium ml-2 cursor-pointer">See all profiles</p>
      </div>
      <div className="flex gap-1 flex-col mt-3">
        <div className={`flex justify-between hover:bg-[--off-bg-main-off] p-1 rounded-md items-center cursor-pointer`}>
          <div className={`flex gap-2 items-center`}>
            <div className={`rounded-full bg-[--bg-main] p-2`}>
              <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
            </div>
            <p className="font-semibold">Settings & privacy</p>
          </div>
          <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
        <div className={`flex justify-between hover:bg-[--off-bg-main-off] p-1 rounded-md items-center cursor-pointer`}>
          <div className={`flex gap-2 items-center`}>
            <div className={`rounded-full bg-[--bg-main] p-2`}>
              <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
            <p className="font-semibold">Help & support</p>
          </div>
          <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
        <div className={`flex justify-between hover:bg-[--off-bg-main-off] p-1 rounded-md items-center cursor-pointer`}>
          <div className={`flex gap-2 items-center`}>
            <div className={`rounded-full bg-[--bg-main] p-2`}>
              <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-305Z" />
              </svg>
            </div>
            <p className="font-semibold">Display & accessibility</p>
          </div>
          <svg className="-rotate-90 fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
        <div className={`flex justify-between hover:bg-[--off-bg-main-off] p-1 rounded-md items-center cursor-pointer`}>
          <div className={`flex gap-2 items-center`}>
            <div className={`rounded-full bg-[--bg-main] p-2`}>
              <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
            <p className="font-semibold">Give feedback</p>
          </div>
        </div>
        <div className={`flex justify-between hover:bg-[--off-bg-main-off] p-1 rounded-md items-center cursor-pointer`}>
          <div className={`flex gap-2 items-center`}>
            <div className={`rounded-full bg-[--bg-main] p-2`}>
              <svg className="fill-[--text-main]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
            <p className="font-semibold">Log out</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AccountBar
