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
  email: string
  date_of_birth: Date
  bio: string
  createdAt: Date
  updatedAt?: Date
  // authored_posts?: postProps[]
  likes: like[]
  sent_friend_requests: FriendRequests[]
  received_friend_requests: FriendRequests[]
  // sent_friends: friendship[]
  // received_friends: friendship[]
  pages?: Page[]
  // comments: CommentProps[]
  shares?: Share[]
  pageFollows?: Page[]
  groupsIn?: Group[]
  story?: StoryProps[]
}

export type Group = {
  id: string
  name: string
  profileLink: string
  profileImage: string
  members: User[]
  createdAt: Date
}

export type Page = {
  id: string
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
  like_role?: "LIKE" | "LOVE" | "HAHA" | "CARE" | "SAD" | "WOW" | "ANGRY"
  liker: User
  post?: postProps
  comment?: CommentProps
}

export type CommentProps = {
  id: string
  author: User
  authorId: String
  postId: string
  postAuthorId: string
  createdAt: Date
  content?: string
  likes: like[]
  images?: Image[]
  parent?: CommentProps
  parentId?: string
  updatedAt?: Date
  replies?: CommentProps[]
}

export type Share = {
  id: string
  postId: string
  author: User
  createdAt: Date
}

export type Image = {
  id: string
  src: string
  text?: string
  createdAt?: Date
  postId?: string
}

export type postProps = {
  id: string
  content: string
  createdAt: Date
  updatedAt?: Date
  authorId: string
  author: User
  audience: Audience
  likes: like[]
  comments: CommentProps[]
  shares: Share[]
  images?: Image[]
  group?: Group
  page?: Page
}

export type StoryProps = {
  id: string
  createdAt: Date
  authorId: string
  author: User
  likes: like[]
  images: Image[]
  live: boolean
  group?: Group
  page?: Page
}

export enum Audience {
  "FRIENDS",
  "PUBLIC",
  "PRIVATE",
  "SPECIFIC_FRIENDS",
  "FRIENDS_EXCEPT",
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
