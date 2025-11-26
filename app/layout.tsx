import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyber Safety Club - PM SHRI KV Vijayanarayanam",
  description:
    "Learn about cyber safety, password security, and hacking prevention from PM SHRI Kendriya Vidyalaya Cyber Safety Club",
  generator: "v0.app",
  icons: {
    icon: "https://cdnbbsr.s3waas.gov.in/s3kv0252e06722e50b20dae5701e6a57fb/uploads/2023/04/2023042118.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
