'use client'

import type { FC } from 'react'

const ProductsHeader: FC = () => {
  return (
    <div className="w-full px-10 py-20 lg:px-20 lg:py-40">
      <h1 className="text-center text-[35px]/[45px] font-bold italic lg:text-[50px]/[60px]">
        What are you looking for?
      </h1>
      <p className="mt-2 text-center font-medium text-fm-aqua lg:text-lg">
        Type what you are looking for, or discover through tags...
      </p>
    </div>
  )
}

export default ProductsHeader
