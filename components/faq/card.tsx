'use client'

import type { FC } from 'react'
import { FAQ } from '@/types/faq'

type Props = {
  faq: FAQ
}

const FAQCard: FC<Props> = ({ faq }) => {
  return (
    <div className="group mx-auto flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border-4 border-solid border-fm-dark/60 bg-cover bg-center backdrop-blur md:w-[80%]">
      <div className="flex w-full items-center justify-between gap-4 bg-fm-dark/70 px-16 py-8">
        <div className="flex w-fit flex-col items-baseline gap-2">
          <h3 className="text-2xl font-semibold">{faq.question}</h3>
          <h3 className="text-base font-medium text-fm-light/80">
            {faq.answer}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default FAQCard
