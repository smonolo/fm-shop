'use client'

import { type FC, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import LinkButton from '@/components/common/link-button'

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
    <nav className="fixed left-[50%] top-0 z-50 mx-auto flex w-[95%] max-w-[1600px] translate-x-[-50%] gap-2.5 py-5 backdrop-blur max-sm:items-center max-sm:justify-between sm:grid sm:grid-cols-3 sm:gap-4">
      <div className="flex h-full w-full items-center sm:justify-start">
        <Link href="/" className="block w-full">
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
            className="block min-w-[30px] lg:hidden"
            {...commonImageProps}
          />
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-fit items-center gap-4 rounded-full bg-fm-cyan/10 px-3 py-2 sm:px-6 sm:py-2.5 lg:gap-7">
          {links.map(({ text, href }) => (
            <Link
              key={text.toLowerCase()}
              href={href}
              className={classNames(
                'text-sm font-medium duration-500 hover:text-fm-aqua max-sm:text-[13px]',
                {
                  'text-fm-aqua': pathname === href,
                }
              )}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <LinkButton
          href="https://store.fm-shop.it"
          className="relative flex w-fit items-center gap-2 rounded-full bg-fm-aqua px-3 py-2 text-fm-dark shadow-fm-aqua transition-colors duration-500 hover:bg-fm-cyan sm:px-6 sm:py-2.5"
        >
          <span className="text-sm font-semibold max-sm:text-[13px]">
            Shop <span className="max-sm:hidden">now</span>{' '}
          </span>
          <i className="bi bi-chevron-right text-xs" />
        </LinkButton>
      </div>
    </nav>
  )
}

export default Navbar
