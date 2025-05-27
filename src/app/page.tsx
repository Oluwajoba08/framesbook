import React, { Suspense } from "react"
import BookmarksUI from "./components/Bookmarks/Bookmarks"
import RightSidebar from "./components/RightSidebar"
import NewPost from "./components/Home/NewPost/NewPost"
import Stories from "./components/Home/Stories"
import StorySkeleton from "./components/skeleton/StorySkeleton"
import PostSkeleton from "./components/skeleton/PostSkeleton"
import Posts from "./components/Home/Posts"
import PeopleYouMayKnow from "./components/Home/PeopleYouMayKnow"
import { getPosts } from "@/lib/getPosts"
import { getStories } from "@/lib/getStories"
// import { postProps, StoryProps } from "@/lib/definitions"
// import { getCurrentUserId } from "@/utils/supabase/server"

export default async function Home() {
  // const currentUserId = await getCurrentUserId()
  const postData = await getPosts()
  const storyData = await getStories()

  // const postRes = await fetch("http://localhost:8000/posts")
  // const storyRes = await fetch("http://localhost:8000/stories")
  // const postData: postProps[] = await postRes.json()
  // const storyData: StoryProps[] = await storyRes.json()


  return (
    <main className={`relative min-h-screen bg-[--bg-main] flex justify-center p-2`}>
      <RightSidebar />
      <div className="flex flex-col items-center gap-5 py-[72px]">
        <Suspense fallback={<StorySkeleton />}>
          <Stories stories={storyData} />
        </Suspense>
        <div className="min-[735px]:w-[calc(100vw-278px)] lg:w-auto flex justify-center">
          <NewPost page="normal" firstName="Oluwajoba" />
        </div>
        <Suspense fallback={<PostSkeleton />}>
          <Posts posts={postData} authorId={null} /> {/* Add session as prop later */}
        </Suspense>
        <PeopleYouMayKnow /> {/*Dynamically inject later */}
      </div>
      <BookmarksUI />
      <div className="hidden min-[735px]:flex lg:hidden w-[260px] h-full"></div>
    </main>
  )
}
