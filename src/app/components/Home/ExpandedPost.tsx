"use client"

import React, { useState, useEffect, useRef, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Audience, type like, type postProps } from "@/lib/definitions"
import LikeIcon from "../svg/Like"
import LikeButton from "./LikeButton"
import CommentSection from "../CommentSection"
// import ReactTimeAgo from "react-time-ago"

export interface ExtendedProps extends postProps {
  currentUserId?: string
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpandedPost = (props: ExtendedProps) => {
  const [postOptionsOpen, setPostOptionsOpen] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [postLikes, setPostLikes] = useState<like[]>([])
  const postOptionsRef = useRef(null)
  const commentRef = useRef(null)

  function likePost() {
    if (!props.currentUserId) {
      console.log("Log in to like posts") // TODO
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === commentRef.current) {
      props.setModalOpen(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div ref={commentRef} onClick={handleClick} className="absolute flex justify-center items-center inset-0 bg-[#ffffffa8] z-[1000]">
      <p>Helllooo</p>
      <section className="relative flex flex-col shadow-md rounded-md bg-[--off-bg-main] w-[720px] lg:w-[900px] h-[600px] overflow-y-scroll">
        <div className="flex justify-between items-center border-b border-[--off-bg-main-off-hover] py-3 px-4">
          <div className={`invisible flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1 `}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </div>
          <p className="font-bold text-xl">{`Oluwajoba's Post`}</p>
          <div onClick={() => props.setModalOpen(false)} className={`flex justify-center items-center rounded-full cursor-pointer bg-[--off-bg-main-off] w-8 h-8 p-1`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col overflow-y-scroll">
          <div className="flex flex-col">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <Link href={`/${props.author.profileLink}`} className={`w-10 h-10 rounded-full overflow-hidden flex justify-center items-center`}>
                      <Image src={`/${props.author.profileImage}`} alt="profile-image" width={48} height={48} className={`object-cover w-10 h-10`} />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-start">
                    <Link href={`/${props.group?.profileLink || props.author.profileLink}`}>
                      <p className="font-semibold">{props.group?.name || props.author.name}</p>
                    </Link>
                    <div className="flex items-center text-sm text-[--off-text-main]">
                      {props.group && <p className="font-semibold">{props.group.name}</p>}
                      {props.group && <span className="aspect-square w-1 rounded-full bg-[--off-text-main] mx-1"></span>}
                      {/* <p>
                            {createdAt.getMinutes()} minute{createdAt.getMinutes() > 1 && "s"} ago
                        </p> */}
                      {/* <ReactTimeAgo date={createdAt} locale="en-US" /> giving errors */}
                      <span className="aspect-square w-1 rounded-full bg-[--off-text-main] mx-1"></span>
                      {props.audience === Audience.FRIENDS && (
                        <div className="flex justify-center items-center w-4 h-4">
                          <svg className="fill-[--off-text-main] w-4 h-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                            <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-43-61v-82q-35 0-59-26t-24-61v-44L149 497q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437 915Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607 257v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393 488h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z" />
                          </svg>
                        </div>
                      )}
                      {props.audience === Audience.FRIENDS && <div>friends</div>}
                      {props.audience === Audience.FRIENDS && <div>friends of friends</div>}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-1 relative">
                  <div onClick={() => setPostOptionsOpen(true)} className="flex justify-center items-center rounded-full cursor-pointer hover:bg-[--off-bg-main-off] w-8 h-8 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                      <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                    </svg>
                  </div>
                  {postOptionsOpen && (
                    <>
                      <div ref={postOptionsRef} className={`fixed inset-0 z-[1001]`} onClick={() => setPostOptionsOpen(false)}></div>
                      <div className={`absolute shad-css z-[60] py-3 flex flex-col top-8 rounded-md overflow-hidden right-4 w-[340px] bg-[--off-bg-main]`}>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Save post</p>
                            <p className={`text-xs`}>Add this to your saved items.</p>
                          </div>
                        </div>
                        <span aria-hidden="true" className={`bg-[--off-text-main-off] h-px w-11/12 my-1 mx-auto`}></span>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <p className={`font-semibold`}>Turn on notifications for this post</p>
                        </div>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <p className={`font-semibold`}>Embed</p>
                        </div>
                        <span aria-hidden="true" className={`bg-[--off-text-main-off] h-px w-11/12 my-1 mx-auto`}></span>
                        <div onClick={() => setPostOptionsOpen(false)} className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Hide post</p>
                            <p className={`text-xs`}>See fewer posts like this.</p>
                          </div>
                        </div>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Snooze {props.author.name.split(" ")[0]} for 30 days</p>
                            <p className={`text-xs`}>Temporarily stop seeing posts.</p>
                          </div>
                        </div>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Unfollow {props.author.name.split(" ")[0]}</p>
                            <p className={`text-xs`}>Stop seeing posts from this person.</p>
                          </div>
                        </div>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Report post</p>
                            <p className={`text-xs`}>We won't let {props.author.name.split(" ")[0]} know who reported this.</p>
                          </div>
                        </div>
                        <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                          <div className=""></div>
                          <div className={`flex flex-col`}>
                            <p className={`font-semibold`}>Block {props.author.name.split(" ")[0]}'s profile</p>
                            <p className={`text-xs`}>You won't be able to see or contact each other.</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {props.content && (
                <div>
                  <p>{props.content}</p>
                </div>
              )}
            </div>
            {props.images && (
              <div
                className={`grid gap-0.5 w-full ${props.images?.length === 2 ? "grid-cols-2" : ""} ${props.images?.length === 3 ? "grid-cols-2 [grid-template-rows:240px_160px]" : ""} ${
                  props.images?.length === 4 ? "grid-cols-2 [grid-template-rows:240px_160px]" : ""
                } ${props.images?.length > 4 ? "grid-cols-6 [grid-template-rows:240px_160px] " : ""}`}
              >
                {props.images?.map((image, index) => {
                  return (
                    props.images && (
                      <Link
                        key={image.id}
                        href={`photo/${image.id}`}
                        className={` ${index === 2 && props.images?.length === 3 ? "col-span-2 " : ""} ${(index === 0 || index === 1) && props.images?.length > 4 ? "col-span-3" : ""} ${
                          (index === 2 || index === 3 || index === 4) && props.images?.length > 4 ? "col-span-2" : ""
                        } ${index > 4 ? "hidden" : ""} ${index === 4} relative`}
                      >
                        <Image src={`/${image.src}`} alt={`Image`} width={300} height={300} className={`object-cover w-full h-full`} />
                        {props.images?.length > 5 && index === 4 && (
                          <div className={`flex justify-center items-center absolute inset-0 bg-[#00000088]`}>
                            <p className="text-white font-medium text-3xl">+{props.images?.length - 4}</p>
                          </div>
                        )}
                      </Link>
                    )
                  )
                })}
              </div>
            )}
            <div className="flex justify-between items-center px-3 ">
              {props.likes.length > 0 && (
                <div className="flex items-center gap-4">
                  <div className="grid grid-flow-col [grid-template-columns:repeat(auto-fit,15px)]">
                    {props.likes.some((like) => like.like_role === "LIKE") && <LikeIcon width="20px" height="20px" border="1px solid var(--off-bg-main)" />}
                    {props.likes.some((like) => like.like_role === "LOVE") && (
                      <div className="w-5 h-5 p-0.5 bg-[--fb-colors-red] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                        </svg>
                      </div>
                    )}
                    {props.likes.some((like) => like.like_role === "CARE") && (
                      <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                        </svg>
                      </div>
                    )}
                    {props.likes.some((like) => like.like_role === "HAHA") && (
                      <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                        </svg>
                      </div>
                    )}
                    {props.likes.some((like) => like.like_role === "SAD") && (
                      <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                        </svg>
                      </div>
                    )}
                    {props.likes.some((like) => like.like_role === "WOW") && (
                      <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p>{`${props.likes.length}`}</p>
                </div>
              )}
              <div className="flex gap-2 items-center">
                {props.comments.length > 0 && (
                  <div className="flex items-center">
                    <p>{`${props.comments.length}`}</p>
                  </div>
                )}
                {props.shares.length > 0 && (
                  <div className="flex items-center">
                    <p>{`${props.shares.length}`}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[--off-text-main-off] mx-4 py-1 px-6">
              <LikeButton likes={props.likes} postId={props.id} setPostLikes={setPostLikes} />
              <div onClick={() => ""} className="py-1.5 px-6 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-[--off-bg-main-off]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main-off]">
                  <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                </svg>
                <p className="text-[--off-text-main-off] font-semibold">Comment</p>
              </div>
              <div onClick={() => ""} className="py-1.5 px-6 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-[--off-bg-main-off]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--off-text-main-off]">
                  <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
                </svg>
                <p className="text-[--off-text-main-off] font-semibold">Share</p>
              </div>
            </div>
          </div>
          <CommentSection postComments={props.comments} />
        </div>
        {/* Bottom form */}
        <div className="flex gap-2 px-4 py-3 relative">
          <div className="flex items-center">
            <Link href={`/${props.author.profileLink}`} className={`w-10 h-10 rounded-full overflow-hidden flex justify-center items-center`}>
              <Image src={`/${props.author.profileImage}`} alt="profile-image" width={48} height={48} className={`object-cover w-10 h-10`} />
            </Link>
          </div>
          <textarea className="p-2 bg-[--off-bg-main-off] text-neutral-400" placeholder={`Comment as ${"Oluwajoba Bukola"}`} value={newComment} draggable={false} onChange={(e) => setNewComment(e.target.value)} />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
            <span>😎</span>
            <span>🙂</span>
            <span>📷</span>
            <span>💳</span>
            <span>🧧</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpandedPost
