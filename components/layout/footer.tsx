'use client'

import { FC, useMemo } from 'react'
import Link from 'next/link'

type FooterLink<T extends string = string> = {
  text: Capitalize<T>
  href: `/${T}` | `https://${T}`
}

type FooterCategory<T extends string = string> = {
  title: Capitalize<T>
  links: FooterLink[]
}

const Footer: FC = () => {
  const categories = useMemo(
    (): FooterCategory[] => [
      {
        title: 'Company',
        links: [
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
      },
      {
        title: 'About',
        links: [
          {
            text: 'Shop',
            href: 'https://store.fm-shop.it',
          },
          {
            text: 'Support',
            href: '/support',
          },
          {
            text: 'FAQ',
            href: '/faq',
          },
        ],
      },
      {
        title: 'Connect',
        links: [
          {
            text: 'Discord',
            href: 'https://discord.com/invite/fm-shop',
          },
        ],
      },
    ],
    []
  )

  return (
    <footer className="mx-auto w-[90%] max-w-[1400px] justify-between">
      <div className="flex w-full flex-col justify-between gap-10 pb-6 text-sm md:flex-row md:gap-40">
        <section className="flex w-fit flex-col gap-2 md:gap-4">
          <h6 className="gray font-medium">Disclaimer</h6>
          <p>
            These works are protected by copyright, allowing for personal use.
            Commercial usage requires a formal license, and we kindly request
            that you refrain from distributing, modifying, or directly
            replicating our products without obtaining our explicit consent.
          </p>
        </section>
        <div className="flex w-fit gap-10">
          {categories.map(({ title, links }) => (
            <section
              key={title.toLowerCase()}
              className="flex flex-col gap-2 md:gap-4"
            >
              <h6 className="text-fm-gray font-medium">{title}</h6>
              <div className="flex flex-col gap-1">
                {links.map(({ text, href }) => (
                  <Link
                    key={text.toLowerCase()}
                    href={href}
                    target={href.startsWith('https') ? '_blank' : '_self'}
                    className="font-medium transition-colors"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-fm-cyan" />
      <div className="flex w-full flex-col items-center justify-between gap-2 py-6 text-sm md:flex-row md:gap-4">
        <p>© FM SHOP 2023-{new Date().getFullYear()}</p>
        <p>Not affiliated with Cfx.re, FiveM or Rockstar Games.</p>
      </div>
    </footer>
  )
}

export default Footer
