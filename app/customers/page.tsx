'use client'

import { type FC, useEffect } from 'react'
import TitleHeader from '@/components/common/title-header'
import CustomersList from '@/components/customers/list'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loadCustomers } from '@/store/slices/customers'

const Customers: FC = () => {
  const dispatch = useAppDispatch()
  const customers = useAppSelector((state) => state.customers.customers)

  useEffect(() => {
    if (!customers.length) {
      dispatch(loadCustomers())
    }
  }, [dispatch, customers.length])

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
