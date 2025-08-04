import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileOrderCTA from "@/components/mobile-order-cta"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Piny Candle - Handcrafted Candles That Light Up Your Moments",
  description:
    "Discover our handcrafted collection of premium soy candles in soft, romantic hues. Hand-poured with eco-friendly materials and premium fragrance oils.",
  openGraph: {
    title: "Piny Candle - Handcrafted Candles",
    description: "Premium handcrafted candles that light up your moments",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-poppins antialiased`}>
        <Header />
        {children}
        <Footer />
        <MobileOrderCTA />
      </body>
    </html>
  )
}
