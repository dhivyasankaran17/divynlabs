import type { App, AppStatus } from '../data/apps'
import ButtonLink, { DisabledButton } from './Button'

const statusStyles: Record<AppStatus, string> = {
  Available: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  'In development': 'bg-amber-50 text-amber-900 ring-amber-200',
  'Coming soon': 'bg-slate-100 text-slate-700 ring-slate-300',
}

export default function AppCard({ app }: { app: App }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-900">{app.name}</h3>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[app.status]}`}
        >
          {app.status}
        </span>
      </div>
      <p className="mt-4 text-slate-600">{app.description}</p>
      {app.platforms && (
        <p className="mt-4 text-sm text-slate-700">
          <span className="font-medium text-slate-900">Platforms:</span> {app.platforms.join(', ')}
        </p>
      )}
      {app.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {app.links.map((link) =>
            link.href ? (
              <ButtonLink key={link.label} to={link.href} variant={link.primary ? 'primary' : 'secondary'}>
                {link.label}
              </ButtonLink>
            ) : (
              <DisabledButton key={link.label} title="Link coming soon">
                {link.label}
                <span className="sr-only"> (link coming soon)</span>
              </DisabledButton>
            ),
          )}
        </div>
      )}
    </article>
  )
}
