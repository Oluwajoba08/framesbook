import React from "react"
import PYMK from "./PYMK"
import PYMKSlider from "./PYMKSlider"
import getPYMK from "@/lib/getPYMK"
import type { PMYK } from "@/lib/definitions"

const PeopleYouMayKnow = async () => {
  const people = await getPYMK()
  return (
    <PYMKSlider>
      {people.map(({ id, image, link, mutualFriends, name }, index) => {
        return <PYMK id={id} image={image} link={link} mutualFriends={mutualFriends} name={name} key={id} />
      })}
    </PYMKSlider>
  )
}

export default PeopleYouMayKnow
