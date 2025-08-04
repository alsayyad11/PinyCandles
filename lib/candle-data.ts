export interface Candle {
  id: string
  name: string
  images: string[]
  description: string
  ingredients: string[]
  price: number
  discountPrice?: number
  discountPercentage?: number
  specs: {
    burnTime: string
    weight: string
    size: string
  }
  tagline: string
  rating: number
}

export const candles: Candle[] = [
  {
    id: "rose-garden",
    name: "Rose Garden",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Immerse yourself in the delicate beauty of a blooming rose garden. This enchanting candle captures the essence of fresh rose petals with subtle hints of green leaves and morning dew. Perfect for creating a romantic atmosphere or unwinding after a long day.",
    ingredients: ["Premium Soy Wax", "Rose Essential Oil", "Geranium", "Cotton Wick"],
    price: 160,
    discountPrice: 130,
    discountPercentage: 19,
    specs: {
      burnTime: "≈30 hrs",
      weight: "250g",
      size: "Medium",
    },
    tagline: "Soft petals in bloom",
    rating: 4.8,
  },
  {
    id: "vanilla-woods",
    name: "Vanilla Woods",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "A warm and inviting blend that combines the sweetness of Madagascar vanilla with the earthy richness of cedarwood. This sophisticated fragrance creates a cozy sanctuary that feels like a warm embrace on a cool evening.",
    ingredients: ["Premium Soy Wax", "Vanilla Extract", "Cedarwood Oil", "Cotton Wick"],
    price: 150,
    discountPrice: 125,
    discountPercentage: 17,
    specs: {
      burnTime: "≈32 hrs",
      weight: "250g",
      size: "Medium",
    },
    tagline: "Warm vanilla & cedar",
    rating: 4.9,
  },
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Energize your space with this vibrant blend of fresh citrus fruits. Featuring notes of sweet orange, zesty lemon, and a hint of grapefruit, this candle brings the sunshine indoors and lifts your spirits instantly.",
    ingredients: ["Premium Soy Wax", "Sweet Orange Oil", "Lemon Oil", "Cotton Wick"],
    price: 140,
    discountPrice: 110,
    discountPercentage: 21,
    specs: {
      burnTime: "≈28 hrs",
      weight: "220g",
      size: "Medium",
    },
    tagline: "Fresh citrus zest",
    rating: 4.7,
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Transport yourself to the peaceful lavender fields of Provence. This soothing candle features pure lavender essential oil blended with subtle chamomile notes, perfect for meditation, relaxation, or preparing for a restful night's sleep.",
    ingredients: ["Premium Soy Wax", "Lavender Essential Oil", "Chamomile", "Cotton Wick"],
    price: 145,
    discountPrice: 120,
    discountPercentage: 17,
    specs: {
      burnTime: "≈35 hrs",
      weight: "260g",
      size: "Medium",
    },
    tagline: "Calming lavender fields",
    rating: 4.9,
  },
  {
    id: "amber-musk",
    name: "Amber & Musk",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Indulge in the luxurious sophistication of warm amber and sensual musk. This captivating fragrance creates an intimate atmosphere perfect for special occasions or quiet evenings. Rich, complex, and utterly enchanting.",
    ingredients: ["Premium Soy Wax", "Amber Resin", "White Musk", "Cotton Wick"],
    price: 170,
    discountPrice: 140,
    discountPercentage: 18,
    specs: {
      burnTime: "≈40 hrs",
      weight: "300g",
      size: "Large",
    },
    tagline: "Luxurious night scent",
    rating: 4.8,
  },
  {
    id: "coconut-sunset",
    name: "Coconut Sunset",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Escape to a tropical paradise with this dreamy blend of creamy coconut and warm sunset notes. Featuring hints of vanilla and tropical flowers, this candle brings the vacation vibes right to your home.",
    ingredients: ["Premium Soy Wax", "Coconut Oil", "Vanilla", "Tropical Florals", "Cotton Wick"],
    price: 160,
    discountPrice: 130,
    discountPercentage: 19,
    specs: {
      burnTime: "≈30 hrs",
      weight: "250g",
      size: "Medium",
    },
    tagline: "Tropical breeze at home",
    rating: 4.6,
  },
]
