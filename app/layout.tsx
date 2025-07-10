import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import CustomCursor from "@/components/CustomCursor"
import MovingLines from "@/components/MovingLines"
import ParallelLines from "@/components/ParallelLines"
import StreamingLines from "@/components/StreamingLines"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anshul Shrivastava - Software Engineer | DevOps | Cloud Engineer",
  description:
    "Results-driven engineer with DevOps, Cloud & Full-Stack skills. Portfolio showcasing projects, skills, and experience.",
  keywords: "Software Engineer, DevOps, Cloud Engineer, Full Stack Developer, React, Node.js, Python",
  authors: [{ name: "Anshul Shrivastava" }],
  openGraph: {
    title: "Anshul Shrivastava - Software Engineer",
    description: "Results-driven engineer with DevOps, Cloud & Full-Stack skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-amber-50 via-white to-gray-50 text-gray-900 overflow-x-hidden`}
      >
        <CustomCursor />
        <MovingLines />
        <ParallelLines />
        <StreamingLines />
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
