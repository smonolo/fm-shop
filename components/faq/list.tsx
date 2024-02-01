'use client'

import { type FC, useMemo } from 'react'
import ErrorBox from '@/components/common/error-box'
import InfoBox from '@/components/common/info-box'
import { useAppSelector } from '@/store/hooks'
import { filterFaqs } from '@/utils/faqs'
import { Faq } from '@/types/Faq'
import FaqsCard from './card'

type Props = {
  query?: string
}

const FaqList: FC<Props> = ({ query }) => {
  const { faqs, loading, error } = useAppSelector((state) => state.faqs)

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  const filteredFaqs = useMemo(
    (): Faq[] => filterFaqs(faqs, query),
    [faqs, query]
  )

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

  if (!filteredFaqs.length) {
    return (
      <section className={sectionClass}>
        <InfoBox text="No FAQ to show" />
      </section>
    )
  }

  return (
    <section className={sectionClass}>
      {filteredFaqs.map((faq) => (
        <FaqsCard key={faq.id} faq={faq} />
      ))}
    </section>
  )
}

export default FaqList
