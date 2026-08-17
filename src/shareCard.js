import { formatMoney } from './utils.js'

const COLORS = {
  bg: '#f2f7f4',
  card: '#ffffff',
  border: '#b9dcce',
  divider: '#eaf5f0',
  text: '#12211c',
  muted: '#8ba49b',
  green: '#19b083',
  greenDark: '#0e6b4f',
  totalBg: '#e7f4ee',
  warnBg: '#fff5e8',
  warnText: '#8a6a3a',
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.closePath()
}

export async function generateShareCard({ rows, grandTotal, currency, hasUnassigned, unassignedAmount }) {
  if (document.fonts?.load) {
    await Promise.all([
      document.fonts.load('700 18px "DM Sans"'),
      document.fonts.load('400 13px "DM Sans"'),
      document.fonts.load('500 18px "DM Mono"'),
    ]).catch(() => {})
  }

  const W = 640
  const PAD = 24
  const innerX = 24
  const headerH = 84
  const rowH = 92
  const totalH = 64
  const warnH = hasUnassigned ? 56 : 0
  const cardW = W - PAD * 2
  const cardH = headerH + rows.length * rowH + totalH + warnH
  const H = cardH + PAD * 2

  const dpr = Math.min(window.devicePixelRatio || 1, 3)
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(W * dpr)
  canvas.height = Math.round(H * dpr)
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  ctx.textBaseline = 'middle'

  ctx.fillStyle = COLORS.bg
  ctx.fillRect(0, 0, W, H)

  const cardX = PAD
  const cardY = PAD

  ctx.save()
  ctx.shadowColor = 'rgba(25,176,131,0.18)'
  ctx.shadowBlur = 24
  ctx.shadowOffsetY = 10
  ctx.fillStyle = COLORS.card
  roundRectPath(ctx, cardX, cardY, cardW, cardH, 24)
  ctx.fill()
  ctx.restore()

  ctx.save()
  roundRectPath(ctx, cardX, cardY, cardW, cardH, 24)
  ctx.clip()

  let y = cardY

  ctx.fillStyle = COLORS.green
  roundRectPath(ctx, cardX + innerX, y + 26, 14, 14, 4)
  ctx.fill()
  ctx.fillStyle = COLORS.text
  ctx.font = '700 18px "DM Sans"'
  ctx.fillText('EasyBillSplitting', cardX + innerX + 24, y + 33)

  ctx.fillStyle = COLORS.muted
  ctx.font = '400 13px "DM Sans"'
  const dateStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
  ctx.fillText(`Bill split · ${dateStr}`, cardX + innerX, y + 60)

  ctx.strokeStyle = COLORS.divider
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(cardX, y + headerH)
  ctx.lineTo(cardX + cardW, y + headerH)
  ctx.stroke()

  y += headerH

  rows.forEach((r) => {
    ctx.fillStyle = COLORS.green
    ctx.fillRect(cardX, y, 4, rowH)

    const rowCenterY = y + rowH / 2
    const avatarR = 24
    const avatarCx = cardX + innerX + avatarR
    const avatarCy = rowCenterY
    const grad = ctx.createLinearGradient(avatarCx - avatarR, avatarCy - avatarR, avatarCx + avatarR, avatarCy + avatarR)
    grad.addColorStop(0, COLORS.green)
    grad.addColorStop(1, COLORS.greenDark)
    ctx.beginPath()
    ctx.arc(avatarCx, avatarCy, avatarR, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = '700 18px "DM Sans"'
    ctx.textAlign = 'center'
    ctx.fillText((r.name.trim().charAt(0) || '?').toUpperCase(), avatarCx, avatarCy + 1)
    ctx.textAlign = 'left'

    const textX = avatarCx + avatarR + 14
    ctx.fillStyle = COLORS.text
    ctx.font = '700 17px "DM Sans"'
    ctx.fillText(r.name, textX, rowCenterY - 12)

    ctx.fillStyle = COLORS.muted
    ctx.font = '400 13px "DM Sans"'
    ctx.fillText(
      `${formatMoney(r.sub, currency)} items · ${formatMoney(r.tax, currency)} tax · ${formatMoney(r.tip, currency)} tip`,
      textX, rowCenterY + 12
    )

    ctx.fillStyle = COLORS.greenDark
    ctx.font = '500 22px "DM Mono"'
    ctx.textAlign = 'right'
    ctx.fillText(formatMoney(r.total, currency), cardX + cardW - innerX, rowCenterY + 1)
    ctx.textAlign = 'left'

    ctx.strokeStyle = COLORS.divider
    ctx.beginPath()
    ctx.moveTo(cardX, y + rowH)
    ctx.lineTo(cardX + cardW, y + rowH)
    ctx.stroke()

    y += rowH
  })

  ctx.fillStyle = COLORS.totalBg
  ctx.fillRect(cardX, y, cardW, totalH)
  ctx.strokeStyle = COLORS.border
  ctx.beginPath()
  ctx.moveTo(cardX, y)
  ctx.lineTo(cardX + cardW, y)
  ctx.stroke()

  ctx.fillStyle = COLORS.greenDark
  ctx.font = '700 15px "DM Sans"'
  ctx.fillText('Bill total', cardX + innerX, y + totalH / 2)
  ctx.font = '500 18px "DM Mono"'
  ctx.textAlign = 'right'
  ctx.fillText(formatMoney(grandTotal, currency), cardX + cardW - innerX, y + totalH / 2 + 1)
  ctx.textAlign = 'left'

  y += totalH

  if (hasUnassigned) {
    ctx.fillStyle = COLORS.warnBg
    ctx.fillRect(cardX, y, cardW, warnH)
    ctx.fillStyle = COLORS.warnText
    ctx.font = '400 13px "DM Sans"'
    ctx.fillText(`${formatMoney(unassignedAmount, currency)} of items isn't assigned to anyone yet.`, cardX + innerX, y + warnH / 2)
  }

  ctx.restore()

  ctx.strokeStyle = COLORS.border
  ctx.lineWidth = 1.5
  roundRectPath(ctx, cardX, cardY, cardW, cardH, 24)
  ctx.stroke()

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1))
}

export function buildShareText({ rows, grandTotal, currency }) {
  const lines = rows.map((r) => `${r.name}: ${formatMoney(r.total, currency)}`)
  return `Bill split, total ${formatMoney(grandTotal, currency)}\n${lines.join('\n')}`
}
