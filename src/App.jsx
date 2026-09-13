import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import AccessibilityButton from './components/AccessibilityButton'
import DemoBanner from './components/DemoBanner'
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
import VoterLoginStep1 from './pages/VoterLoginStep1'
import VoterLoginStep2 from './pages/VoterLoginStep2'
import VoterLoginStep3 from './pages/VoterLoginStep3'
import VoterRegistrationForm from './pages/VoterRegistrationForm'
import VoterConfirmation from './pages/VoterConfirmation'
import './App.css'

function AppContent() {
  const [voterRegistrationState, setVoterRegistrationState] = useState({
    mobileNumber: '',
    otp: '',
    applicationData: null,
    applicationId: null
  })

  const handleMobileNumber = (mobile) => {
    setVoterRegistrationState(prev => ({
      ...prev,
      mobileNumber: mobile
    }))
  }

  const handleOTPVerified = (otp) => {
    setVoterRegistrationState(prev => ({
      ...prev,
      otp
    }))
  }

  const handleApplicationSubmit = (formData) => {
    const appId = `DEMO-VOTER-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    setVoterRegistrationState(prev => ({
      ...prev,
      applicationData: formData,
      applicationId: appId
    }))
  }

  return (
    <div className="app-shell">
      <DemoBanner />
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
        <Route 
          path="/voter/login-step1" 
          element={
            <VoterLoginStep1 
              onMobileNumber={handleMobileNumber}
              initialMobile={voterRegistrationState.mobileNumber}
            />
          } 
        />
        <Route 
          path="/voter/login-otp" 
          element={
            <VoterLoginStep2 
              onOTPVerified={handleOTPVerified}
            />
          } 
        />
        <Route 
          path="/voter/login-confirm" 
          element={
            <VoterLoginStep3 
              mobileNumber={voterRegistrationState.mobileNumber}
            />
          } 
        />
        <Route 
          path="/voter/registration-form" 
          element={
            <VoterRegistrationForm 
              mobileNumber={voterRegistrationState.mobileNumber}
              onSubmit={handleApplicationSubmit}
            />
          } 
        />
        <Route 
          path="/voter/confirmation" 
          element={
            <VoterConfirmation 
              applicationData={voterRegistrationState.applicationData}
              applicationId={voterRegistrationState.applicationId}
            />
          } 
        />
        <Route path="/track" element={<TrackApplication />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <AccessibilityButton />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
