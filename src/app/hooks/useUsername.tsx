// import { useState, useEffect } from "react"
// import { createClient } from "@/utils/supabase/server"
// import { prisma } from "@/app/db"

// const useUsername = () => {
//   const [userName, setUserName] = useState("")
//   const supabase = await createClient()

//   useEffect(() => {
//     const getUserName = async () => {
//       try {
//         const { data, error } = await supabase.auth.getUser()
//         if (data.user) {
//           const userData = await prisma.user.findUnique({
//             where: {
//               email: data.user.email,
//             },
//           })
//           if (userData) {
//             setUserName(userData.name)
//           }
//         }
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getUserName()
//     return () => {}
//   }, [])

//   return userName
// }

// export default useUsername
