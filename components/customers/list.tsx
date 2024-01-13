'use client'

import { type FC, useCallback, useEffect, useMemo, useState } from 'react'
import { supabase } from '@/utils/supabase'
import ErrorBox from '@/components/common/error-box'
import Loading from '@/components/common/loading'
import { Customer } from '@/types/customer'

const CustomersList: FC = () => {
  const [customers, setProducts] = useState<Customer[]>()
  const [error, setError] = useState<string>()

  const sectionClass = useMemo(
    () => 'mx-auto flex w-[90%] max-w-[1400px] flex-col gap-2',
    []
  )

  const loadCustomers = useCallback(async () => {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .returns<Customer[]>()

    if (error) {
      setError(error.message)
    } else {
      setProducts(data?.sort((a, b) => b.createdAt - a.createdAt))
    }
  }, [])

  useEffect(() => {
    loadCustomers().then(() => console.log('Customers loaded'))
  }, [loadCustomers])

  if (error) {
    return (
      <section className={sectionClass}>
        <ErrorBox error={error} />
      </section>
    )
  }

  if (!customers) {
    return (
      <section className={sectionClass}>
        <Loading />
      </section>
    )
  }

  return (
    <section className={sectionClass}>
      {customers.map((customer) => (
        <div key={customer.id}>{customer.name}</div>
      ))}
    </section>
  )
}

export default CustomersList
