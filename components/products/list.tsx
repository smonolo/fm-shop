'use client'

import { type FC, useCallback, useEffect, useState } from 'react'
import type { Product } from '@/types/product'
import { supabase } from '@/utils/supabase'
import ErrorBox from '@/components/common/error-box'
import type { PostgrestError } from '@supabase/supabase-js'
import ProductsCard from '@/components/products/card'

type ProductsResponse = {
  data: Product[] | null
  error: PostgrestError | null
}

const ProductsList: FC = () => {
  const [products, setProducts] = useState<Product[]>()
  const [isError, setError] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<string>()

  const loadProducts = useCallback(async () => {
    const { data, error }: ProductsResponse = await supabase
      .from('products')
      .select('*')

    if (error) {
      setError(true)
    } else {
      setProducts(data?.sort((a, b) => b.releaseDate - a.releaseDate))
    }
  }, [])

  useEffect(() => {
    loadProducts().then(() => console.log('Products loaded'))
  }, [loadProducts])

  const updateExpanded = useCallback(
    (productId: string): void => {
      if (expanded === productId) {
        setExpanded('')
      } else {
        setExpanded(productId)
      }
    },
    [expanded]
  )

  if (isError) {
    return <ErrorBox />
  }

  return (
    <section className="mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2">
      {products?.map((product) => (
        <ProductsCard
          key={product.id}
          product={product}
          expanded={expanded === product.id}
          setExpanded={() => updateExpanded(product.id)}
        />
      ))}
    </section>
  )
}

export default ProductsList
