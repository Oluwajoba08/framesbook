import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Framesbook Marketplace",
  description: "Buy and sell on Framesbook, the world's largest information and communication platform.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
