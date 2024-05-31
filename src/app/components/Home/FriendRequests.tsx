import React from "react"
import FriendReq from "./FriendReq"
import getFR from "@/lib/getFR"
import FRSlider from "./FRSlider"

const FriendRequests = async () => {
  const people = await getFR()
  return (
    <FRSlider>
      {people.map(({ id, image, link, mutualFriends, name }, index) => {
        return <FriendReq id={id} image={image} link={link} mutualFriends={mutualFriends} name={name} key={id} />
      })}
    </FRSlider>
  )
}

export default FriendRequests
