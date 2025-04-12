export type PMYK = {
  id: string
  name: string
  image: string
  mutualFriends: mutualFriendsProps[]
  link: string
}

export type FriendRequests = {
  id: string
  name: string
  image: string
  mutualFriends: mutualFriendsProps[]
  link: string
}

export type mutualFriendsProps = {
  _id: string
  _name: string
  _image: string
}

export type user = {
  id: string
  name: string
  profileImage: string
  coverImage: string
  profileLink: string
  friends: user[]
}

export type group = {
  name: string
  profileLink: string
  profileImage: string
  members: user[]
  createdAt: Date
}

export type like = {
  id: String
  liker_id: String
  post_id?: String
  comment_id?: String
  reply_id?: String
  like_role: "like" | "love" | "haha" | "care" | "sad" | "wow"
  liker: user
  post?: postProps
  author: user
  comment?: comment
  reply?: comment
}

export type comment = {
  author: user
  content: string
  likes: like[]
  replies: comment[]
  images?: string[]
}

export type share = {
  author: user
}

export type image = {
  id: string
  src: string
}

export type postProps = {
  id: string
  content: string
  createdAt: Date
  author: user
  audience: "public" | "friends" | "friends of friends"
  likes: like[]
  comments: comment[]
  shares: share[]
  images?: image[]
  group?: group
}

export type feelingsType = {
  id: string
  type: string
  emoji: string
}

export type ApiResponse<T = any> = {
  success: boolean
  message?: string
  data?: T
  errors?: Record<string, string>
}
