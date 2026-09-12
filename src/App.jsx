import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AccessibilityButton from './components/AccessibilityButton'
import Footer from './components/Footer'
import Header from './components/Header'
import TopBar from './components/TopBar'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Grievance from './pages/Grievance'
import Home from './pages/Home'
import News from './pages/News'
import Services from './pages/Services'
import TrackApplication from './pages/TrackApplication'
import VoterConsent from './pages/VoterConsent'
import VoterMain from './pages/VoterMain'
import VoterRegister from './pages/VoterRegister'
import VoterSubmit from './pages/VoterSubmit'
import VoterUpdate from './pages/VoterUpdate'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-shell">
        <TopBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/voter" element={<VoterMain />} />
          <Route path="/voter/register" element={<VoterRegister />} />
          <Route path="/voter/consent" element={<VoterConsent />} />
          <Route path="/voter/submit" element={<VoterSubmit />} />
          <Route path="/voter/update" element={<VoterUpdate />} />
          <Route path="/track" element={<TrackApplication />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
        <AccessibilityButton />
      </div>
    </Router>
  )
}

export default App
