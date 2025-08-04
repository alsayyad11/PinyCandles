import Link from "next/link"
import Image from "next/image"
import { Leaf, Heart, Sparkles } from "lucide-react"

export default function AboutPreview() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Materials",
      description: "We use eco-friendly soy wax and natural cotton wicks for a clean, long-lasting burn.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Handcrafted Quality",
      description: "Every candle is carefully hand-poured with attention to detail and love.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Customer Delight",
      description: "We create moments of joy and serenity that light up your everyday experiences.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[var(--blush)]/20 to-[var(--light-pink)]/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Piny, every candle starts as a spark of inspiration. We believe in creating more than just candles – we
              craft experiences that transform your space into a sanctuary of warmth and tranquility.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We hand-pour with eco-friendly, non-toxic soy wax and premium fragrance oils. Whether gifting loved ones
              or creating your own sanctuary, our candles bring warmth, glow, and serenity to every moment.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Artisan crafting candles"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md text-[var(--deep-pink)] mb-4">
                {value.icon}
              </div>
              <h3 className="font-playfair text-xl mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
