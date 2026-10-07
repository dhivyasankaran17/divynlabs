import type { ReactNode } from 'react'
import { Container } from './Section'

export default function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container className="py-14 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-slate-600">{children}</div>}
      </Container>
    </div>
  )
}
