import { formatMoney, breakdownText } from './utils.js'
import { avatarImage } from './avatars.js'

const COLORS = {
  bg: '#f6f3ee',
  card: '#ffffff',
  ink: '#1c1b18',
  soft: '#faf8f4',
  divider: '#e8e4dc',
  muted: '#6f6a60',
  green: '#19b083',
  greenDark: '#0e6b4f',
  totalTint: '#e7f4ee',
  warnBg: '#fff5e8',
  warnText: '#8a6a3a',
}

export const SITE_URL = 'easybillsplitting.com'
export const SITE_LINK = 'https://www.easybillsplitting.com'

const FONT = '"General Sans", system-ui, sans-serif'

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

// The site mark: a rounded square holding two dots and a bar, like the favicon.
function drawLogo(ctx, x, y, s) {
  const k = s / 64
  ctx.fillStyle = COLORS.card
  roundRectPath(ctx, x, y, s, s, s * 0.26)
  ctx.fill()
  ctx.lineWidth = 2.5
  ctx.strokeStyle = COLORS.ink
  ctx.stroke()
  ctx.fillStyle = COLORS.green
  ctx.beginPath(); ctx.arc(x + 32 * k, y + 18 * k, 6 * k, 0, Math.PI * 2); ctx.fill()
  roundRectPath(ctx, x + 14 * k, y + 29 * k, 36 * k, 6 * k, 3 * k); ctx.fill()
  ctx.beginPath(); ctx.arc(x + 32 * k, y + 46 * k, 6 * k, 0, Math.PI * 2); ctx.fill()
}

export async function generateShareCard({ rows, grandTotal, currency, savings = 0, hasUnassigned, unassignedAmount }) {
  const hasSavings = savings > 0.005
  if (document.fonts?.load) {
    await Promise.all([
      document.fonts.load('700 20px "General Sans"'),
      document.fonts.load('600 16px "General Sans"'),
      document.fonts.load('500 14px "General Sans"'),
      document.fonts.load('400 14px "General Sans"'),
    ]).catch(() => {})
  }

  const W = 680
  const PAD = 28
  const SHADOW = 7
  const BORDER = 2.5
  const innerX = 26
  const headerH = 96
  const rowH = 100
  const totalH = 88
  const savingsH = hasSavings ? 54 : 0
  const warnH = hasUnassigned ? 58 : 0
  const footerH = 64
  const cardW = W - PAD * 2 - SHADOW
  const cardH = headerH + rows.length * rowH + totalH + savingsH + warnH + footerH
  const H = cardH + PAD * 2 + SHADOW

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
  const R = 14

  // Hard offset shadow, like the cards in the app.
  ctx.fillStyle = COLORS.ink
  roundRectPath(ctx, cardX + SHADOW, cardY + SHADOW, cardW, cardH, R)
  ctx.fill()

  ctx.fillStyle = COLORS.card
  roundRectPath(ctx, cardX, cardY, cardW, cardH, R)
  ctx.fill()

  ctx.save()
  roundRectPath(ctx, cardX, cardY, cardW, cardH, R)
  ctx.clip()

  const rule = (yy) => {
    ctx.fillStyle = COLORS.ink
    ctx.fillRect(cardX, yy - BORDER / 2, cardW, BORDER)
  }

  let y = cardY

  // Header band
  ctx.fillStyle = COLORS.green
  ctx.fillRect(cardX, y, cardW, headerH)
  drawLogo(ctx, cardX + innerX, y + (headerH - 44) / 2, 44)
  ctx.fillStyle = COLORS.ink
  ctx.font = `700 25px ${FONT}`
  ctx.fillText('EasyBillSplitting', cardX + innerX + 44 + 16, y + headerH / 2 - 11)
  ctx.font = `500 15px ${FONT}`
  const dateStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
  ctx.fillText(`Bill split · ${dateStr}`, cardX + innerX + 44 + 16, y + headerH / 2 + 15)
  y += headerH
  rule(y)

  const avatarImgs = await Promise.all(rows.map((r) => avatarImage(r.avatar, 224)))

  rows.forEach((r, idx) => {
    const rowCenterY = y + rowH / 2
    const avatarR = 29
    const avatarCx = cardX + innerX + avatarR
    const avatarCy = rowCenterY
    const avImg = avatarImgs[idx]

    ctx.save()
    ctx.beginPath()
    ctx.arc(avatarCx, avatarCy, avatarR, 0, Math.PI * 2)
    ctx.clip()
    if (avImg) {
      ctx.drawImage(avImg, avatarCx - avatarR, avatarCy - avatarR, avatarR * 2, avatarR * 2)
    } else {
      ctx.fillStyle = COLORS.green
      ctx.fill()
      ctx.fillStyle = '#fff'
      ctx.font = `700 22px ${FONT}`
      ctx.textAlign = 'center'
      ctx.fillText((r.name.trim().charAt(0) || '?').toUpperCase(), avatarCx, avatarCy + 1)
      ctx.textAlign = 'left'
    }
    ctx.restore()
    ctx.beginPath()
    ctx.arc(avatarCx, avatarCy, avatarR, 0, Math.PI * 2)
    ctx.lineWidth = 2.5
    ctx.strokeStyle = COLORS.ink
    ctx.stroke()

    const textX = avatarCx + avatarR + 18
    ctx.fillStyle = COLORS.ink
    ctx.font = `700 21px ${FONT}`
    ctx.fillText(r.name, textX, rowCenterY - 13)

    ctx.fillStyle = COLORS.muted
    ctx.font = `400 14px ${FONT}`
    ctx.fillText(breakdownText(r, currency), textX, rowCenterY + 15)

    ctx.fillStyle = COLORS.greenDark
    ctx.font = `700 28px ${FONT}`
    ctx.textAlign = 'right'
    ctx.fillText(formatMoney(r.total, currency), cardX + cardW - innerX, rowCenterY + 1)
    ctx.textAlign = 'left'

    y += rowH
    ctx.fillStyle = COLORS.divider
    ctx.fillRect(cardX, y - 1.5, cardW, 1.5)
  })

  // Total bar
  ctx.fillStyle = COLORS.ink
  ctx.fillRect(cardX, y, cardW, totalH)
  ctx.fillStyle = '#faf8f4'
  ctx.font = `700 19px ${FONT}`
  ctx.fillText('Bill total', cardX + innerX, y + totalH / 2 + 1)
  ctx.fillStyle = COLORS.green
  ctx.font = `700 34px ${FONT}`
  ctx.textAlign = 'right'
  ctx.fillText(formatMoney(grandTotal, currency), cardX + cardW - innerX, y + totalH / 2 + 2)
  ctx.textAlign = 'left'
  y += totalH

  if (hasSavings) {
    ctx.fillStyle = COLORS.totalTint
    ctx.fillRect(cardX, y, cardW, savingsH)
    ctx.fillStyle = COLORS.greenDark
    ctx.font = `700 16px ${FONT}`
    ctx.fillText('You saved', cardX + innerX, y + savingsH / 2 + 1)
    ctx.font = `700 20px ${FONT}`
    ctx.textAlign = 'right'
    ctx.fillText(formatMoney(savings, currency), cardX + cardW - innerX, y + savingsH / 2 + 1)
    ctx.textAlign = 'left'
    y += savingsH
  }

  if (hasUnassigned) {
    ctx.fillStyle = COLORS.warnBg
    ctx.fillRect(cardX, y, cardW, warnH)
    ctx.fillStyle = COLORS.warnText
    ctx.font = `500 14px ${FONT}`
    ctx.fillText(`${formatMoney(unassignedAmount, currency)} of items isn't assigned to anyone yet.`, cardX + innerX, y + warnH / 2 + 1)
    y += warnH
  }

  // Footer with the link
  rule(y)
  ctx.fillStyle = COLORS.soft
  ctx.fillRect(cardX, y, cardW, footerH)
  ctx.fillStyle = COLORS.ink
  ctx.font = `600 16px ${FONT}`
  ctx.textAlign = 'center'
  ctx.fillText(`Split your own bill at ${SITE_URL}`, cardX + cardW / 2, y + footerH / 2 + 1)
  ctx.textAlign = 'left'

  ctx.restore()

  // Outline
  ctx.lineWidth = BORDER
  ctx.strokeStyle = COLORS.ink
  roundRectPath(ctx, cardX, cardY, cardW, cardH, R)
  ctx.stroke()

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1))
}

// The message that travels with the image. The link is a full URL so Messages and other apps make it tappable.
export function buildShareText({ rows, grandTotal, currency, savings = 0 }) {
  const lines = rows.map((r) => `${r.name}: ${formatMoney(r.total, currency)}`)
  const saved = savings > 0.005 ? `\nSaved ${formatMoney(savings, currency)}` : ''
  return `Bill split, total ${formatMoney(grandTotal, currency)}\n${lines.join('\n')}${saved}\n\nSplit yours: ${SITE_LINK}`
}
