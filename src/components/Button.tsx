import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
}

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}

// Internal routes use react-router; anything with a scheme (https:, mailto:) uses a plain anchor.
export default function ButtonLink({ to, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const isExternal = /^[a-z]+:/i.test(to)

  if (isExternal) {
    const isWeb = to.startsWith('http')
    return (
      <a
        href={to}
        className={classes}
        {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {isWeb && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export function DisabledButton({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <span
      aria-disabled="true"
      title={title}
      className={`${base} cursor-not-allowed border border-slate-200 bg-slate-50 text-slate-500`}
    >
      {children}
    </span>
  )
}
