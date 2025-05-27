import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import ThemeProvider from "./providers/ThemeProvider"
import ConditionalLayout from "./components/ConditionalLayout"
// import { AuthProvider } from "./providers/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Framesbook",
  description: "Welcome to Framesbook, the world's largest information and communication platform.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ConditionalLayout />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
