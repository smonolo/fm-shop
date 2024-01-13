'use client'

import type { FC } from 'react'
import TitleHeader from '@/components/common/title-header'
import CustomersList from '@/components/customers/list'

const Customers: FC = () => {
  return (
    <section>
      <TitleHeader
        title="We build the trust of our customers"
        subtitle="Discover what they think of us."
      />
      <CustomersList />
    </section>
  )
}

export default Customers
