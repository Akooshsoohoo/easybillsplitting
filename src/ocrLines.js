// Rebuilds receipt rows from OCR pieces that carry a position.
// Apple Vision often returns "BURGER" and "12.50" as two separate pieces on one row.
// Pieces whose vertical centres are close belong to the same row; each row is read left to right.
// Boxes are normalised, origin at the bottom left, so a higher y is higher on the page.

export function linesToText(pieces) {
  const items = (pieces || [])
    .filter((p) => p && typeof p.text === 'string' && p.text.trim())
    .map((p) => ({ text: p.text.trim(), x: p.x || 0, yc: (p.y || 0) + (p.h || 0) / 2, h: p.h || 0 }))
    .sort((a, b) => b.yc - a.yc)

  const rows = []
  for (const it of items) {
    const row = rows[rows.length - 1]
    // Same row when the centres differ by less than half the taller piece.
    if (row && Math.abs(row.yc - it.yc) < Math.max(row.h, it.h) * 0.5) {
      row.parts.push(it)
      row.h = Math.max(row.h, it.h)
    } else {
      rows.push({ yc: it.yc, h: it.h, parts: [it] })
    }
  }
  return rows.map((r) => r.parts.sort((a, b) => a.x - b.x).map((p) => p.text).join(' ')).join('\n')
}
