'use client'

import type { FC } from 'react'

type Props = {
  text?: string
}

const InfoBox: FC<Props> = ({ text }) => {
  return (
    <div className="mx-auto flex w-fit flex-col gap-4 text-center">
      <h1 className="text-[25px]/[20px] font-semibold italic lg:text-[30px]/[35px]">
        {text || 'Loading...'}
      </h1>
    </div>
  )
}

export default InfoBox
