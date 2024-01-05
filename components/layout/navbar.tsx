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

  return (
    <nav className="mx-auto flex w-[90%] max-w-[1600px] items-center justify-between gap-4 py-5">
      <Link href="/" className="block w-fit">
        <Image
          src="logo.svg"
          alt="FM Shop Logo"
          width={150}
          height={0}
          className="leading-none"
        />
      </Link>
      <div className="bg-fm-cyan/10 flex w-fit items-center gap-7 rounded-full px-6 py-2.5">
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
      <Link
        href="https://store.fm-shop.it"
        target="_blank"
        className="bg-fm-aqua text-fm-dark hover:bg-fm-cyan relative flex w-fit items-center gap-2 rounded-full px-6 py-2.5 transition-colors"
      >
        <span className="text-sm font-semibold">Shop now</span>
        <i className="bi bi-chevron-right text-xs" />
      </Link>
    </nav>
  )
}

export default Navbar
