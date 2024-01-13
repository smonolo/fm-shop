'use client'

import { type FC, useMemo } from 'react'
import ErrorBox from '@/components/common/error-box'
import ProductsCard from '@/components/products/card'
import Loading from '@/components/common/loading'
import { useAppSelector } from '@/store/hooks'

const ProductsList: FC = () => {
  const { products, loading, error } = useAppSelector((state) => state.products)

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  if (loading) {
    return (
      <section className={sectionClass}>
        <Loading />
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

  return (
    <section className={sectionClass}>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductsList
