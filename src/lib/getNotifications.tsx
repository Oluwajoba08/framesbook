import React from "react"

const getNotifications = () => {
  return [
    {
      id: 5,
      username: "Broda Shaggi",
      coverImage: "shaggi1.jpg",
      title: "commented on your photo.",
      time: "a week ago",
      read: false,
    },
    {
      id: 4,
      username: "Kelvin James",
      coverImage: "kelvin.jpg",
      title: "liked your photo.",
      time: "a month ago",
      read: false,
    },
    {
      id: 3,
      username: "Nexus",
      coverImage: "bank-ad.jpeg",
      title: "shared on your photo.",
      time: "a year ago",
      read: false,
    },
    {
      id: 2,
      username: "Rasheedat Ajibade",
      coverImage: "rash.jpg",
      title: "reacted to your photo.",
      time: "a day ago",
      read: true,
    },
    {
      id: 1,
      username: "Samson Ejeh",
      coverImage: "football-ad.jpg",
      title: "commented on your photo.",
      time: "30 minutes ago",
      read: true,
    },
    {
      id: 0,
      username: "",
      coverImage: "framesbook.svg",
      title: "Welcome to Framesbook! Tap here to find people you know and add them as friends.",
      time: "3 minutes ago",
      read: false,
    },
  ]
}

export default getNotifications
