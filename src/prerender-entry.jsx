import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export function render(url) {
  globalThis.__pageMeta = null
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
  return { html, meta: globalThis.__pageMeta }
}
