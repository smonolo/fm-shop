'use client'

import type { FC } from 'react'
import ProductsList from '@/components/products/list'
import TitleHeader from '@/components/common/title-header'

const Products: FC = () => {
  return (
    <section>
      <TitleHeader
        title="What are you looking for?"
        subtitle="Find the mod that best fits your needs."
      />
      <ProductsList />
    </section>
  )
}

export default Products
