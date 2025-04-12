"use client"

import React, { useState, useEffect, useRef, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import type { like, postProps } from "@/lib/definitions"
import HidePost from "./HidePost"
import Loading from "../Loading"
import LikeIcon from "../svg/Like"
import LikeButton from "./LikeButton"
// import ReactTimeAgo from "react-time-ago"

interface props extends postProps {
  currentUserId?: string
}

const Post = ({ id, author, createdAt, likes, comments, shares, audience, images, content, group, currentUserId }: props) => {
  const [postOptionsOpen, setPostOptionsOpen] = useState(false)
  const [hidePost, setHidePost] = useState(false)
  const [seeMore, setSeeMore] = useState(false)
  const [postLikes, setPostLikes] = useState<like[]>([])
  const postOptionsRef = useRef(null)

  function closeOverlayAndHide() {
    setPostOptionsOpen(false)
    setHidePost(true)
  }

  return (
    <section className="flex flex-col shadow-md gap-1 rounded-md bg-[--off-bg-main] w-[450px] lg:w-[500px] overflow-hidden">
      {hidePost ? (
        <Suspense fallback={<Loading />}>
          <HidePost id={id} group={group} author={author} setHidePost={setHidePost} />
        </Suspense>
      ) : (
        <>
          <div className="flex pt-4 px-4 flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <Link href={`/${author.profileLink}`} className={`w-10 h-10 rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image src={`/${author.profileImage}`} alt="profile-image" width={48} height={48} className={`object-cover w-10 h-10`} />
                  </Link>
                </div>
                <div className="flex flex-col justify-start">
                  <Link href={`/${group?.profileLink || author.profileLink}`}>
                    <p className="font-semibold">{group?.name || author.name}</p>
                  </Link>
                  <div className="flex items-center text-sm text-[--off-text-main]">
                    {group && <p className="font-semibold">{group.name}</p>}
                    {group && <span className="aspect-square w-1 rounded-full bg-[--off-text-main] mx-1"></span>}
                    {/* <p>
                      {createdAt.getMinutes()} minute{createdAt.getMinutes() > 1 && "s"} ago
                    </p> */}
                    {/* <ReactTimeAgo date={createdAt} locale="en-US" /> giving errors */}
                    <span className="aspect-square w-1 rounded-full bg-[--off-text-main] mx-1"></span>
                    {audience === "public" && (
                      <div className="flex justify-center items-center w-4 h-4">
                        <svg className="fill-[--off-text-main] w-4 h-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                          <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-43-61v-82q-35 0-59-26t-24-61v-44L149 497q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437 915Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607 257v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393 488h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z" />
                        </svg>
                      </div>
                    )}
                    {audience === "friends" && <div>friends</div>}
                    {audience === "friends of friends" && <div>friends of friends</div>}
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
                    <div ref={postOptionsRef} className={`fixed inset-0 z-[59]`} onClick={() => setPostOptionsOpen(false)}></div>
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
                      <div onClick={() => closeOverlayAndHide()} className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                        <div className=""></div>
                        <div className={`flex flex-col`}>
                          <p className={`font-semibold`}>Hide post</p>
                          <p className={`text-xs`}>See fewer posts like this.</p>
                        </div>
                      </div>
                      <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                        <div className=""></div>
                        <div className={`flex flex-col`}>
                          <p className={`font-semibold`}>Snooze {author.name.split(" ")[0]} for 30 days</p>
                          <p className={`text-xs`}>Temporarily stop seeing posts.</p>
                        </div>
                      </div>
                      <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                        <div className=""></div>
                        <div className={`flex flex-col`}>
                          <p className={`font-semibold`}>Unfollow {author.name.split(" ")[0]}</p>
                          <p className={`text-xs`}>Stop seeing posts from this person.</p>
                        </div>
                      </div>
                      <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                        <div className=""></div>
                        <div className={`flex flex-col`}>
                          <p className={`font-semibold`}>Report post</p>
                          <p className={`text-xs`}>We won't let {author.name.split(" ")[0]} know who reported this.</p>
                        </div>
                      </div>
                      <div className={`flex px-4 py-1 hover:bg-[--off-bg-main-off] cursor-pointer`}>
                        <div className=""></div>
                        <div className={`flex flex-col`}>
                          <p className={`font-semibold`}>Block {author.name.split(" ")[0]}'s profile</p>
                          <p className={`text-xs`}>You won't be able to see or contact each other.</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div onClick={() => setHidePost(true)} className="flex justify-center items-center rounded-full cursor-pointer hover:bg-[--off-bg-main-off] w-8 h-8 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-[--text-main]">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {content.length > 280 && !seeMore ? (
                <p>
                  {content.slice(0, 269)}
                  <span onClick={() => setSeeMore(true)} className="font-semibold cursor-pointer">
                    ...See more
                  </span>
                </p>
              ) : (
                <p>{content}</p>
              )}
            </div>
          </div>

          {images && (
            <div
              className={`grid gap-0.5 w-full ${images.length === 2 ? "grid-cols-2" : ""} ${images.length === 3 ? "grid-cols-2 [grid-template-rows:240px_160px]" : ""} ${images.length === 4 ? "grid-cols-2 [grid-template-rows:240px_160px]" : ""} ${
                images.length > 4 ? "grid-cols-6 [grid-template-rows:240px_160px] " : ""
              }`}
            >
              {images.map((image, index) => {
                return (
                  <Link
                    key={image.id}
                    href={`photo/${image.id}`}
                    className={` ${index === 2 && images.length === 3 ? "col-span-2 " : ""} ${(index === 0 || index === 1) && images.length > 4 ? "col-span-3" : ""} ${
                      (index === 2 || index === 3 || index === 4) && images.length > 4 ? "col-span-2" : ""
                    } ${index > 4 ? "hidden" : ""} ${index === 4} relative`}
                  >
                    <Image src={`/${image.src}`} alt={`Image`} width={300} height={300} className={`object-cover w-full h-full`} />
                    {images.length > 5 && index === 4 && (
                      <div className={`flex justify-center items-center absolute inset-0 bg-[#00000088]`}>
                        <p className="text-white font-medium text-3xl">+{images.length - 4}</p>
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          )}

          <div className="flex justify-between items-center px-3 ">
            {likes.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="grid grid-flow-col [grid-template-columns:repeat(auto-fit,15px)]">
                  {likes.some((like) => like.like_role === "like") && <LikeIcon width="20px" height="20px" border="1px solid var(--off-bg-main)" />}
                  {likes.some((like) => like.like_role === "love") && (
                    <div className="w-5 h-5 p-0.5 bg-[--fb-colors-red] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {likes.some((like) => like.like_role === "care") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {likes.some((like) => like.like_role === "haha") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {likes.some((like) => like.like_role === "sad") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                  {likes.some((like) => like.like_role === "wow") && (
                    <div className="w-5 h-5 p-0.5 bg-[--app-colors-yellow] border border-[--off-bg-main] rounded-full flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-white">
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p>{`${likes.length}`}</p>
              </div>
            )}
            <div className="flex gap-2 items-center">
              {comments.length > 0 && (
                <div className="flex items-center">
                  <p>{`${comments.length}`}</p>
                </div>
              )}
              {shares.length > 0 && (
                <div className="flex items-center">
                  <p>{`${shares.length}`}</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[--off-text-main-off] mx-4 py-1 px-6">
            <LikeButton likes={likes} postId={id} setPostLikes={setPostLikes} />
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

          <div className="flex flex-col">
            <p></p>
          </div>
        </>
      )}
    </section>
  )
}

export default Post
