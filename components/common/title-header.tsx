'use client'

import type { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title: string
  subtitle: string
}>

const TitleHeader: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="w-full px-10 py-20 lg:px-20 lg:py-32">
      <h1 className="text-center text-[35px]/[45px] font-bold italic lg:text-[45px]/[55px]">
        {title}
      </h1>
      <p className="mt-2 text-center font-medium text-fm-aqua lg:text-lg">
        {subtitle}
      </p>
      {children}
    </div>
  )
}

export default TitleHeader
