import { useEffect } from 'react'
import { site } from '../data/site'

// Sets the document title and meta description for the current route.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.companyName}` : `${site.companyName} | Mobile and web app development`

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
