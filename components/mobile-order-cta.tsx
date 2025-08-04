"use client"

import { Instagram } from "lucide-react"

export default function MobileOrderCTA() {
  const handleInstagramOrder = () => {
    window.open("https://instagram.com/direct/new/", "_blank")
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg">
      <div className="p-4">
        <button
          onClick={handleInstagramOrder}
          className="w-full bg-[var(--deep-pink)] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#9d2f7d]"
        >
          <Instagram size={20} />
          Order via Instagram
        </button>
      </div>
    </div>
  )
}
