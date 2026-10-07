// Central site settings. Change these values here and they update everywhere.

export const site = {
  companyName: 'Divyn Labs',
  email: 'admin@divynlabs.com',
  domain: 'divynlabs.com',
  url: 'https://divynlabs.com',
  chorrosUrl: 'https://chorrosapp.com',
  // TODO: confirm wording for the company location line on /about.
  location: 'Based in the United States.',
  // TODO: add the state that governs the Terms of Use (e.g. "Delaware").
  governingLawState: '[TODO: state]',
  // Effective date shown on the Privacy Policy and Terms of Use.
  // TODO: update this when the policies are reviewed and published.
  policyEffectiveDate: 'October 7, 2026',
} as const

export const mailto = (subject?: string, body?: string) => {
  const params: string[] = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${site.email}${params.length ? `?${params.join('&')}` : ''}`
}
