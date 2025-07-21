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
        {/* Floating WhatsApp Icon - Global */}
        <a
          href="https://wa.me/9515047239"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 bottom-6 right-6 bg-[#25D366] rounded-full shadow-lg p-2.5 flex items-center justify-center hover:bg-[#1ebe57] hover:scale-105 transition-all duration-300"
          style={{ boxShadow: '0 4px 20px 0 rgba(37, 211, 102, 0.4)' }}
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          {/* Professional WhatsApp Icon from Flaticon (Pixel Perfect) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white w-6 h-6"
          >
            <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.4zM12.045 21.785h-.007c-1.777 0-3.506-.48-5.02-1.379l-.36-.214-3.74.98 1.005-3.645-.235-.374c-.99-1.567-1.51-3.394-1.51-5.26.003-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898 1.866 1.869 2.893 4.352 2.89 6.988-.002 5.45-4.436 9.885-9.885 9.885l-.014-.005zm5.426-7.404c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.366.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </a>
        {/* Attribution Comment for Flaticon */}
        {/* WhatsApp icons created by Pixel perfect - Flaticon: https://www.flaticon.com/free-icons/whatsapp */}
      </body>
    </html>
  )
}
