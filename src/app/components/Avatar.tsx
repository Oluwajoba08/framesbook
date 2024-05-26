"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const Avatar = () => {
  const [imageProvided, setImageProvided] = useState(false)
  const [userName, setUserName] = useState("John Smith")

  return (
    imageProvided ? 
    <Image src={'/test-img.jpg'} alt='profile-image' /> 
    : (<div className='bg-purple-700 p-2 rounded-full aspect-square w-9 flex justify-center items-center text-white'>
        {userName[0]}
    </div>)

  )
}

export default Avatar