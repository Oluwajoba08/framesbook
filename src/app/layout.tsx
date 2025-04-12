import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NewMessage from "./components/NewMessage"
import Navbar from "./components/Navbar"
import ThemeProvider from "./providers/ThemeProvider"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { FeelingProvider } from "@/app/providers/FeelingProvider"
import ConditionalLayout from "./components/ConditionalLayout"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Framesbook",
  description: "Welcome to Framesbook, the world's largest information and communication platform.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const supabase = createClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (pathname === "/login" && (error || !data?.user)) {
  //   redirect("/login")
  // }

  return (
    <ThemeProvider>
      <FeelingProvider>
        <html lang="en">
          <body className={inter.className}>
            <Toaster />
            <ConditionalLayout />
            {children}
          </body>
        </html>
      </FeelingProvider>
    </ThemeProvider>
  )
}
