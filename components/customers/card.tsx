'use client'

import type { FC } from 'react'
import type { Customer } from '@/types/customer'
import classNames from 'classnames'

type Props = {
  customer: Customer
}

export const CustomersCard: FC<Props> = ({ customer }) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <div
        className="group h-[200px] w-full overflow-hidden rounded-3xl border-2 border-solid border-fm-cyan/10 bg-fm-cyan/5 bg-[length:70%_auto] bg-center bg-no-repeat backdrop-blur"
        style={{ backgroundImage: `url("${customer.image}")` }}
      >
        <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-fm-dark/80 p-5 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <p className="text-sm">{customer.review}</p>
          <div>
            <h5 className="mt-4 text-sm font-medium">{customer.name}</h5>
            <div className="mt-1 flex w-fit items-center gap-1 text-sm">
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
        </div>
      </div>
    </div>
  )
}

export default CustomersCard
