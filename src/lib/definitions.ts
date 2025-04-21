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

export type User = {
  id: string
  name: string
  profileImage: string
  coverImage: string
  profileLink: string
  friends: User[]
}

export type Group = {
  name: string
  profileLink: string
  profileImage: string
  members: User[]
  createdAt: Date
}

export type Page = {
  name: string
  profileLink: string
  profileImage: string
  followers: User[]
  createdAt: Date
}

export type like = {
  id: String
  liker_id: String
  post_id?: String
  comment_id?: String
  like_role: "like" | "love" | "haha" | "care" | "sad" | "wow"
  liker: User
  post?: postProps
  author: User
  comment?: Comment
}

export type Comment = {
  id: string
  author: User
  authorId: String
  content?: string
  likes: like[]
  images?: string[]
  parent?: Comment
  postId: string
  createdAt: Date
  updatedAt: Date
}

export type Share = {
  author: User
  createdAt: Date
}

export type Image = {
  id: string
  src: string
}

export type postProps = {
  id: string
  content: string
  createdAt: Date
  updatedAt?: Date
  authorId: string
  author: User
  audience: "public" | "friends" | "friends of friends"
  likes: like[]
  comments: Comment[]
  shares: Share[]
  images?: Image[]
  group?: Group
  page?: Page
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
