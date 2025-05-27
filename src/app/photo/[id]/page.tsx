import React from "react"
import Image from "next/image"

const Photo = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <div className={`flex justify-center items-center min-h-screen w-full`}>
      <Image src={`/${params.id}`} alt="image" width={1000} height={1000} />
    </div>
  )
}

export default Photo
