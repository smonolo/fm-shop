'use client'

import type { FC } from 'react'
import Link from 'next/link'

type Props = {
  href: string
  text: string
}

const LinkButton: FC<Props> = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative flex w-fit items-center gap-2 rounded-full bg-fm-aqua px-6 py-2.5 text-fm-dark shadow-fm-aqua transition-colors hover:bg-fm-cyan"
    >
      <span className="text-sm font-semibold">{text}</span>
      <i className="bi bi-chevron-right text-xs" />
    </Link>
  )
}

export default LinkButton
