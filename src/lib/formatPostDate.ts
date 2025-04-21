import { format, differenceInMinutes, differenceInHours, differenceInCalendarDays, isToday, isYesterday, isThisYear } from "date-fns"

export function formatPostDate(date: Date | string): string {
  const now = new Date()
  const dateObj = new Date(date)

  // check if the date is valid
  if (isNaN(dateObj.getTime())) {
    console.error("Invalid date provided to formatPostDate", date)
    return "Invalid Date"
  }

  const minutes = differenceInMinutes(now, dateObj)
  const hours = differenceInHours(now, dateObj)
  const days = differenceInCalendarDays(now, dateObj)

  if (minutes < 1) {
    return "Just now"
  } else if (minutes < 60) {
    // if less than an hour, show X minutes ago
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`
  } else if (hours < 24) {
    // if less than a day, show X hours ago
    return `${hours} hour${hours === 1 ? "" : "s"} ago`
  } else if (isYesterday(dateObj)) {
    // if yesterday, show "Yesterday at HH:MM AM/PM"
    return `Yesterday at ${format(dateObj, "h:mm a")}`
  } else if (days < 7) {
    // if older than yesterday, but still this week, show Xd
    return `${days}d`
  } else if (isThisYear(dateObj)) {
    // if this year but older than 7 days, show "Month day at HH:MM AM/PM"
    return `${format(dateObj, "MMMM d")} at ${format(dateObj, "h:mm a")}`
  } else {
    // if older than this year, show "Month Day at HH:MM AM?PM"
    return `${format(dateObj, "MMMM d, yyyy")} at ${format(dateObj, "h:mm a")}`
  }
}
