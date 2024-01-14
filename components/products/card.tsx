'use client'

import { type FC, useState } from 'react'
import type { Product } from '@/types/product'
import Link from 'next/link'

type Props = {
  product: Product
}

const ProductsCard: FC<Props> = ({ product }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Link
      href={`/products/${product.id}`}
      className="group mx-auto flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border-4 border-solid border-fm-dark/60 bg-cover bg-center backdrop-blur md:w-[80%]"
      style={{ backgroundImage: `url(${product.coverImage})` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex h-[120px] w-full items-center justify-between gap-4 bg-fm-dark/70 px-16 py-8 transition-[height] delay-[100ms] duration-[400ms] hover:h-[200px]">
        <div className="flex w-fit items-baseline gap-2">
          <h3 className="text-lg font-semibold lg:text-2xl">{product.name}</h3>
          <span className="text-sm italic">{product.type}</span>
        </div>
        <div className="flex w-fit items-center gap-6">
          <p className="font-medium text-fm-aqua">
            {Intl.NumberFormat(navigator.language, {
              style: 'currency',
              currency: 'EUR',
            }).format(product.price)}
          </p>
          <i className="bi bi-chevron-right p-2 text-2xl text-fm-gray transition-colors group-hover:text-fm-aqua" />
        </div>
      </div>
    </Link>
  )
}

export default ProductsCard
