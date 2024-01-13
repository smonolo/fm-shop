'use client'

import { type FC, useCallback, useEffect, useMemo, useState } from 'react'
import type { Product } from '@/types/product'
import { supabase } from '@/utils/supabase'
import ErrorBox from '@/components/common/error-box'
import ProductsCard from '@/components/products/card'
import Loading from '@/components/common/loading'

const ProductsList: FC = () => {
  const [products, setProducts] = useState<Product[]>()
  const [error, setError] = useState<string>()

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  const loadProducts = useCallback(async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .returns<Product[]>()

    if (error) {
      setError(error.message)
    } else {
      setProducts(data?.sort((a, b) => b.releaseDate - a.releaseDate))
    }
  }, [])

  useEffect(() => {
    loadProducts().then(() => console.log('Products loaded'))
  }, [loadProducts])

  if (error) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error} />
      </section>
    )
  }

  if (!products) {
    return (
      <section className={sectionClass}>
        <Loading />
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
