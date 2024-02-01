'use client'

import { type FC, useEffect, useState } from 'react'
import ProductsList from '@/components/products/list'
import TitleHeader from '@/components/common/title-header'
import { loadProducts } from '@/store/slices/products'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import SearchInput from '@/components/common/search-input'

const Products: FC = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const [query, setQuery] = useState<string>()

  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts())
    }
  }, [dispatch, products.length])

  return (
    <section>
      <TitleHeader
        title="What are you looking for?"
        subtitle="Find the mod that best fits your needs."
      >
        <SearchInput setQuery={setQuery} />
      </TitleHeader>
      <ProductsList query={query} />
    </section>
  )
}

export default Products
