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
            href: '/shop',
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
            href: '/discord',
          },
        ],
      },
    ],
    []
  )

  return (
    <footer className="mx-auto w-[90%] max-w-[1400px] justify-between">
      <div className="flex w-full justify-between gap-40 pb-6 text-sm">
        <section className="flex w-fit flex-col gap-4">
          <h6 className="font-medium text-fm-grey">Copyright</h6>
          <p>
            These works are protected by copyright, allowing for personal use.
            Commercial usage requires a formal license, and we kindly request
            that you refrain from distributing, modifying, or directly
            replicating our maps without obtaining our explicit consent. We
            highly value originality and discourage direct emulation of our
            creations. For any inquiries regarding commercial use or
            permissions, please contact us to engage in a discussion on mutually
            agreeable terms.
          </p>
        </section>
        <div className="flex w-fit gap-10">
          {categories.map(({ title, links }) => (
            <section key={title.toLowerCase()} className="flex flex-col gap-4">
              <h6 className="font-medium text-fm-grey">{title}</h6>
              <div className="flex flex-col gap-1">
                {links.map(({ text, href }) => (
                  <Link
                    key={text.toLowerCase()}
                    href={href}
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
      <div className="flex w-full items-center justify-between gap-4 py-6 text-sm">
        <p>© FM SHOP 2023-{new Date().getFullYear()}</p>
        <p>Not affiliated with Cfx.re, FiveM or Rockstar Games.</p>
      </div>
    </footer>
  )
}

export default Footer
