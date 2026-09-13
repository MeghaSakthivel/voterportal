import { ArrowRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Voter Services', to: '/voter' },
  { label: 'Track Application', to: '/track' },
  { label: 'Grievance', to: '/grievance' },
  { label: 'News', to: '/news' },
  { label: 'FAQ', to: '/faq' },
  { label: 'About', to: '/about' },
]

const searchableItems = [
  { label: 'Voter Services', type: 'Service', to: '/voter' },
  { label: 'Apply for Service', type: 'Service', to: '/services' },
  { label: 'Track Application', type: 'Service', to: '/track' },
  { label: 'Current Issues', type: 'News', to: '/news' },
  { label: 'Press Releases', type: 'News', to: '/news' },
  { label: 'Important Information', type: 'News', to: '/news' },
  { label: 'Frequently Asked Questions', type: 'FAQ', to: '/faq' },
  { label: 'Grievance Portal', type: 'Service', to: '/grievance' },
]

function Header() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return []
    }

    return searchableItems.filter((item) => item.label.toLowerCase().includes(normalized))
  }, [query])

  return (
    <>
      {/* Brand/Logo Bar */}
      <div className="brand-bar">
        <div className="container brand-bar-inner">
          <Link to="/" className="brand" aria-label="Election Commission of India home">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" className="brand-icon" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.2"/>
                <path d="M12 3v18M3 12h18" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="3" strokeWidth="1.2"/>
              </svg>
            </div>
            <div className="brand-copy">
              <strong>Election Commission of India</strong>
              <small>Voter Services Portal</small>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="main-header">
        <div className="container header-inner">
          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, news..."
                aria-label="Search services and updates"
              />

              {results.length > 0 && (
                <div className="search-results" role="listbox" aria-label="Search results">
                  {results.slice(0, 5).map((item) => (
                    <Link key={`${item.label}-${item.type}`} to={item.to} className="search-result-item">
                      <span>{item.label}</span>
                      <small>{item.type}</small>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button type="button" className="header-search-btn">
              Search
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
