'use client'

import type { FC } from 'react'
import Image from 'next/image'
import type { Customer } from '@/types/customer'
import classNames from 'classnames'

type Props = {
  customer: Customer
}

export const CustomersCard: FC<Props> = ({ customer }) => {
  return (
    <div className="mx-auto flex flex-col">
      <Image
        src={customer.image}
        alt={customer.name}
        width={512}
        height={512}
        className="h-[200px] w-[200px] rounded-xl object-cover"
      />
      <h5 className="mt-4 text-center font-medium">{customer.name}</h5>
      <div className="mx-auto mt-2 flex w-fit items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={classNames(
              'bi bi-star-fill',
              customer.rating > index ? 'text-fm-cyan' : 'text-fm-gray'
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomersCard
