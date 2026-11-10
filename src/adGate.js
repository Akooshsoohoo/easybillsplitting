import { useSyncExternalStore } from 'react'

// Tiny shared switchboard: screens say "hide the banner" or "intro is open" by key.
// The banner shows only while no key is set. Nothing here touches the ad SDK.
const keys = new Set()
const subs = new Set()
let snapshot = ''

function emit() {
  snapshot = [...keys].sort().join(',')
  subs.forEach((f) => f())
}
const subscribe = (f) => { subs.add(f); return () => subs.delete(f) }

export function setGate(key, on) {
  const had = keys.has(key)
  if (on === had) return
  on ? keys.add(key) : keys.delete(key)
  emit()
}

// The current set of keys as a string, for components that need to react.
export function useGateKeys() {
  return useSyncExternalStore(subscribe, () => snapshot, () => '')
}

// First-launch intro flag, shared so the ad flow can wait for the intro to finish.
const ONBOARDED_KEY = 'ebs_onboarded_v1'
export function introSeen() {
  try { return localStorage.getItem(ONBOARDED_KEY) === '1' } catch { return false }
}
export function markIntroSeen() {
  try { localStorage.setItem(ONBOARDED_KEY, '1') } catch { /* storage unavailable, show again next launch */ }
}
