import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FM Shop',
  description: 'Our works are louder than words',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
