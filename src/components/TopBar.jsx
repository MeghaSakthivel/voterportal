import { Globe, Home, Languages, Menu, MessageSquare, Phone, Send } from 'lucide-react'

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <button type="button" className="icon-button" aria-label="Open menu">
            <Menu size={16} />
          </button>
          <button type="button" className="icon-button" aria-label="Home">
            <Home size={15} />
          </button>
          <span className="topbar-item">
            <Phone size={14} />
            Toll Free – 1950
          </span>
        </div>

        <div className="topbar-right">
          <div className="social-links" aria-label="Social media links">
            <a href="#" aria-label="Updates"><Globe size={14} /></a>
            <a href="#" aria-label="Messages"><MessageSquare size={14} /></a>
            <a href="#" aria-label="Connect"><Send size={14} /></a>
          </div>

          <a href="#" className="topbar-link">
            <Globe size={14} />
            Screen Reader Access
          </a>
          <a href="#main-content" className="topbar-link">
            Skip to Main Content
          </a>
          <button type="button" className="language-button">
            <Languages size={15} />
            हिंदी में देखें
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
