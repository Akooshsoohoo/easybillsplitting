import { useEffect } from 'react'

export function usePageMeta(title, description) {
  // During build-time prerendering there is no document; record the meta for the prerender script.
  if (typeof document === 'undefined') {
    globalThis.__pageMeta = { title, description }
  }
  useEffect(() => {
    document.title = title
    if (!description) return
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    const prev = tag.getAttribute('content')
    tag.setAttribute('content', description)
    return () => { if (prev !== null) tag.setAttribute('content', prev) }
  }, [title, description])
}
