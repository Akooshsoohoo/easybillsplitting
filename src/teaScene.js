// Tea scene: two seated animals in side profile facing each other across a low table.
// Everything is inline SVG so it works offline. Canvas is 300x130. The left animal faces
// right; the right one is the same drawing mirrored.

import { ACCESSORIES, HATS, FACES, NECKS } from './avatars.js'

const INK = '#1c1b18'

// Each animal: colours plus a head() that draws a right-facing head centred near (54,46).
export const SEATED = {
  fox: {
    body: '#d9762b', belly: '#fff4e6', foot: '#3b2a20', hand: '#3b2a20',
    tail: (c) => `<path d="M36 106 C8 104 2 76 24 66 C16 82 24 94 42 98Z" fill="${c.body}"/><path d="M10 92 C8 82 14 74 24 66 C18 80 20 88 24 94Z" fill="#fff4e6"/>`,
    head: (c) => `<path d="M40 40 L41 20 L53 34Z" fill="${c.body}"/><path d="M44 36 L44.5 26 L50 33Z" fill="#3b2a20"/>
<ellipse cx="54" cy="46" rx="14" ry="12" fill="${c.body}"/>
<path d="M58 42 L82 52.5 L58 58Z" fill="#f3b073"/><path d="M52 52 C56 58 60 58 62 56 L58 58Z" fill="#fff4e6"/>
<circle cx="81.5" cy="52.4" r="2.4" fill="#2b2118"/><circle cx="60" cy="42" r="1.9" fill="#1d1a17"/>`,
  },
  frog: {
    body: '#5fae5a', belly: '#c9e8b4', foot: '#4a9a4c', hand: '#79c66f',
    tail: () => '',
    head: () => `<ellipse cx="56" cy="49" rx="17" ry="11" fill="#79c66f"/>
<circle cx="56" cy="38" r="7.5" fill="#79c66f"/><circle cx="58" cy="37" r="4.8" fill="#fff6e8"/><circle cx="59.5" cy="37.4" r="2.4" fill="#1d1a17"/>
<path d="M58 54 Q72 59 78 51" stroke="#2f6b3a" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="70" cy="47" r="1" fill="#2f6b3a"/>`,
  },
  sloth: {
    body: '#9c7e60', belly: '#d6bb98', foot: '#6b533d', hand: '#6b533d',
    tail: () => '',
    head: () => `<path d="M44 34 C46 28 54 28 60 32 C56 30 50 32 44 38Z" fill="#6b533d"/>
<circle cx="54" cy="46" r="14.5" fill="#d6bb98"/>
<ellipse cx="60.5" cy="43" rx="5.6" ry="3.8" fill="#6b533d" transform="rotate(18 60.5 43)"/>
<circle cx="61.5" cy="43" r="1.5" fill="#f6efe3"/><circle cx="61.8" cy="43.2" r="0.8" fill="#1d1a17"/>
<ellipse cx="68" cy="50" rx="3.4" ry="2.4" fill="#3b2d22"/><path d="M60 55 Q65 58 69 55" stroke="#3b2d22" stroke-width="1.4" fill="none" stroke-linecap="round"/>`,
  },
  penguin: {
    body: '#2f3a45', belly: '#f6f1e8', foot: '#f0a03a', hand: '#2f3a45',
    tail: () => `<path d="M34 104 L22 110 L38 108Z" fill="#2f3a45"/>`,
    head: () => `<circle cx="54" cy="44" r="13.5" fill="#2f3a45"/>
<ellipse cx="58.5" cy="48" rx="8.5" ry="8" fill="#f6f1e8"/>
<path d="M64 45 L76 48.5 L64 52Z" fill="#f0a03a"/><circle cx="60" cy="42" r="1.8" fill="#1d1a17"/>`,
  },
  capybara: {
    body: '#9a6f48', belly: '#c79a6c', foot: '#6b4a2f', hand: '#6b4a2f',
    tail: () => '',
    head: () => `<circle cx="46" cy="34" r="3" fill="#7d5636"/>
<ellipse cx="55" cy="46" rx="15" ry="13" fill="#9a6f48"/>
<path d="M63 36 L82 37 Q89 46 83 58 L63 58Z" fill="#b8865a"/>
<ellipse cx="85" cy="43" rx="3" ry="3.8" fill="#2b2118"/><circle cx="62" cy="41" r="1.9" fill="#1d1a17"/>
<path d="M66 54 Q73 57 79 54" stroke="#6b4a2f" stroke-width="1.3" fill="none" stroke-linecap="round"/>`,
  },
}

function steam() {
  return `<g class="tea-steam" fill="none" stroke="#b9b3a6" stroke-width="1.6" stroke-linecap="round">
<path d="M84 66 C81 62 87 59 84 55"/><path d="M89 66 C86 62 92 59 89 55"/></g>`
}

function seated(a) {
  return `${a.tail(a)}
<ellipse cx="56" cy="106" rx="28" ry="8" fill="${a.body}"/>
<ellipse cx="80" cy="107" rx="7" ry="5" fill="${a.foot}"/>
<path d="M30 107 C26 84 30 64 46 58 C58 56 65 66 63 80 C62 92 66 100 68 107Z" fill="${a.body}"/>
<ellipse cx="57" cy="85" rx="7.5" ry="15" fill="${a.belly}"/>
${a.head(a)}
<path d="M50 70 Q64 84 80 79" stroke="${a.body}" stroke-width="9" fill="none" stroke-linecap="round"/>
<circle cx="81" cy="79" r="4.6" fill="${a.hand}"/>
<g><path d="M79 70 h12 v10 a3 3 0 0 1 -3 3 h-6 a3 3 0 0 1 -3 -3z" fill="#f6efe3" stroke="${INK}" stroke-width="1.3"/>
<path d="M91 73 q4 0 4 3.5 t-4 3.5" fill="none" stroke="${INK}" stroke-width="1.3"/></g>
${steam()}`
}

// Things that can sit on the table, drawn around x=0 on the tabletop (y=0).
export const THINGS = {
  flower: `<path d="M-7 0 L-5 -10 H5 L7 0Z" fill="#c8714a"/><path d="M0 -10 V-24" stroke="#4a9a4c" stroke-width="2" stroke-linecap="round"/>
<g fill="#f4a3b8"><circle cx="0" cy="-30" r="4"/><circle cx="-5" cy="-26" r="4"/><circle cx="5" cy="-26" r="4"/><circle cx="-3" cy="-33" r="3.6"/><circle cx="3.4" cy="-33" r="3.6"/></g><circle cx="0" cy="-29" r="2.6" fill="#f5c542"/>
<path d="M0 -17 q-7 -3 -8 -8 q6 1 8 8z" fill="#4a9a4c"/>`,
  duck: `<ellipse cx="0" cy="-6" rx="9" ry="6" fill="#f5c542"/><path d="M6 -8 q6 -2 6 1 q-4 3 -6 1z" fill="#f5c542"/><circle cx="6" cy="-14" r="5" fill="#f5c542"/>
<path d="M10 -14 l6 1.5 l-6 2z" fill="#f08a3a"/><circle cx="7.5" cy="-15" r="1" fill="${INK}"/><path d="M-6 -8 q4 6 10 0" stroke="#e0a928" stroke-width="1.4" fill="none"/>`,
  cactus: `<path d="M-7 0 L-5 -9 H5 L7 0Z" fill="#c8714a"/><rect x="-4.5" y="-27" width="9" height="19" rx="4.5" fill="#5fae5a"/>
<path d="M-4.5 -20 h-4 q-3 0 -3 -4 v-4" stroke="#5fae5a" stroke-width="3.6" fill="none" stroke-linecap="round"/><path d="M4.5 -16 h4 q3 0 3 -4 v-3" stroke="#5fae5a" stroke-width="3.6" fill="none" stroke-linecap="round"/>
<circle cx="0" cy="-23" r="1" fill="#f6efe3"/><circle cx="0" cy="-17" r="1" fill="#f6efe3"/>`,
  teapot: `<ellipse cx="0" cy="-8" rx="10" ry="8" fill="#e9eef0" stroke="${INK}" stroke-width="1.3"/><path d="M-4 -16 h8 v-3 h-8z" fill="#e9eef0" stroke="${INK}" stroke-width="1.3"/>
<path d="M9 -10 q8 -3 8 -9" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/><path d="M-10 -9 q-8 0 -8 8" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/><circle cx="0" cy="-21" r="1.6" fill="${INK}"/>`,
}

const RECEIPT = `<path d="M-14 0 l3 -4 h24 l3 4z" fill="#fffdf8" stroke="${INK}" stroke-width="1.1"/>
<path d="M-8 -1.6 h16 M-5 -2.8 h10" stroke="#a29c90" stroke-width="0.9"/>`

// Where accessories go on each animal (side view). eye and neck are [x, y]; hx/top/tilt place the hat.
export const ANCHORS = {
  fox: { eye: [60, 42], top: 36, hx: 49, tilt: 9, neck: [50, 61] },
  frog: { eye: [59.5, 37.4], top: 45, hx: 41, tilt: -8, neck: [50, 62] },
  sloth: { eye: [61.5, 43], top: 34.5, hx: 52, tilt: 6, neck: [50, 60] },
  penguin: { eye: [60, 42], top: 33, hx: 52, tilt: 11, neck: [50, 58] },
  capybara: { eye: [62, 41], top: 36.5, hx: 50, tilt: 9, neck: [50, 60] },
}

// Side-view versions of the accessories that look wrong from the side.
const SIDE = {
  glasses: '<circle cx="0" cy="0" r="5.4" fill="#fff" fill-opacity="0.25" stroke="#2b2118" stroke-width="1.6"/><path d="M-5 -1 L-14 -3" stroke="#2b2118" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
  bowtie: '<g transform="scale(.75)"><path d="M0 0 L-9 -5 L-9 5Z" fill="#c4513b"/><path d="M0 0 L9 -5 L9 5Z" fill="#c4513b"/><rect x="-2.4" y="-2.6" width="4.8" height="5.2" rx="1.2" fill="#9e3a28"/></g>',
  scarf: '<path d="M-12 -3 C-4 2 8 2 14 -3 L14 3 C8 8 -4 8 -12 3Z" fill="#3f7fae"/><path d="M-6 4 L-12 4 L-14 18 L-8 18Z" fill="#336a93"/><rect x="-12.4" y="10" width="5" height="2" fill="#f6f1e8"/>',
}

function dress(name, acc) {
  const k = ANCHORS[name]
  const at = (x, y, inner) => `<g transform="translate(${x} ${y})">${inner}</g>`
  let out = ''
  if (!acc) return out
  if (acc.neck) out += at(k.neck[0], k.neck[1], SIDE[acc.neck])
  if (acc.face === 'monocle') out += at(k.eye[0], k.eye[1], ACCESSORIES.monocle)
  else if (acc.face === 'glasses') out += at(k.eye[0], k.eye[1], SIDE.glasses)
  if (acc.hat) out += `<g transform="translate(${k.hx} ${k.top}) rotate(${k.tilt})">${ACCESSORIES[acc.hat]}</g>`
  return out
}

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

// Same odds as the avatars: a hat, a face piece and a neck piece, at least one of them.
// No mustache here: it does not read well in side view.
const TEA_FACES = FACES.map((f) => (f === 'mustache' ? null : f))
function randomAccessories() {
  let hat = pick(HATS), face = pick(TEA_FACES)
  const neck = pick(NECKS)
  if (!hat && !face && !neck) hat = 'tophat'
  return { hat, face, neck }
}

// left/right: keys of SEATED. thing: key of THINGS. accL/accR: { hat, face, neck }.
export function teaScene(left, right, thing, accL, accR) {
  const L = SEATED[left], R = SEATED[right]
  const person = (name, a, acc) => `${seated(a)}${dress(name, acc)}`
  return `<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two animals having tea at a low table">
<ellipse cx="150" cy="118" rx="132" ry="7" fill="#e4dfd2"/>
<g>${person(left, L, accL)}</g>
<g transform="translate(300 0) scale(-1 1)">${person(right, R, accR)}</g>
<g><rect x="108" y="96" width="84" height="7" rx="2" fill="#b98558" stroke="${INK}" stroke-width="1.3"/>
<rect x="114" y="103" width="6" height="12" fill="#9a6d43" stroke="${INK}" stroke-width="1.2"/><rect x="180" y="103" width="6" height="12" fill="#9a6d43" stroke="${INK}" stroke-width="1.2"/>
<g transform="translate(130 96)">${RECEIPT}</g><g transform="translate(166 96)">${THINGS[thing]}</g></g>
</svg>`
}

// A fresh random scene: two different animals, random accessories, one random table object.
export function randomTeaScene() {
  const names = Object.keys(SEATED)
  const a = pick(names)
  const b = pick(names.filter((n) => n !== a))
  return teaScene(a, b, pick(Object.keys(THINGS)), randomAccessories(), randomAccessories())
}
