import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Container } from './Section'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{site.companyName}</p>
          <p className="mt-1 text-sm text-slate-600">
            © {year} {site.companyName}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-slate-700 hover:text-slate-900 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-slate-700 hover:text-slate-900 hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
