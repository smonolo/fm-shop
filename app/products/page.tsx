'use client'

import type { FC } from 'react'
import ProductsHeader from '@/components/products/header'
import ProductsList from '@/components/products/list'

const Products: FC = () => {
  return (
    <section>
      <ProductsHeader />
      <ProductsList />
    </section>
  )
}

export default Products
