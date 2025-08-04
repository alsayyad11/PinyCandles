import type { Metadata } from "next"
import { candles } from "@/lib/candle-data"
import CandleDetailPageClient from "./CandleDetailPageClient"

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return candles.map((candle) => ({
    id: candle.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const candle = candles.find((c) => c.id === params.id)

  if (!candle) {
    return {
      title: "Candle Not Found - Piny Candle",
    }
  }

  return {
    title: `${candle.name} - Piny Candle`,
    description: candle.description,
    openGraph: {
      title: `${candle.name} - Piny Candle`,
      description: candle.description,
      images: [candle.images[0]],
    },
  }
}

export default function CandleDetailPage({ params }: Props) {
  return <CandleDetailPageClient params={params} />
}
