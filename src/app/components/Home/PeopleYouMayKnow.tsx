import React from "react"
import PYMK from "./PYMK"
import PYMKSlider from "./PYMKSlider"
import getPYMK from "@/lib/getPYMK"
import type { PMYK } from "@/lib/definitions"

const PeopleYouMayKnow = async () => {
  const people = await getPYMK()
  // replace with db pymk later
  return (
    <PYMKSlider>
      {people.map((props, index) => {
        return <PYMK {...props} key={props.id} />
      })}
    </PYMKSlider>
  )
}

export default PeopleYouMayKnow
