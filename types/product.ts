export type Product = {
  id: string
  name: string
  type: string
  description: string
  shopLink: string
  coverImage: string
  releaseDate: number
  showcaseImage?: string
  additionalDetails?: string
  tags?: string[]
  price: number
}
