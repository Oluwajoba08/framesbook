"use client"

import React from "react"
import Story from "./Story"
import StorySlider from "./StorySlider"
import EmptyStory from "./EmptyStory"
import { StoryProps } from "@/lib/definitions"

const Stories = ({ stories }: { stories: StoryProps[] }) => {
  if (!stories) return <EmptyStory />

  return (
    <StorySlider>
      {stories.map((story, index) => {
        return <Story key={story.id} {...story} />
      })}
    </StorySlider>
  )
}

export default Stories
