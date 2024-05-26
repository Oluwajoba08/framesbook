import React from "react"
import { useFormStatus } from "react-dom"

const LoginBtn = ({ loading, label }: { loading: string; label: string }) => {
  const pending = useFormStatus()

  return (
    <button disabled={Boolean(pending)} type="submit" className={`bg-[--fb-color] disabled:bg-blue-200 py-3 px-4 font-bold self-stretch rounded-md text-white`}>
      {pending ? loading : label}
    </button>
  )
}

export default LoginBtn
