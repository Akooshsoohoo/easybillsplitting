const KEY = 'ebs_history_v1'
const MAX_ENTRIES = 50

export function loadHistory() {
  try {
    const raw = localStorage.getItem(KEY)
    const list = raw ? JSON.parse(raw) : []
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

function writeHistory(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // Storage may be unavailable (private browsing, quota, etc). Fail silently.
  }
}

export function saveHistoryEntry(entry) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const next = [{ id, createdAt: Date.now(), ...entry }, ...loadHistory()].slice(0, MAX_ENTRIES)
  writeHistory(next)
  return next
}

export function removeHistoryEntry(id) {
  const next = loadHistory().filter((e) => e.id !== id)
  writeHistory(next)
  return next
}

export function clearHistory() {
  writeHistory([])
  return []
}
