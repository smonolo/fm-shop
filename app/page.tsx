'use client'

import type { FC } from 'react'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <div className="mx-auto mt-20 flex w-[90%] max-w-[1400px] justify-between lg:mt-40">
      <section className="mx-auto flex max-w-[600px] flex-col gap-4 text-center lg:mx-0 lg:text-left">
        <h1 className="text-[35px]/[45px] font-bold italic md:text-[50px]/[60px]">
          Our works speak louder than words.
        </h1>
        <h6 className="font-medium text-fm-aqua md:text-lg">
          Find high quality mods for the best experience ever.
        </h6>
      </section>
      <Image
        src="/home-logo.svg"
        alt="FM SHOP Outlined Logo"
        width={350}
        height={0}
        className="mx-auto hidden lg:block"
        draggable={false}
      />
    </div>
  )
}

export default Home
