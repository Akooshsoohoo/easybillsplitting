import { useEffect, useRef } from 'react'

function CoffeeButtonSlot() {
  const ref = useRef(null)

  useEffect(() => {
    function attach() {
      const el = document.querySelector('.bmc-btn-container')
      if (el && ref.current) {
        ref.current.appendChild(el)
        return true
      }
      return false
    }
    if (attach()) return
    const observer = new MutationObserver(() => { if (attach()) observer.disconnect() })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="bmc-slot" />
}

export default function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px 0 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ width: 13, height: 13, borderRadius: 4, background: '#19b083' }} />
        <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>EasyBillSplitting</span>
      </div>
      <CoffeeButtonSlot />
    </header>
  )
}
