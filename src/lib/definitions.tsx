export type PMYK = {
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
  author: user
  variant: "like" | "love" | "haha" | "care" | "sad" | "wow"
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
