import { Filesystem, Directory } from '@capacitor/filesystem'
import { Share } from '@capacitor/share'

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onloadend = () => resolve(String(r.result).split(',')[1])
    r.onerror = reject
    r.readAsDataURL(blob)
  })
}

// Writes the share card to the app cache, then opens the iOS share sheet.
export async function shareImageNative(blob, text) {
  const data = await blobToBase64(blob)
  const { uri } = await Filesystem.writeFile({ path: 'bill-split.png', data, directory: Directory.Cache })
  await Share.share({ title: 'Bill split', text, files: [uri] })
}
