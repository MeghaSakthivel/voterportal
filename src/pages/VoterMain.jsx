import { useNavigate } from 'react-router-dom'
import { FileCheck2, PencilLine, SearchCheck } from 'lucide-react'
import VoterServiceCard from '../components/VoterServiceCard'

function VoterMain() {
  const navigate = useNavigate()

  const cards = [
    {
      title: 'New Voter Registration',
      description: 'Register a new voter profile and submit your identity details for the service request.',
      icon: FileCheck2,
      onClick: () => navigate('/voter/register'),
    },
    {
      title: 'Update Voter Details',
      description: 'Update personal and address details quickly through the secure citizen portal.',
      icon: PencilLine,
      onClick: () => navigate('/voter/update'),
    },
    {
      title: 'Track Application',
      description: 'Check application progress and track the current department review status.',
      icon: SearchCheck,
      onClick: () => navigate('/track'),
    },
  ]

  return (
    <main className="page-shell">
      <div className="container voter-main-shell">
        <div className="section-heading left">
          <span className="section-kicker">Voter Services</span>
          <h2>Voter Services</h2>
        </div>

        <div className="voter-card-grid">
          {cards.map((card) => (
            <VoterServiceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default VoterMain
