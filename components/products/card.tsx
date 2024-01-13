'use client'

import type { FC } from 'react'
import type { Product } from '@/types/product'
import Link from 'next/link'

type Props = {
  product: Product
}

const ProductsCard: FC<Props> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group mx-auto flex w-full cursor-pointer items-center overflow-hidden rounded-3xl bg-fm-cyan/10 backdrop-blur hover:bg-fm-cyan/20 md:w-[80%]"
    >
      <div className="flex h-fit w-full items-center justify-between gap-4 px-16 py-8">
        <div className="flex w-fit items-baseline gap-2">
          <h3 className="text-lg font-semibold transition-[font-size] delay-[300ms] duration-[300ms] lg:text-2xl">
            {product.name}
          </h3>
          <span className="text-sm italic">{product.type}</span>
        </div>
        <div className="flex w-fit items-center gap-6">
          <i className="bi bi-chevron-right p-2 text-2xl text-fm-gray transition-colors group-hover:text-fm-aqua" />
        </div>
      </div>
    </Link>
  )
}

export default ProductsCard
