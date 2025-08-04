import Link from "next/link"
import { Instagram, Facebook, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--light-pink)]">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient font-playfair mb-3 block">
              Piny
            </Link>
            <p className="text-gray-600 mb-4">Light up your moments</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Handcrafted candles made with love, premium soy wax, and carefully selected fragrances to create the
              perfect ambiance for your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[var(--deep-pink)] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/candles"
                  className="text-gray-600 hover:text-[var(--deep-pink)] transition-colors duration-300"
                >
                  Candles
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[var(--deep-pink)] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[var(--deep-pink)] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/piny_candle/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--light-pink)]/20 rounded-full flex items-center justify-center text-[var(--deep-pink)] hover:bg-[var(--deep-pink)] hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/groups/1657231191355035/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--light-pink)]/20 rounded-full flex items-center justify-center text-[var(--deep-pink)] hover:bg-[var(--deep-pink)] hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            © 2025 Piny Candle – All Rights Reserved. Made with <Heart size={16} className="text-[var(--deep-pink)]" />{" "}
            for candle lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
