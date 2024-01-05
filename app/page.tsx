'use client'

import type { FC } from 'react'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <div className="mx-auto mt-40 flex w-[90%] max-w-[1400px] justify-between">
      <section className="flex max-w-[600px] flex-col gap-4">
        <h1 className="text-[50px]/[60px] font-bold">
          Our works speak louder than words.
        </h1>
        <h6 className="text-fm-aqua text-lg font-medium">
          Find high quality mods for the best experience ever.
        </h6>
      </section>
      <Image
        src="/home-logo.svg"
        alt="FM SHOP Outlined Logo"
        width={400}
        height={0}
        className="mx-auto"
        draggable={false}
      />
    </div>
  )
}

export default Home
