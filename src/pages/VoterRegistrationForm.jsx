import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VoterRegistrationForm({ mobileNumber, onSubmit }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    district: '',
    state: '',
    constituency: '',
    mobile: mobileNumber || ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.district.trim()) newErrors.district = 'District is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.constituency.trim()) newErrors.constituency = 'Constituency is required'
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
      navigate('/voter/confirmation')
    } else {
      setErrors(newErrors)
    }
  }

  const FormField = ({ label, name, type = 'text', required = true, children, disclaimer }) => (
    <div style={{ marginBottom: '20px' }}>
      <label style={{
        display: 'block',
        fontWeight: '600',
        marginBottom: '6px',
        color: 'var(--navy)',
        fontSize: '14px'
      }}>
        {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: `2px solid ${errors[name] ? '#ef4444' : 'var(--border)'}`,
            borderRadius: '6px',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => {
            if (!errors[name]) e.target.style.borderColor = 'var(--primary)'
          }}
          onBlur={(e) => {
            if (!errors[name]) e.target.style.borderColor = 'var(--border)'
          }}
        />
      )}
      {disclaimer && (
        <p style={{
          fontSize: '11px',
          color: '#f59e0b',
          marginTop: '4px',
          margin: '4px 0 0 0'
        }}>
          {disclaimer}
        </p>
      )}
      {errors[name] && (
        <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', margin: '4px 0 0 0' }}>
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: 'var(--navy)', 
          margin: '0 0 8px 0' 
        }}>
          New Voter Registration
        </h1>
        <p style={{ color: 'var(--muted)', margin: '0', fontSize: '14px' }}>
          Complete the form below to register as a voter
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormField 
          label="Full Name" 
          name="fullName"
          disclaimer="ℹ️ DEMO: Accept any name input"
        />

        <FormField 
          label="Date of Birth" 
          name="dateOfBirth"
          type="date"
          disclaimer="ℹ️ DEMO: Any date is accepted"
        />

        <FormField label="Gender" name="gender">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              fontSize: '14px',
              border: `2px solid ${errors.gender ? '#ef4444' : 'var(--border)'}`,
              borderRadius: '6px',
              fontFamily: 'inherit',
              backgroundColor: 'white',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              if (!errors.gender) e.target.style.borderColor = 'var(--primary)'
            }}
            onBlur={(e) => {
              if (!errors.gender) e.target.style.borderColor = 'var(--border)'
            }}
          >
            <option value="">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', margin: '4px 0 0 0' }}>
              {errors.gender}
            </p>
          )}
        </FormField>

        <FormField 
          label="Address" 
          name="address"
          disclaimer="ℹ️ DEMO: Enter any address"
        />

        <FormField 
          label="District" 
          name="district"
          disclaimer="ℹ️ DEMO: Enter any district name"
        />

        <FormField 
          label="State" 
          name="state"
          disclaimer="ℹ️ DEMO: Enter any state name"
        />

        <FormField 
          label="Constituency" 
          name="constituency"
          disclaimer="ℹ️ DEMO: Enter any constituency name"
        />

        <FormField 
          label="Mobile Number" 
          name="mobile"
          disclaimer="ℹ️ DEMO: Pre-filled from verification step"
        />

        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '32px'
        }}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              flex: 1,
              padding: '12px 16px',
              backgroundColor: 'var(--border)',
              color: 'var(--navy)',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              outline: 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#cbd5e1'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--border)'}
            onFocus={(e) => {
              e.target.style.outline = '2px solid var(--primary)'
              e.target.style.outlineOffset = '2px'
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none'
            }}
          >
            Back
          </button>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: '12px 16px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              outline: 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary)'}
            onFocus={(e) => {
              e.target.style.outline = '2px solid var(--primary)'
              e.target.style.outlineOffset = '2px'
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none'
            }}
          >
            Submit Application
          </button>
        </div>
      </form>

      <div style={{
        marginTop: '24px',
        padding: '16px',
        backgroundColor: 'var(--primary-soft)',
        borderRadius: '6px',
        fontSize: '13px',
        color: 'var(--navy)',
        lineHeight: '1.5'
      }}>
        <strong>Required Fields:</strong> All marked with an asterisk (*) must be completed before submission.
      </div>
    </div>
  )
}
