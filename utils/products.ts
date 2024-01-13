import type { Product } from '@/types/product'

export const filterProducts = (
  products: Product[],
  query?: string
): Product[] => {
  if (query) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  return products
}
