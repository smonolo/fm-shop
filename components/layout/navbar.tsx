'use client'

import { FC, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

type NavbarLink<T extends string = string> = {
  text: Capitalize<T>
  href: `/${T}`
}

type CommonImageProps = {
  height: number
  draggable: boolean
}

const Navbar: FC = () => {
  const pathname = usePathname()

  const links = useMemo(
    (): NavbarLink[] => [
      {
        text: 'Products',
        href: '/products',
      },
      {
        text: 'Customers',
        href: '/customers',
      },
      {
        text: 'Jobs',
        href: '/jobs',
      },
      {
        text: 'Support',
        href: '/support',
      },
      {
        text: 'About',
        href: '/about',
      },
    ],
    []
  )

  const commonImageProps = useMemo(
    (): CommonImageProps => ({
      height: 0,
      draggable: false,
    }),
    []
  )

  return (
    <nav className="fixed left-[50%] top-0 mx-auto grid w-[90%] max-w-[1600px] translate-x-[-50%] grid-cols-3 gap-4 py-5 backdrop-blur">
      <div className="flex h-full w-full items-center justify-start">
        <Link href="/" className="block w-fit">
          <Image
            src="/logo.svg"
            alt="FM SHOP Logo"
            width={150}
            className="hidden lg:block"
            {...commonImageProps}
          />
          <Image
            src="/icon.svg"
            alt="FM SHOP Icon"
            width={30}
            className="block lg:hidden"
            {...commonImageProps}
          />
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-fit items-center gap-4 rounded-full bg-fm-cyan/10 px-6 py-2.5 lg:gap-7">
          {links.map(({ text, href }) => (
            <Link
              key={text.toLowerCase()}
              href={href}
              className={classNames('text-sm font-medium', {
                'text-fm-aqua': pathname === href,
              })}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <Link
          href="https://store.fm-shop.it"
          target="_blank"
          className="relative flex w-fit items-center gap-2 rounded-full bg-fm-aqua px-6 py-2.5 text-fm-dark shadow-fm-aqua transition-colors hover:bg-fm-cyan"
        >
          <span className="text-sm font-semibold">Shop now</span>
          <i className="bi bi-chevron-right text-xs" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
