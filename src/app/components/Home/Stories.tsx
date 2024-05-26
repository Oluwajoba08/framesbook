import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Story from './Story'
import getStories from '@/lib/getStories'
import StorySlider from './StorySlider'

const Stories = async () => {
  
  const stories = await getStories();

  return (
    <StorySlider>
      {stories.map(({avatar, coverImage, id, live, username}, index) =>{
        return(
          <Story 
          avatar={avatar} coverImage={coverImage} id={id} live={live} 
          username={username} key={id} profileLink='' />
        )
      })} 
    </StorySlider>
  )
}

export default Stories