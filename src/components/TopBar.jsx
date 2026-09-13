import { Phone } from 'lucide-react'

function TopBar() {
  return (
    <>
      {/* Red accent line at the very top */}
      <div className="topbar-accent-line"></div>
      
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <Phone size={14} />
              <span className="topbar-item-text">Toll Free – 1950</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
