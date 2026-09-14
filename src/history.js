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

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

// Creates a new entry, or updates the one at `id` in place if it already exists.
// Used for autosave: the first save creates the record, later edits to the same
// split update it instead of piling up duplicates. Returns the saved record.
export function upsertHistoryEntry(id, entry) {
  const list = loadHistory()
  const idx = id ? list.findIndex((e) => e.id === id) : -1
  if (idx === -1) {
    const record = { id: id || makeId(), createdAt: Date.now(), ...entry }
    writeHistory([record, ...list].slice(0, MAX_ENTRIES))
    return record
  }
  const record = { ...list[idx], ...entry }
  const next = [...list]
  next[idx] = record
  writeHistory(next)
  return record
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
