'use client'

import type { FC } from 'react'
import type { Product } from '@/types/product'

type Props = {
  product: Product
}

const ProductsCard: FC<Props> = ({ product }) => {
  return (
    <div className="mx-auto flex w-[80%] items-center justify-between gap-4 rounded-3xl bg-fm-cyan/10 px-16 py-8 backdrop-blur-lg">
      <div className="flex w-fit items-baseline gap-2">
        <h3 className="text-xl font-semibold lg:text-2xl">{product.name}</h3>
        <span className="text-sm italic">{product.type}</span>
      </div>
      <i className="bi bi-chevron-down pointer p-2 text-2xl text-fm-grey" />
    </div>
  )
}

export default ProductsCard
