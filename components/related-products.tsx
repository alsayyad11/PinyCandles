import Link from "next/link"
import Image from "next/image"
import { candles } from "@/lib/candle-data"

interface RelatedProductsProps {
  currentCandleId: string
}

export default function RelatedProducts({ currentCandleId }: RelatedProductsProps) {
  const relatedCandles = candles.filter((candle) => candle.id !== currentCandleId).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="font-playfair text-center mb-12">You Might Also Like</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedCandles.map((candle) => (
            <div key={candle.id} className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={candle.images[0] || "/placeholder.svg"}
                    alt={candle.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {candle.discountPercentage && (
                  <div className="absolute top-4 left-4 bg-[var(--deep-pink)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{candle.discountPercentage}%
                  </div>
                )}
              </div>

              <div className="p-6">
                <h4 className="font-playfair mb-2">{candle.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  {candle.discountPrice ? (
                    <>
                      <span className="text-gray-400 line-through text-sm">EGP {candle.price}</span>
                      <span className="text-[var(--deep-pink)] font-semibold text-lg">EGP {candle.discountPrice}</span>
                    </>
                  ) : (
                    <span className="text-[var(--deep-pink)] font-semibold text-lg">EGP {candle.price}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4">{candle.tagline}</p>

                <Link href={`/candles/${candle.id}`} className="btn-secondary w-full text-center block">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
