import { ArrowRight, ChevronDown, Search } from 'lucide-react'
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
    <header className="main-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="CivicConnect home">
          <div className="brand-mark">
            <span className="brand-ring" />
            <span className="brand-center" />
          </div>
          <div className="brand-copy">
            <strong>CivicConnect</strong>
            <small>Unified Digital Services</small>
          </div>
        </Link>

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

          <button type="button" className="primary-btn header-search-btn">
            Search
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
