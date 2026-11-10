import { registerPlugin } from '@capacitor/core'

// ReceiptOcr.recognize({ path }) -> { lines: [{ text, confidence, x, y, w, h }] }
// Boxes are normalised 0..1 with the origin at the bottom left (Apple Vision convention).
export const ReceiptOcr = registerPlugin('ReceiptOcr')
