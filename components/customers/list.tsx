'use client'

import { type FC, useMemo } from 'react'
import ErrorBox from '@/components/common/error-box'
import Loading from '@/components/common/loading'
import { useAppSelector } from '@/store/hooks'
import CustomersCard from '@/components/customers/card'

const CustomersList: FC = () => {
  const { customers, loading, error } = useAppSelector(
    (state) => state.customers
  )

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  if (loading) {
    return (
      <section className={sectionClass}>
        <Loading />
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

  return (
    <section className={sectionClass}>
      <div className="grid grid-cols-5">
        {customers.map((customer) => (
          <CustomersCard key={customer.id} customer={customer} />
        ))}
      </div>
    </section>
  )
}

export default CustomersList
