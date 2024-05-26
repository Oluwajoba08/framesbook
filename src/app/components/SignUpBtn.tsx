import React from "react"
import { useFormStatus } from "react-dom"

const SignUpBtn = ({ loading, label }: { loading: string; label: string }) => {
  const pending = useFormStatus()

  return (
    <button disabled={Boolean(pending)} type="submit" className={`bg-[#2abe32] disabled:bg-[#a1eca4] py-3 px-4 font-bold self-stretch rounded-md text-white`}>
      {pending ? loading : label}
    </button>
  )
}

export default SignUpBtn
