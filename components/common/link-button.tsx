import type { FC, ReactNode } from 'react'

type Props = {
  href: string
  text?: string
  className?: string
  children?: ReactNode
}

const LinkButton: FC<Props> = ({ href, text, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={` ${
        className
          ? className
          : 'relative flex w-fit items-center gap-2 rounded-full bg-fm-aqua px-6 py-2.5 text-fm-dark shadow-fm-aqua transition-colors duration-500 hover:bg-fm-cyan'
      }`}
    >
      {text ? (
        <>
          <span className="text-sm font-semibold">{text}</span>
          <i className="bi bi-chevron-right text-xs" />
        </>
      ) : (
        <>{children}</>
      )}
    </a>
  )
}

export default LinkButton
