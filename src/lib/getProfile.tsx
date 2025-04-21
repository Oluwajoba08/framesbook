import React from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getProfile = async (id: string) => {
  const posts = await prisma.posts.findMany({
    where: {
      author_id: Number(id),
    },
    // select: {

    // }
  })
}

// getProfile().then(async () =>{
//     await prisma.$disconnect()
// }).catch(async (e) =>{
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })
