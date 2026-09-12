import ApplicationTracker from '../components/ApplicationTracker'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import ServiceCards from '../components/ServiceCards'

const citizenServices = [
  'Apply for Service',
  'Track Application',
  'Search Application',
  'Update Details',
  'Download Documents',
  'Raise Grievance',
]

function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />

      <section className="citizen-services">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Citizen Corner</span>
            <h2>Popular Citizen Services</h2>
          </div>

          <div className="service-tiles">
            {citizenServices.map((service) => (
              <div key={service} className="service-tile">
                <div className="tile-icon" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />
      <ApplicationTracker />
    </main>
  )
}

export default Home
