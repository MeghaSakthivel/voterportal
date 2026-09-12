const faqs = [
  {
    question: 'How can I track my service request?',
    answer: 'Use the application tracker and enter your application or reference ID to view the current processing stage.',
  },
  {
    question: 'Can I update my details after submission?',
    answer: 'Yes, limited corrections are allowed before the final approval stage depending on the service type.',
  },
  {
    question: 'Where can I raise a grievance?',
    answer: 'You can visit the grievance section and complete the complaint form with service details and supporting information.',
  },
]

function FAQ() {
  return (
    <main className="page-shell">
      <div className="container simple-page">
        <span className="section-kicker">FAQs</span>
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default FAQ
