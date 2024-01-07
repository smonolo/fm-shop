'use client'

import { useCallback, useEffect, useState } from 'react'
import type { Product } from '@/types/product'
import { supabase } from '@/utils/supabase'
import ErrorBox from '@/components/common/error-box'
import type { PostgrestError } from '@supabase/supabase-js'
import ProductsCard from '@/components/products/card'

type ProductsResponse = {
  data: Product[] | null
  error: PostgrestError | null
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>()
  const [isError, setError] = useState<boolean>(false)

  const loadProducts = useCallback(async () => {
    const { data, error }: ProductsResponse = await supabase
      .from('products')
      .select('*')

    if (error) {
      setError(true)
    } else {
      setProducts(data!)
    }
  }, [])

  useEffect(() => {
    loadProducts().then(() => console.log('Products loaded'))
  }, [])

  if (isError) {
    return <ErrorBox />
  }

  return (
    <section className="mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2">
      {products?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductsList
