// Central site settings. Change these values here and they update everywhere.

export const site = {
  companyName: 'Divyn Labs',
  email: 'admin@divynlabs.com',
  domain: 'divynlabs.com',
  url: 'https://divynlabs.com',
  chorrosUrl: 'https://chorrosapp.com',
  chorrosAppStoreUrl: 'https://apps.apple.com/us/app/chorros-kids-chores-tracker/id6785687949',
  h2oMedAppStoreUrl: 'https://apps.apple.com/us/app/h2omed/id6806398583',
  location: 'Based in the United States.',
  // State whose law governs the Terms of Use.
  governingLawState: 'Virginia',
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
