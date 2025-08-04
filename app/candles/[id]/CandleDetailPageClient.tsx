"use client"
import Link from "next/link"
import { candles } from "@/lib/candle-data"
import { Star, Instagram, Heart, Clock, Weight, Ruler } from "lucide-react"
import CandleCarousel from "@/components/candle-carousel"
import RelatedProducts from "@/components/related-products"
import { notFound } from "next/navigation"

interface Props {
  params: { id: string }
}

export default function CandleDetailPageClient({ params }: Props) {
  const candle = candles.find((c) => c.id === params.id)

  if (!candle) {
    notFound()
  }

  const handleInstagramOrder = () => {
    const message = `Hi! I'm interested in ordering the ${candle.name} candle (EGP ${candle.discountPrice || candle.price}). Can you help me with the order?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://instagram.com/direct/new/?text=${encodedMessage}`, "_blank")
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ))
  }

  return (
    <main className="pt-20">
      {/* Breadcrumbs */}
      <div className="container-custom py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-[var(--deep-pink)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/candles" className="hover:text-[var(--deep-pink)]">
            Candles
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{candle.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <div>
              <CandleCarousel images={candle.images} name={candle.name} />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-playfair text-3xl lg:text-4xl mb-4">{candle.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                {candle.discountPrice ? (
                  <>
                    <span className="text-gray-400 line-through text-lg">EGP {candle.price}</span>
                    <span className="text-[var(--deep-pink)] font-bold text-2xl">EGP {candle.discountPrice}</span>
                    <span className="bg-[var(--deep-pink)] text-white px-2 py-1 rounded text-sm">
                      Save EGP {candle.price - candle.discountPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-[var(--deep-pink)] font-bold text-2xl">EGP {candle.price}</span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">{renderStars(candle.rating)}</div>
                <span className="text-gray-600 text-sm">({candle.rating}/5)</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">{candle.description}</p>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-playfair text-lg mb-4">Specifications</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-[var(--medium-pink)] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Burn Time</div>
                    <div className="font-medium">{candle.specs.burnTime}</div>
                  </div>
                  <div className="text-center">
                    <Weight className="w-6 h-6 text-[var(--medium-pink)] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Weight</div>
                    <div className="font-medium">{candle.specs.weight}</div>
                  </div>
                  <div className="text-center">
                    <Ruler className="w-6 h-6 text-[var(--medium-pink)] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Size</div>
                    <div className="font-medium">{candle.specs.size}</div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="font-playfair text-lg mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {candle.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-[var(--light-pink)]/20 text-[var(--deep-pink)] px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleInstagramOrder}
                  className="btn-primary flex items-center justify-center gap-2 flex-1"
                >
                  <Instagram size={20} />
                  Order via Instagram
                </button>
                <button className="btn-secondary flex items-center justify-center gap-2">
                  <Heart size={20} />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentCandleId={candle.id} />
    </main>
  )
}
