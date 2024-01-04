import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import '@/app/globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FM SHOP',
  description: 'Our works are louder than words',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(font.className, [
          'm-0 flex min-h-screen w-full flex-col bg-fm-dark p-0 text-fm-light',
        ])}
      >
        <section className="h-fit grow">
          <Navbar />
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  )
}
