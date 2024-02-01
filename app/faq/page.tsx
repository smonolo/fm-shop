'use client'

import { useState, type FC, useEffect } from 'react'
import TitleHeader from '@/components/common/title-header'
import FaqList from '@/components/faq/list'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loadFaqs } from '@/store/slices/faqs'
import FaqsSearch from '@/components/faq/search'

const FAQ: FC = () => {
  const dispatch = useAppDispatch()
  const faqs = useAppSelector((state) => state.products.products)
  const [query, setQuery] = useState<string>()

  useEffect(() => {
    if (!faqs.length) {
      dispatch(loadFaqs())
    }
  }, [dispatch, faqs.length])

  return (
    <section>
      <TitleHeader
        title="Frequently asked questions"
        subtitle="Instant insights await! Dive into our FAQ for swift answers to frequently asked questions."
      >
        <FaqsSearch setQuery={setQuery} />
      </TitleHeader>
      <FaqList query={query} />
    </section>
  )
}

export default FAQ
