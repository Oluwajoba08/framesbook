import React, { Suspense } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { getPosts } from "@/lib/data"
import BookmarksUI from "./components/Bookmarks/Bookmarks"
import RightSidebar from "./components/RightSidebar"
import NewPost from "./components/Home/NewPost/NewPost"
import Stories from "./components/Home/Stories"
import StorySkeleton from "./components/skeleton/StorySkeleton"
import PostSkeleton from "./components/skeleton/PostSkeleton"
import Posts from "./components/Home/Posts"
import PeopleYouMayKnow from "./components/Home/PeopleYouMayKnow"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
// import EmptyStory from "./components/Home/EmptyStory"

// TimeAgo.addDefaultLocale(en)

export default async function Home() {
  // const supabase = await createClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }
  // const posts = await getPosts();

  return (
    <main className={`relative min-h-screen bg-[--bg-main] flex justify-center p-2`}>
      <RightSidebar />
      <div className="flex flex-col items-center gap-5 py-[72px]">
        <Suspense fallback={<StorySkeleton />}>
          <Stories />
        </Suspense>
        {/* <EmptyStory /> */}
        <div className="min-[735px]:w-[calc(100vw-278px)] lg:w-auto flex justify-center">
          <NewPost page="normal" firstName="Oluwajoba" />
        </div>
        <Suspense fallback={<PostSkeleton />}>
          <Posts /> {/* Add session as prop later */}
        </Suspense>
        <PeopleYouMayKnow /> {/*Dynamically inject later */}
      </div>
      <BookmarksUI />
      <div className="hidden min-[735px]:flex lg:hidden w-[260px] h-full"></div>
    </main>
  )
}
