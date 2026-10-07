export type Service = {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Mobile app development',
    description:
      'Native-quality iOS and Android apps built with modern cross-platform tools. We handle the build, testing, and store submission.',
  },
  {
    title: 'Web app development',
    description:
      'Fast, secure web applications and dashboards, built for performance and easy maintenance.',
  },
]

export const included: string[] = [
  'UI/UX design',
  'Backend and database setup',
  'Payments and subscriptions',
  'App store submission and review support',
]
