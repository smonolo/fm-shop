'use client'

import type { FC } from 'react'

const Loading: FC = () => {
  return (
    <div className="mx-auto flex w-fit flex-col gap-4 text-center">
      <h1 className="text-[25px]/[20px] font-semibold italic lg:text-[30px]/[35px]">
        Loading...
      </h1>
    </div>
  )
}

export default Loading
