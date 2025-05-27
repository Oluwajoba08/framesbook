import { StoryProps } from "./definitions"

export const getStories = async () => {
  try {
    console.log("Fetching stories")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch("http://localhost:8000/stories")
    const data: StoryProps[] = await res.json()
    console.log("Fetch completed")

    return data
  } catch (error) {
    console.error("Failed to fetch stories: ", error)
    throw new Error("Failed to fetch stories")
  }
}
