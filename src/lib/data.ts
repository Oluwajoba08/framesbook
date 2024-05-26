import { prisma } from "@/app/db"

export async function createPost(content: string, images?: string) {
  await prisma.posts.create({
    data: {
      content,
      // images
    },
  })
}
export async function getPosts() {
  const data = await prisma.posts.findMany({
    where: {
      author_id: 9,
    },
    select: {
      content: true,
      created_at: true,
      author_id: true,
      // author: true,
      // images: true,
      // likes: true,
      // comments: true,
      // shares: true,
      // group: true,
      // page: true,
    },
  })
}
export async function updatePost(id: string, content: string, images: string) {
  const data = await prisma.posts.update({
    where: { id: Number(id) },
    data: { content /*images*/ },
  })
}
export async function deletePost(id: string) {
  const data = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  })
}

// export async function getProfile(id: string) {
//   const data = await prisma.user.findUnique({
//     where: {
//       phone: "id",
//     },
//     include: {
//       // profile: true,
//       // authored_posts: true,
//       // friends: true
//     },
//   })
// }

// export async function getFriends(id: string) {
//   const data = await prisma.user_friend.findMany({
//     where: {
//       friend_to_id: Number(id)
//     },
//   })
// }
// export async function addFriend(){
//   const data = await prisma.user_friend.create({
//     data: {

//     }
//   })
// }
// export async function deleteFriend(){
//   const data = await prisma.user_friend.delete({
//     where: {

//     }
//   })
// }
// export async function getFriendRequests(id: string, ){
//   const data = await prisma.user_friend.findMany({
//     where: {

//     }
//   })
// }
// export async function sendFriendRequest(id: string, ){
//   const data = await prisma.user_friend.create({
//     data: {
//
// }
//   })
// }
// export async function acceptFriendRequest(id: string, ){
//   const data = await prisma.users.update({
//     data: {

//     },
//     where: {

//     }
//   })
// }
// export async function deleteFriendRequest(id: string, ){
//   const data = await prisma.users.update({
//     data: {

//     },
//     where: {

//     }
//   })
// }

// export async function likePost(id: string, role: string) {
//   const data = await prisma.like.create({
//     data: {
//       post_id: Number(id),
//       liker_id: Number(id),
//       like_role: role
//     },
//   })
// }
// export async function likeComment(id: string, role: string) {
//   const data = await prisma.like.create({
//     data: {
//       comment_id: Number(id),
//       liker_id: Number(id),
//       like_role: role
//     },
//   })
// }
// export async function likeReply(id: string, role: string) {
//   const data = await prisma.like.create({
//     data: {
//       reply_id: Number(id),
//       liker_id: Number(id),
//       like_role: role
//     },
//   })
// }
// export async function unLikePost(id: string) {
//   const data = await prisma.like.delete({
//     where: { post_id: 435 },
//   })
// }
// export async function unLikeComment(id: string) {
//   const data = await prisma.like.delete({
//     where: { comment_id: 435 },
//   })
// }
// export async function unLikeReply(id: string) {
//   const data = await prisma.like.delete({
//     where: { reply_id: 435 },
//   })
// }
// export async function deleteComment(id: string) {
//   const data = await prisma.comments.delete({
//     where: {
//       id: Number(id)
//     }
//   })
// }
// export async function deleteReply(id: string) {
//   const data = await prisma.replies.delete({
//     where: {
//       id: Number(id)
//     }
//   })
// }
// export async function deletePage(id: string) {
//   const data = await prisma.pages.delete({
//     where: {
//       id: Number(id)
//     }
//   })
// }
// export async function deleteGroup(id: string) {
//   const data = await prisma.groups.delete({
//     where: {
//       id: Number(id),
//     },
//   })
// }
