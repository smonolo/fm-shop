'use client'

import { useState, type FC, useEffect } from 'react'
import TitleHeader from '@/components/common/title-header'
import FaqList from '@/components/faq/list'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loadFAQ } from '@/store/slices/faq'
import SearchInput from '@/components/common/search-input'

const FAQ: FC = () => {
  const dispatch = useAppDispatch()
  const faq = useAppSelector((state) => state.products.products)
  const [query, setQuery] = useState<string>()

  useEffect(() => {
    if (!faq.length) {
      dispatch(loadFAQ())
    }
  }, [dispatch, faq.length])

  return (
    <section>
      <TitleHeader
        title="Frequently Asked Questions"
        subtitle="Instant insights await! Dive into our FAQ for swift answers to frequently asked questions."
      >
        <SearchInput setQuery={setQuery} />
      </TitleHeader>
      <FaqList query={query} />
    </section>
  )
}

export default FAQ
