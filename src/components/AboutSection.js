import React from 'react';
import { Target, Zap, TrendingUp, Handshake } from 'lucide-react'; // Using Lucide for modern icons

export default function AboutSection() {
  return (
    <section className="grid-section section-divider" id="about" data-aos="fade-right">
      <h2 style={{ textAlign: 'center' }}>About Neuromesh AI LLP</h2>
      <p className="section-subtitle" style={{ textAlign: 'center' }}>Pioneering AI-driven product development and smart solutions.</p>
      
      <div className="mission-vision-grid">
        <div className="mission-card" data-aos="fade-right">
          <h3><Target /> Our Mission</h3>
          <p>To develop proprietary, user-centric AI applications that simplify complex tasks, enhance efficiency, and deliver measurable value across diverse industries, from consumer wellness (Food Scout) to urban infrastructure (Traffic AI).</p>
          <p>We are a product-first IT firm, driven by innovation and a commitment to building scalable, impactful technology.</p>
        </div>

        <div className="mission-card" data-aos="fade-left">
          <h3><Zap /> Our Expertise</h3>
          <ul>
            <li>Deep Learning & Computer Vision</li>
            <li>Mobile & Web Application Development</li>

            <li>Data Engineering & Analytics</li>
          </ul>
          <p>Our core strength lies in translating complex AI research into robust, commercially viable applications.</p>
        </div>
        
      </div>
    </section>
  );
}
