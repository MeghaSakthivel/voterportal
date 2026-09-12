import { Accessibility, ArrowUp } from 'lucide-react'

function AccessibilityButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <button type="button" className="accessibility-button" aria-label="Open accessibility options">
        <Accessibility size={18} />
      </button>

      <button type="button" className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={18} />
      </button>
    </>
  )
}

export default AccessibilityButton
