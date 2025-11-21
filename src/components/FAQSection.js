import React, { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqList = [
    ['What is the core focus of Neuromesh AI LLP?', 'We are primarily an AI product development firm, focusing on building and launching our own suite of applications like Food Scout and Traffic AI.'],
    ['Are your products available for licensing?', 'Yes, our proprietary apps can be licensed for commercial use, or we can tailor custom features based on your specific requirements.'],
    ['What technologies power your AI apps?', 'Our apps are built using modern tech stacks including React for front-end, Python/TensorFlow for AI models, and scalable cloud services like AWS and GCP.'],
    ['How can I partner with Neuromesh?', 'For partnerships, investments, or pilot programs related to our apps, please reach out via the contact form below or email us directly at inquiry@neuro-mesh.com.'],
  ];

  return (
    <section className="faq section-divider" id="faq" data-aos="fade-left">
      <h2 style={{ textAlign: 'center' }}>FAQs</h2>
      <p className="section-subtitle" style={{ textAlign: 'center' }}>Common questions about our products and company.</p>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqList.map(([q, a], idx) => (
          <div className={`faq-item ${openFAQ === idx ? 'open' : ''}`} key={idx}>
            <div className="faq-header" role="button" tabIndex={0} onClick={() => toggleFAQ(idx)} onKeyDown={(e) => {if (e.key === 'Enter') toggleFAQ(idx);}}>
              <h3>{q}</h3>
              <span className="faq-icon">{openFAQ === idx ? '✕' : '+'}</span>
            </div>
            <div className="faq-body"><p>{a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
