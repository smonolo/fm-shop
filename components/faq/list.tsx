'use client'

import { type FC, useMemo } from 'react'
import ErrorBox from '@/components/common/error-box'
import InfoBox from '@/components/common/info-box'
import { useAppSelector } from '@/store/hooks'
import { filterFAQ } from '@/utils/faq'
import type { FAQ } from '@/types/faq'
import FAQCard from '@/components/faq/card'

type Props = {
  query?: string
}

const FAQList: FC<Props> = ({ query }) => {
  const { faq, loading, error } = useAppSelector((state) => state.faq)

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  const filteredFAQ = useMemo((): FAQ[] => filterFAQ(faq, query), [faq, query])

  if (loading) {
    return (
      <section className={sectionClass}>
        <InfoBox />
      </section>
    )
  }

  if (error) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error} />
      </section>
    )
  }

  if (!filteredFAQ.length) {
    return (
      <section className={sectionClass}>
        <InfoBox text="No FAQ to show" />
      </section>
    )
  }

  return (
    <section className={sectionClass}>
      {filteredFAQ.map((faq) => (
        <FAQCard key={faq.id} faq={faq} />
      ))}
    </section>
  )
}

export default FAQList
