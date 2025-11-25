import React, { useEffect, useState, useRef, useCallback } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Imports for Lucide Icons (Using placeholder for single file context)
import { Sun, Moon, Mail, Globe, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com'; // <--- ADDED: EmailJS import

// Import updated components
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';

// --- EmailJS Form Submission Logic ---
const sendEmail = (e, formRef) => {
  e.preventDefault();
  
  const form = formRef.current;
  const statusElement = document.getElementById('contact-status');
  const submitButton = form.querySelector('.btn-primary');
  
  // Simple validation check
  if (!form.checkValidity()) {
    statusElement.textContent = "Please fill in all required fields.";
    statusElement.style.color = "orange";
    return;
  }
  
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  statusElement.textContent = "Attempting to send...";
  statusElement.style.color = "yellow";
  
  emailjs.sendForm(
    'service_v38tqyx', // Your Service ID
    'template_z8l19lb', // Your Template ID
    form,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Your Public Key
  )
    .then((result) => {
      console.log('Success:', result.text);
      statusElement.textContent = 'Message sent successfully! We will revert back to you within 2-3 Business Days.';
      statusElement.style.color = 'lightgreen';
      form.reset();
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      statusElement.textContent = 'Failed to send message due to issues in the email service. Sorry for the inconvenience. You can send email directly to inquiry@neuro-mesh.com or please try again later.';
      statusElement.style.color = 'red';
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        setTimeout(() => {
            statusElement.textContent = ""; // Clear status after a delay
        }, 7000);
    });
};
// -----------------------------------------------------------------------------------------


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef(null);

  // Theme Toggle Logic
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  }, []);

  // Effect to handle theme on load and AOS initialization
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Effect to sync CSS class with state
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Scroll Handling
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    const progress = (currentScroll / totalHeight) * 100;
    setScrollProgress(progress);
    setShowScrollTop(currentScroll > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu on mobile after click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <main>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>NeuroMesh <span>AI</span></h1>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={handleNavLinkClick}>Home</a>
          <a href="#about" onClick={handleNavLinkClick}>About</a>
          <a href="#apps" onClick={handleNavLinkClick}>Apps</a>
          <a href="#faq" onClick={handleNavLinkClick}>FAQ</a>
          <button 
            className="toggle-theme" 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact"  onClick={handleNavLinkClick}>Contact Us</a>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      Hero Section
      {/* <section className="hero" id="hero">
        <div data-aos="fade-down">
          <p className="section-subtitle">Pioneering the Future with Intelligence</p>
          <h1>Building the Next Generation of <span>AI-Powered</span> Applications</h1>
          <p>Neuromesh AI LLP is an IT firm focused on developing proprietary, innovative AI products that deliver measurable real-world solutions in food tech, computer vision, and traffic management.</p>
          <div className="hero-cta-group">
            <a href="#apps" className="btn-primary" onClick={handleNavLinkClick}>Explore Our Apps</a>
            <a href="#contact" className="btn-primary" onClick={handleNavLinkClick}>Get In Touch</a>
          </div>
        </div>
      </section> */}

      <section className="hero" id="hero">
        <div className="hero-content" data-aos="fade-up">
          <p className="section-subtitle1">Pioneering the Future with Intelligence</p>
          <h1>
            Building the Next Generation of <span>AI-Powered</span> Applications
          </h1>
          <p>
            Neuromesh AI LLP is an IT firm focused on developing proprietary, innovative AI products that deliver measurable real-world solutions in food tech, computer vision, and traffic management.
          </p>
          <div className="hero-cta-group">
            <a href="#apps" className="btn-primary" onClick={handleNavLinkClick}>Explore Our Apps</a>
            <a href="#contact" className="btn-primary" onClick={handleNavLinkClick}>Get In Touch</a>
          </div>
        </div>
      </section>
      {/* About Section (Updated) */}
      <AboutSection />

      {/* Services Section (Now Apps Showcase) */}
      <ServicesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <footer id="contact">
        <div className="footer-content">
          {/* Left Side - Info and Quick Links */}
          <div className="footer-info">
            <h3>Neuromesh AI LLP</h3>
            <p><Mail size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <a href="mailto:inquiry@neuro-mesh.com" style={{color: 'white', textDecoration: 'underline'}}>inquiry@neuro-mesh.com</a></p>
            <p><Globe size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <a href="https://www.neuro-mesh.com" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>www.neuro-mesh.com</a></p>
            
            <div className="footer-links" style={{ marginTop: '2rem' }}>
              <h4>Quick Links</h4>
              <a href="#about" onClick={handleNavLinkClick}>About Us</a>
              <a href="#apps" onClick={handleNavLinkClick}>Our AI Apps</a>
              <a href="#faq" onClick={handleNavLinkClick}>FAQs</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          {/* UPDATED: onSubmit now calls the new sendEmail function */}
          <form ref={formRef} onSubmit={(e) => sendEmail(e, formRef)} className="contact-form" data-aos="fade-up">
            <h3>Send us a message</h3>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Phone (optional)" />
            <select name="service" required>
              <option value="">I'm interested in...</option>
              <option value="Food Scout">Food Scout Licensing</option>
              <option value="Photographer Buddy Pilot">Photographer Buddy Pilot</option>
              <option value="Traffic AI Implementation">Traffic AI Implementation</option>
              <option value="Custom AI Project">Custom AI Project</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            <textarea name="message" placeholder="Your Message / Requirements" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
            <p id="contact-status" style={{color: 'white', marginTop: '1rem', textAlign: 'center'}}></p>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Neuromesh AI LLP. All rights reserved. | Built with 💡 & Code.</p>
        </div>
      </footer>


      {/* Scroll to Top */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Back to top">↑</button>
      )}
    </main>
  );
}

export default App;