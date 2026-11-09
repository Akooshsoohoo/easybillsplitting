// Runs after `vite build`. Writes real HTML for each content page so crawlers
// (search, AdSense) see the text without running JavaScript. React replaces it on load.
import { createServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8')
const routes = [...sitemap.matchAll(/<loc>https:\/\/www\.easybillsplitting\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/')
  .filter((r) => r !== '/history') // history reads localStorage, nothing useful to prerender

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { render } = await vite.ssrLoadModule('/src/prerender-entry.jsx')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
let count = 0
for (const route of routes) {
  const { html, meta } = render(route)
  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (meta) {
    page = page.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    if (meta.description) {
      page = page.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(meta.description)}">`)
    }
  }
  page = page.replace('</head>', `<link rel="canonical" href="https://www.easybillsplitting.com${route === '/' ? '/' : route}">\n</head>`)
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route + '.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, page)
  count++
}
await vite.close()
console.log(`prerendered ${count} routes`)
