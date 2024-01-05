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
          'bg-fm-dark text-fm-light m-0 flex min-h-screen w-full flex-col gap-10 p-0',
        ])}
      >
        <section className="bg-fm-background h-fit grow bg-cover bg-center bg-no-repeat">
          <Navbar />
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  )
}
