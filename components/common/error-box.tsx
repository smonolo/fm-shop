'use client'

import type { FC } from 'react'

const ErrorBox: FC = () => {
  return (
    <div className="mx-auto mt-20 flex w-fit flex-col gap-4 text-center">
      <h1 className="text-[30px]/[35px] font-bold italic lg:text-[40px]/[50px]">
        Something went wrong
      </h1>
      <p className="text-fm-aqua">
        It looks like we could not perform the requested action. Please try
        again later.
      </p>
    </div>
  )
}

export default ErrorBox
