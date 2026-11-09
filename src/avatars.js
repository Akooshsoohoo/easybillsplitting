// Flat animal avatars. An avatar is { animal, hat, face, neck, bg }.
// Everything is inline SVG on a 64x64 canvas, so it works offline and draws into the share image.

const SHOULDERS = (c) => `<path d="M8 64 C8 50 18 47 32 47 C46 47 56 50 56 64 Z" fill="${c}"/>`

// eye: where a monocle goes. top: where a hat sits. mus: where a mustache goes.
export const ANIMALS = {
  sloth: { eye: [40.4, 32.4], top: 20.5, mus: 41.5, svg: `${SHOULDERS('#9c7e60')}
<ellipse cx="32" cy="34" rx="17" ry="15.5" fill="#d6bb98"/>
<path d="M17 30 C17 25 24 26 27 31 C28 36 24 39 20 38 C17 36 17 33 17 30Z" fill="#6b533d"/>
<path d="M47 30 C47 25 40 26 37 31 C36 36 40 39 44 38 C47 36 47 33 47 30Z" fill="#6b533d"/>
<circle cx="23.6" cy="32.4" r="2.3" fill="#f6efe3"/><circle cx="40.4" cy="32.4" r="2.3" fill="#f6efe3"/>
<circle cx="23.9" cy="32.6" r="1.1" fill="#1d1a17"/><circle cx="40.1" cy="32.6" r="1.1" fill="#1d1a17"/>
<ellipse cx="32" cy="38.5" rx="3.2" ry="2.2" fill="#3b2d22"/>
<path d="M28 42.5 Q32 45.5 36 42.5" stroke="#3b2d22" stroke-width="1.4" fill="none" stroke-linecap="round"/>` },
  pigeon: { eye: [39.5, 31], top: 19, mus: 44, svg: `${SHOULDERS('#8794a3')}
<path d="M19 53 C24 46 40 46 45 53 C40 50 24 50 19 53Z" fill="#6fa795"/>
<circle cx="32" cy="34" r="16" fill="#aab4c0"/>
<circle cx="24.5" cy="31" r="3.2" fill="#f0a03a"/><circle cx="39.5" cy="31" r="3.2" fill="#f0a03a"/>
<circle cx="24.8" cy="31.2" r="1.5" fill="#1d1a17"/><circle cx="39.2" cy="31.2" r="1.5" fill="#1d1a17"/>
<path d="M28 36 L36 36 L32 43.5Z" fill="#e9c9a0"/><ellipse cx="32" cy="36" rx="2.8" ry="1.4" fill="#f3efe6"/>` },
  fox: { eye: [39, 33], top: 26, mus: 47.5, svg: `${SHOULDERS('#d9762b')}
<path d="M15 25 L17 6 L28 18Z" fill="#ea8a3f"/><path d="M49 25 L47 6 L36 18Z" fill="#ea8a3f"/>
<path d="M18.5 20 L18.8 11.5 L24.5 17Z" fill="#3b2a20"/><path d="M45.5 20 L45.2 11.5 L39.5 17Z" fill="#3b2a20"/>
<path d="M16 30 C16 20 48 20 48 30 C48 42 40 50 32 50 C24 50 16 42 16 30Z" fill="#ea8a3f"/>
<path d="M16 32 C22 34 27 40 32 49.5 C24 50 17 42 16 32Z" fill="#fff4e6"/>
<path d="M48 32 C42 34 37 40 32 49.5 C40 50 47 42 48 32Z" fill="#fff4e6"/>
<circle cx="25" cy="33" r="1.9" fill="#1d1a17"/><circle cx="39" cy="33" r="1.9" fill="#1d1a17"/>
<ellipse cx="32" cy="45.5" rx="2.8" ry="2.1" fill="#2b2118"/>` },
  frog: { eye: [41.5, 26], top: 18.5, mus: 44, svg: `${SHOULDERS('#5fae5a')}
<ellipse cx="32" cy="37" rx="18" ry="14" fill="#79c66f"/>
<circle cx="22.5" cy="26" r="6.8" fill="#79c66f"/><circle cx="41.5" cy="26" r="6.8" fill="#79c66f"/>
<circle cx="22.5" cy="26" r="4.6" fill="#fff6e8"/><circle cx="41.5" cy="26" r="4.6" fill="#fff6e8"/>
<circle cx="23" cy="26.4" r="2.3" fill="#1d1a17"/><circle cx="41" cy="26.4" r="2.3" fill="#1d1a17"/>
<path d="M21 42 Q32 49 43 42" stroke="#2f6b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<circle cx="29" cy="38" r="1" fill="#2f6b3a"/><circle cx="35" cy="38" r="1" fill="#2f6b3a"/>` },
  owl: { eye: [39, 32], top: 21, mus: 43.5, svg: `${SHOULDERS('#8a6444')}
<path d="M16 25 L15 10 L26 19Z" fill="#a77c58"/><path d="M48 25 L49 10 L38 19Z" fill="#a77c58"/>
<ellipse cx="32" cy="34" rx="17" ry="16" fill="#a77c58"/>
<circle cx="25" cy="32" r="7.6" fill="#f6ead6"/><circle cx="39" cy="32" r="7.6" fill="#f6ead6"/>
<circle cx="25.6" cy="32.4" r="3.3" fill="#1d1a17"/><circle cx="39.6" cy="32.4" r="3.3" fill="#1d1a17"/>
<circle cx="26.6" cy="31.2" r="1" fill="#f6ead6"/><circle cx="40.6" cy="31.2" r="1" fill="#f6ead6"/>
<path d="M29.5 36.5 L34.5 36.5 L32 42.5Z" fill="#e8a23a"/>` },
  hedgehog: { eye: [38.5, 35.5], top: 18, mus: 46.5, svg: `${SHOULDERS('#8c6e56')}
<path d="M12 38 L14 28 L12 24 L18 22 L18 16 L25 17 L28 11 L32 15 L36 11 L39 17 L46 16 L46 22 L52 24 L50 28 L52 38 C44 30 20 30 12 38Z" fill="#5a4636"/>
<path d="M17 38 C17 28 25 26 32 26 C39 26 47 28 47 38 C47 46 40 51 32 51 C24 51 17 46 17 38Z" fill="#ecd3b0"/>
<circle cx="25.5" cy="35.5" r="1.9" fill="#1d1a17"/><circle cx="38.5" cy="35.5" r="1.9" fill="#1d1a17"/>
<circle cx="32" cy="43" r="2.6" fill="#2b2118"/>` },
  capybara: { eye: [39.5, 30], top: 21, mus: 44.5, svg: `${SHOULDERS('#9a6f48')}
<circle cx="19" cy="22" r="4.2" fill="#b98a5c"/><circle cx="45" cy="22" r="4.2" fill="#b98a5c"/>
<circle cx="19" cy="22" r="2" fill="#8a5f3c"/><circle cx="45" cy="22" r="2" fill="#8a5f3c"/>
<path d="M15 32 C15 22 24 19 32 19 C40 19 49 22 49 32 C49 42 44 51 32 51 C20 51 15 42 15 32Z" fill="#b98a5c"/>
<rect x="23" y="35" width="18" height="14" rx="7" fill="#cfa579"/>
<circle cx="28.5" cy="39" r="1.3" fill="#3b2a20"/><circle cx="35.5" cy="39" r="1.3" fill="#3b2a20"/>
<path d="M29 44.5 Q32 46.5 35 44.5" stroke="#3b2a20" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<circle cx="24.5" cy="30" r="1.9" fill="#1d1a17"/><circle cx="39.5" cy="30" r="1.9" fill="#1d1a17"/>` },
  penguin: { eye: [39, 33], top: 20, mus: 44.5, svg: `${SHOULDERS('#2f3a45')}
<path d="M22 64 C22 53 27 49 32 49 C37 49 42 53 42 64Z" fill="#f6f1e8"/>
<circle cx="32" cy="34" r="16" fill="#2f3a45"/>
<path d="M17 34 C17 28 22 25 26 28 C29 30 35 30 38 28 C42 25 47 28 47 34 C47 42 40 49 32 49 C24 49 17 42 17 34Z" fill="#f6f1e8"/>
<circle cx="25" cy="33" r="1.9" fill="#1d1a17"/><circle cx="39" cy="33" r="1.9" fill="#1d1a17"/>
<path d="M28.5 37.5 L35.5 37.5 L32 43.5Z" fill="#f09a3a"/>` },
  goat: { eye: [38.5, 31], top: 22, mus: 46, svg: `${SHOULDERS('#d6c8ae')}
<path d="M23 22 C20 12 14 10 11 12 C15 14 17 19 19 25Z" fill="#c9b99a"/><path d="M41 22 C44 12 50 10 53 12 C49 14 47 19 45 25Z" fill="#c9b99a"/>
<path d="M16 31 L6 28 L15 37Z" fill="#e3d5bd"/><path d="M48 31 L58 28 L49 37Z" fill="#e3d5bd"/>
<path d="M18 28 C18 20 46 20 46 28 C46 36 42 44 37 49.5 L27 49.5 C22 44 18 36 18 28Z" fill="#efe6d6"/>
<rect x="25" y="39" width="14" height="11" rx="5.5" fill="#fbf5ea"/>
<ellipse cx="32" cy="42.5" rx="3" ry="1.8" fill="#c97a7a"/>
<path d="M28 50 L32 60 L36 50Z" fill="#d9ccb4"/>
<circle cx="25.5" cy="31" r="1.9" fill="#1d1a17"/><circle cx="38.5" cy="31" r="1.9" fill="#1d1a17"/>` },
  cat: { eye: [39, 33], top: 22, mus: 44.5, svg: `${SHOULDERS('#767689')}
<path d="M16 27 L18 8 L30 19Z" fill="#8f8fa0"/><path d="M48 27 L46 8 L34 19Z" fill="#8f8fa0"/>
<path d="M19.5 21 L19.8 13 L25.5 18Z" fill="#e7a9b3"/><path d="M44.5 21 L44.2 13 L38.5 18Z" fill="#e7a9b3"/>
<ellipse cx="32" cy="35" rx="17" ry="15" fill="#8f8fa0"/>
<ellipse cx="25" cy="33" rx="3.2" ry="3.5" fill="#f0d46a"/><ellipse cx="39" cy="33" rx="3.2" ry="3.5" fill="#f0d46a"/>
<ellipse cx="25" cy="33" rx="1.1" ry="2.8" fill="#1d1a17"/><ellipse cx="39" cy="33" rx="1.1" ry="2.8" fill="#1d1a17"/>
<path d="M29.5 39.5 L34.5 39.5 L32 42.5Z" fill="#e7a9b3"/>
<path d="M32 42.5 L32 44.5 M32 44.5 Q29.5 46.5 27 44.5 M32 44.5 Q34.5 46.5 37 44.5" stroke="#3a3a46" stroke-width="1.2" fill="none" stroke-linecap="round"/>
<path d="M17 40 L9 38.5 M17 43 L9 44 M47 40 L55 38.5 M47 43 L55 44" stroke="#3a3a46" stroke-width="0.9" fill="none" stroke-linecap="round"/>` },
}

// Accessories are drawn around the origin and moved into place.
const ACCESSORIES = {
  tophat: `<ellipse cx="0" cy="0" rx="14" ry="2.7" fill="#1f2430"/><rect x="-9" y="-14" width="18" height="14" rx="1.6" fill="#1f2430"/><rect x="-9" y="-5" width="18" height="3.6" fill="#c4513b"/>`,
  bowler: `<path d="M-11 0 C-11 -11 11 -11 11 0Z" fill="#6a4a3a"/><ellipse cx="0" cy="0" rx="15" ry="2.4" fill="#5a3d2f"/><rect x="-11" y="-3.6" width="22" height="3" fill="#2b2118"/>`,
  crown: `<path d="M-10 0 L-12 -12 L-6 -7 L0 -14 L6 -7 L12 -12 L10 0Z" fill="#f2b632"/><circle cx="0" cy="-4.5" r="1.5" fill="#d9483b"/><circle cx="-6" cy="-3" r="1.1" fill="#3f7fae"/><circle cx="6" cy="-3" r="1.1" fill="#3f7fae"/>`,
  monocle: `<circle cx="0" cy="0" r="6.2" fill="#ffffff" fill-opacity="0.3" stroke="#d9a21b" stroke-width="1.8"/><path d="M4.4 4.6 C9 10 8 16 10 22" stroke="#d9a21b" stroke-width="1" fill="none"/>`,
  glasses: `<circle cx="-7" cy="0" r="5.4" fill="#ffffff" fill-opacity="0.25" stroke="#2b2118" stroke-width="1.6"/><circle cx="7" cy="0" r="5.4" fill="#ffffff" fill-opacity="0.25" stroke="#2b2118" stroke-width="1.6"/><path d="M-1.6 -0.6 Q0 -2.2 1.6 -0.6" stroke="#2b2118" stroke-width="1.4" fill="none"/>`,
  mustache: `<path d="M0 -1.6 C-3 -4.6 -9 -4 -11 0.6 C-7 -0.8 -4 0.3 0 1 C4 0.3 7 -0.8 11 0.6 C9 -4 3 -4.6 0 -1.6Z" fill="#3b2a20"/><path d="M-11 0.6 C-13.4 0 -13.8 -2.6 -11.6 -3.6" stroke="#3b2a20" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M11 0.6 C13.4 0 13.8 -2.6 11.6 -3.6" stroke="#3b2a20" stroke-width="1.2" fill="none" stroke-linecap="round"/>`,
  bowtie: `<path d="M0 0 L-9 -5 L-9 5Z" fill="#c4513b"/><path d="M0 0 L9 -5 L9 5Z" fill="#c4513b"/><rect x="-2.4" y="-2.6" width="4.8" height="5.2" rx="1.2" fill="#9e3a28"/>`,
  scarf: `<path d="M14 -3 C22 2 42 2 50 -3 L50 3 C42 8 22 8 14 3Z" fill="#3f7fae"/><path d="M38 4 L45.5 4 L47.5 18 L40 18Z" fill="#336a93"/><rect x="39.4" y="10" width="7" height="2" fill="#f6f1e8"/>`,
}

export const BACKGROUNDS = ['#d7efe4', '#f8e7b4', '#f7d3d0', '#cfe3f4', '#e0d6f1', '#fbdcc2', '#dbe5c7', '#efe4d0']

const HATS = ['tophat', 'bowler', 'crown', null, 'tophat']
const FACES = ['monocle', 'glasses', 'mustache', null, 'monocle']
const NECKS = ['bowtie', 'scarf', null, null]
const animalIds = Object.keys(ANIMALS)

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

// A random avatar that avoids animals and tints already used on this bill when it can.
export function randomAvatar(used = []) {
  const freeAnimals = animalIds.filter((id) => !used.some((u) => u && u.animal === id))
  const animal = pick(freeAnimals.length ? freeAnimals : animalIds)
  const freeBgs = BACKGROUNDS.filter((c) => !used.some((u) => u && u.bg === c))
  const bg = pick(freeBgs.length ? freeBgs : BACKGROUNDS)

  let hat = pick(HATS)
  let face = pick(FACES)
  const neck = pick(NECKS)
  if (animal === 'frog' && face === 'glasses') face = 'monocle'
  if (!hat && !face && !neck) hat = 'tophat'
  return { animal, hat, face, neck, bg }
}

function place(name, x, y) {
  return `<g transform="translate(${x} ${y})">${ACCESSORIES[name]}</g>`
}

// The inside of the <svg viewBox="0 0 64 64">.
export function avatarInner(av) {
  const a = av && ANIMALS[av.animal]
  if (!a) return ''
  let out = `<rect width="64" height="64" fill="${av.bg}"/>${a.svg}`
  if (av.neck) out += place(av.neck, av.neck === 'scarf' ? 0 : 32, 50)
  if (av.face === 'monocle') out += place('monocle', a.eye[0], a.eye[1])
  else if (av.face === 'glasses') out += place('glasses', 32, a.eye[1])
  else if (av.face === 'mustache') out += place('mustache', 32, a.mus)
  if (av.hat) out += place(av.hat, 32, a.top)
  return out
}

export function avatarSvg(av, size = 96) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">${avatarInner(av)}</svg>`
}

// For drawing into a canvas (the share image).
export function avatarImage(av, size = 96) {
  return new Promise((resolve) => {
    if (!av || !ANIMALS[av.animal]) return resolve(null)
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(avatarSvg(av, size))
  })
}
