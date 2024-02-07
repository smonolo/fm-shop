'use client'

import type { FC } from 'react'
import type { FAQ } from '@/types/faq'

type Props = {
  faq: FAQ
}

const FAQCard: FC<Props> = ({ faq }) => {
  return (
    <div className="mx-auto flex w-full items-center justify-between gap-4 rounded-3xl border-2 border-solid border-fm-cyan/10 bg-fm-dark p-10 md:w-[80%]">
      <div className="flex w-fit flex-col gap-2">
        <h3 className="text-2xl font-semibold">{faq.question}</h3>
        <h3 className="text-base text-fm-light/70">{faq.answer}</h3>
      </div>
    </div>
  )
}

export default FAQCard
