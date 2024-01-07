export type Product = {
  id: string
  name: string
  type: 'interior'
  description: string
  shopLink: string
  coverImage: string
  releaseDate: number
  showcaseImage?: string
  additionalDetails?: string
  tags?: string[]
}
