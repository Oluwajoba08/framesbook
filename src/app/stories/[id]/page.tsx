import React, { Suspense } from "react"
import StoryNavbar from "@/app/components/StoryNavbar"
import StoryPageSkeleton from "@/app/components/skeleton/StoryPageSkeleton"
import StoryContent from "@/app/components/StoryContent"

const Story = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <>
      <StoryNavbar />
      <Suspense fallback={<StoryPageSkeleton />}>
        <StoryContent id={params.id} />
      </Suspense>
    </>
  )
}

export default Story
