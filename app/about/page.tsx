import Image from "next/image"
import { Leaf, Heart, Sparkles, Instagram } from "lucide-react"

export const metadata = {
  title: "About Us - Piny Candle",
  description:
    "Learn about Piny Candle's story, our commitment to sustainable materials, handcrafted quality, and customer delight. Discover our passion for creating moments of joy.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainable Materials",
      description:
        "We use eco-friendly soy wax and natural cotton wicks for a clean, long-lasting burn. Our commitment to the environment means choosing renewable resources and biodegradable materials that are safe for your home and family.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Handcrafted Quality",
      description:
        "Every candle is carefully hand-poured with attention to detail and love. Our artisans take pride in creating each piece, ensuring consistent quality and that special touch that only comes from human craftsmanship.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Customer Delight",
      description:
        "We create moments of joy and serenity that light up your everyday experiences. From the first scent to the last flicker, our candles are designed to bring warmth, comfort, and happiness to your space.",
    },
  ]

  const instagramPosts = [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Our candle workshop" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="font-playfair font-bold mb-4">Who We Are</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Crafting moments of warmth and serenity, one candle at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Piny, every candle starts as a spark of inspiration. Founded with a passion for creating beautiful,
                  sustainable home fragrances, we believe in crafting more than just candles – we create experiences
                  that transform your space into a sanctuary of warmth and tranquility.
                </p>
                <p>
                  Our journey began in a small workshop where we experimented with different wax blends and fragrance
                  combinations. What started as a hobby quickly grew into a mission: to bring the highest quality,
                  eco-friendly candles to homes everywhere.
                </p>
                <p>
                  We hand-pour each candle with eco-friendly, non-toxic soy wax and premium fragrance oils sourced from
                  trusted suppliers. Whether you're gifting loved ones or creating your own sanctuary, our candles bring
                  warmth, glow, and serenity to every moment.
                </p>
                <p>
                  Every Piny candle is a testament to our commitment to quality, sustainability, and the belief that the
                  right fragrance can transform any space into something magical.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Hand-pouring candles"
                width={300}
                height={300}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Natural ingredients"
                width={300}
                height={300}
                className="rounded-xl shadow-lg mt-8"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Quality control"
                width={300}
                height={300}
                className="rounded-xl shadow-lg -mt-8"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Workshop tools"
                width={300}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-[var(--blush)]/20 to-[var(--light-pink)]/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing materials to crafting each candle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--light-pink)]/20 rounded-full text-[var(--deep-pink)] mb-6">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 mb-6">
              Get a behind-the-scenes look at our candle-making process and see how our products bring joy to homes
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--deep-pink)] hover:text-[var(--medium-pink)] transition-colors duration-300"
            >
              <Instagram size={20} />
              @pinycandle
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden rounded-lg group"
              >
                <Image
                  src={post || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={24}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--deep-pink)] to-[var(--medium-pink)] text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair mb-4">Ready to Light Up Your Moments?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discover our handcrafted collection and find the perfect candle to transform your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/candles"
              className="bg-white text-[var(--deep-pink)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Browse Collection
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[var(--deep-pink)] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
