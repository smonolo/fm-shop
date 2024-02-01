'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { FAQ } from '@/types/faq'

type Props = {
  faq: FAQ
}

const FAQCard: FC<Props> = ({ faq }) => {
  return (
    <Link
      href={`/products/${faq.id}`}
      className="group mx-auto flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border-4 border-solid border-fm-dark/60 bg-cover bg-center backdrop-blur md:w-[80%]"
    >
      <div className="flex h-[120px] w-full items-center justify-between gap-4 bg-fm-dark/70 px-16 py-8 transition-[height] delay-[100ms] duration-[400ms] hover:h-[200px]">
        <div className="flex w-fit items-baseline gap-2">
          <h3 className="text-lg font-semibold lg:text-2xl">{faq.question}</h3>
          <h3 className="text-lg font-semibold lg:text-2xl">{faq.answer}</h3>
        </div>
      </div>
    </Link>
  )
}

export default FAQCard
