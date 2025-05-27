import { prisma } from "@/app/db"
import { like } from "./definitions"

export async function createPost(userId: string, text: string, image?: string) {
  await prisma.posts.create({
    data: {
      content: text,
      images: image,
      author_id: userId,
    },
  })
}
//check fn at actions/postActions

export async function getPosts(currentUserId: string) {
  try {
    const data = await prisma.posts.findMany({
      where: {
        id: currentUserId,
      },
      select: {
        content: true,
        created_at: true,
        author_id: true,
        author: true,
        images: true,
        likes: true,
        comments: true,
        shares: true,
        group: true,
        page: true,
      },
    })

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getProfilePosts(id: string) {
  try {
    const data = await prisma.posts.findMany({
      where: {
        author_id: id,
      },
      select: {
        content: true,
        created_at: true,
        author_id: true,
        author: true,
        images: true,
        likes: true,
        comments: true,
        shares: true,
        group: true,
        page: true,
      },
    })

    return data
  } catch (error) {
    console.error(`Failed to fetch posts: ${error}`)
  }
}

export async function updatePost(postId: string, content: string, images: string) {
  try {
    const data = await prisma.posts.update({
      where: { id: postId },
      data: { content /*images*/ },
    })
    if (data) {
      return {
        success: true,
        message: `Post updated successful`,
      }
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: `Failed to update post: ${err}`,
    }
  }
}

export async function deletePost(postId: string) {
  try {
    const data = await prisma.posts.delete({
      where: {
        id: postId,
      },
    })
    if (data) {
      return {
        success: true,
        message: `Post deleted successfully`,
      }
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: `Failed to delete post: ${err}`,
    }
  }
}

export async function getComments(setLoading: React.Dispatch<React.SetStateAction<boolean>>, postId: string) {
  setLoading(true)
  try {
    const data = await prisma.posts.findMany({
      where: {
        id: postId,
      },
      include: {
        likes: true,
        author: true,
        _count: true,
      },
    })

    if (data) {
      setLoading(false)
      return data
    }
  } catch (err) {
    console.error(err)
    return {}
  }
}

export async function deleteComment(commentId: string) {
  try {
    const data = await prisma.comments.delete({
      where: {
        id: commentId,
      },
    })
    return {
      success: true,
      message: `Comment deleted`,
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: `Failed to delete comment: ${err}`,
    }
  }
}

export async function getProfile(id: string) {
  try {
    // const data = await prisma.user.findUnique({
    //   where: {
    //     id: id,
    //   },
    //   include: {
    //     // profile: true,
    //     // authored_posts: true,
    //     // friends: true
    //   },
    // })
  } catch (err) {}
}

export async function getFriends(id: string) {
  try {
    // const data = await prisma.user_friend.findMany({
    //   where: {
    //     friend_to_id: Number(id)
    //   },
    // })
  } catch (err) {}
}

export async function addFriend() {
  try {
    // const data = await prisma.user_friend.create({
    //   data: {

    //   }
    // })
    return {
      success: true,
      message: `User is now a friend`,
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: `Failed to delete comment: ${err}`,
    }
  }
}
export async function unfriend() {
  try {
    // const data = await prisma.user_friend.delete({
    //   where: {
    //   }
    // })
  } catch (err) {}
}
export async function getFriendRequests(id: string) {
  try {
    // const data = await prisma.user_friend.findMany({
    //   where: {
    //   }
    // })
  } catch (err) {}
}
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

export async function likePost(postId: string, role: string, likerId: string) {
  // const data = await prisma.like.create({
  //   data: {
  //     post_id: postId,
  //     liker_id: likerId,
  //     like_role: role,
  //   },
  // })
  console.log("post liked")
}

export async function unLikePost(postId: string, userId: string) {
  // const data = await prisma.like.delete({
  //   where: {
  //     AND: [{ liker_id: userId }, { post_id: postId }],
  //   },
  // })
  console.log("post unliked")
}

export async function getLikes(id: string) {
  // const data = await prisma.likes.findMany({
  //   where: {
  //     post_id: id,
  //   },
  // })
  const data: like[] = []
  return data
}

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
