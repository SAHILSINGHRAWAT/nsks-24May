import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ClientLoaderWrapper from "@/components/ClientLoaderWrapper"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NSKS Cable Trays | High-Quality Cable Management Solutions",
  description:
    "Leading manufacturer of cable trays, raceways, and cable management systems for industrial, commercial, and residential applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full max-w-full overflow-x-hidden`}>
        <ClientLoaderWrapper>
          <Header />
          {children}
          <Footer />
        </ClientLoaderWrapper>
        <Toaster />
      </body>
    </html>
  )
}
