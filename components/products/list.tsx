'use client'

import { type FC, useMemo } from 'react'
import ErrorBox from '@/components/common/error-box'
import ProductsCard from '@/components/products/card'
import InfoBox from '@/components/common/info-box'
import { useAppSelector } from '@/store/hooks'
import { filterProducts } from '@/utils/products'
import { Product } from '@/types/product'

type Props = {
  query?: string
}

const ProductsList: FC<Props> = ({ query }) => {
  const { products, loading, error } = useAppSelector((state) => state.products)

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  const filteredProducts = useMemo(
    (): Product[] => filterProducts(products, query),
    [products, query]
  )

  if (loading) {
    return (
      <section className={sectionClass}>
        <InfoBox />
      </section>
    )
  }

  if (error) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error} />
      </section>
    )
  }

  if (!filteredProducts.length) {
    return (
      <section className={sectionClass}>
        <InfoBox text="No products to show" />
      </section>
    )
  }

  return (
    <section className={sectionClass}>
      {filteredProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductsList
