import { useState } from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'

const steps = [
  'Application Submitted',
  'Document Verification',
  'Department Processing',
  'Approved',
  'Service Completed',
]

function ApplicationTracker() {
  const [applicationId, setApplicationId] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    if (!applicationId.trim()) {
      return
    }

    setSearched(true)
  }

  return (
    <section className="tracker-section">
      <div className="container tracker-wrap">
        <div className="section-heading left">
          <span className="section-kicker">Track Progress</span>
          <h2>Application Tracking</h2>
        </div>

        <div className="tracker-box">
          <div className="tracker-search">
            <label htmlFor="applicationId">Application ID</label>
            <div className="tracker-input-row">
              <input
                id="applicationId"
                type="text"
                value={applicationId}
                onChange={(event) => setApplicationId(event.target.value)}
                placeholder="Enter application ID"
              />
              <button type="button" className="primary-btn" onClick={handleSearch}>
                <Search size={15} />
                Search
              </button>
            </div>
          </div>

          {searched && (
            <div className="progress-track" aria-live="polite">
              {steps.map((step, index) => (
                <div key={step} className="progress-step">
                  <div className="step-dot-wrap">
                    <span className="step-dot complete">
                      <Check size={12} />
                    </span>
                    {index < steps.length - 1 && <span className="step-line" />}
                  </div>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ApplicationTracker
