import { included, services } from '../data/services'

// The brief lists two services but asks for three cards on Home, so the third card is the
// "What's included" list. TODO: confirm, or replace it with a third service in src/data/services.ts.

export default function ServicesGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-slate-600">{service.description}</p>
        </article>
      ))}
      <article className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">What's included</h3>
        <ul className="mt-3 space-y-2 text-slate-600">
          {included.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
