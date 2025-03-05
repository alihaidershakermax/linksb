import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${siteConfig.name} - Movie Tracker`,
  description: `${siteConfig.bio} - A personal movie and TV tracking site`,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'