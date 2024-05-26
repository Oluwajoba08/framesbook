import React, { Suspense } from "react"
import StoryNavbar from "@/app/components/StoryNavbar"
import StoryPageSkeleton from "@/app/components/skeleton/StoryPageSkeleton"
import StoryContent from "@/app/components/StoryContent"

const Story = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <StoryNavbar />
      <Suspense fallback={<StoryPageSkeleton />}>
        <StoryContent />
      </Suspense>
    </>
  )
}

export default Story
