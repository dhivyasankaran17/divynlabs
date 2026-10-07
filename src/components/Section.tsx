import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  tone?: 'white' | 'gray'
  className?: string
  labelledBy?: string
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export default function Section({ children, tone = 'white', className = '', labelledBy }: SectionProps) {
  const bg = tone === 'gray' ? 'bg-slate-50' : 'bg-white'
  return (
    <section aria-labelledby={labelledBy} className={`${bg} py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-base text-slate-600">{intro}</p>}
    </div>
  )
}
