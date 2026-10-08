import { mailto, site } from './site'

// Single place to update app status, links, and visibility.

export type AppStatus = 'Available' | 'In development' | 'Coming soon'

export type AppLink = {
  label: string
  // null renders a disabled placeholder instead of a link.
  href: string | null
  primary?: boolean
}

export type App = {
  id: string
  name: string
  description: string
  platforms?: string[]
  status: AppStatus
  links: AppLink[]
  featured?: boolean
}

// Set to false to hide the H2OMed card on /apps.
export const SHOW_H2O_MED = true

const chorros: App = {
  id: 'chorros',
  name: 'Chorros',
  description:
    'A chores-and-rewards app that helps families build responsibility. Parents assign chores with points and screen-time value, and kids earn rewards they can see and track.',
  platforms: ['iOS', 'Android', 'Web'],
  status: 'Available',
  featured: true,
  links: [
    { label: 'Visit Chorros', href: site.chorrosUrl, primary: true },
    { label: 'App Store', href: site.chorrosAppStoreUrl },
    // TODO: add the Chorros Google Play URL.
    { label: 'Google Play', href: null },
  ],
}

// Keep this teaser generic. Do not add the app's name, category, or features.
const nextApp: App = {
  id: 'next-app',
  name: 'Coming soon',
  description: "A new mobile app launching soon. We'll share more when it's ready.",
  status: 'In development',
  links: [
    {
      label: 'Get notified',
      href: mailto('Notify me about your next app'),
      primary: true,
    },
  ],
}

const h2oMed: App = {
  id: 'h2o-med',
  name: 'H2OMed',
  description: 'A water intake and medication reminder app for iPhone and iPad.',
  platforms: ['iPhone', 'iPad'],
  status: 'Available',
  links: [{ label: 'App Store', href: site.h2oMedAppStoreUrl, primary: true }],
}

export const apps: App[] = [chorros, ...(SHOW_H2O_MED ? [h2oMed] : []), nextApp]

export const featuredApps = apps.filter((app) => app.featured)
