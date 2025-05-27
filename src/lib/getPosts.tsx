// import { Audience, type Comment, type User, type postProps } from "@/lib/definitions"
// : postProps[]

export const getPosts = async () => {
  try {
    console.log("Fetching posts")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch("http://localhost:8000/posts")
    const data = await res.json()
    console.log("Fetch completed")

    return data
  } catch (error) {
    console.error("Failed to fetch posts: ", error)
    throw new Error("Failed to fetch posts")
  }
}

export const getAllUsers = async () => {
  try {
    console.log("Fetching users")
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch("http://localhost:8000/users")
    const data = res.json()
    console.log("Fetch completed")

    return data
  } catch (error) {
    console.error("Failed to fetch users: ", error)
    throw new Error("Failed to fetch users")
  }
}

// const getAllReplies = () : Comment[] => {
//   return [
//     {

//     }
//   ]
// }

// export const getPostRootComments = (id: string): Comment[] => {
//   const postComments = getAllComments().filter(({ postId }) => postId === id)
//   const postRootComments = postComments.filter(({ parentId }) => parentId === undefined)
//   return postRootComments
// }

// export const getUserComments = (userId: string): Comment[] => {
//   const allComments = getAllComments()
//   const userComments = allComments.filter(({ authorId }) => authorId === userId)
//   return userComments
// }

// export default getPosts
