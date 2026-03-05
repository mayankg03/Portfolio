import React, { useEffect, useState } from 'react';
import { Download, Linkedin, Mail, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="grid-overlay"></div>
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="profile-image-container">
          <div className="profile-glow"></div>
          <img 
            src="/profile.png" 
            alt="Mayank Garg" 
            className="profile-image"
          />
        </div>
        
        <h1 className="hero-title">
          Mayank Garg
        </h1>
        
        <h2 className="hero-headline">
          Transforming Data into <span className="highlight">Actionable Insights</span>
        </h2>
        
        <p className="hero-subtitle">
          MBA in Business Analytics with expertise in Python, Power BI, and SQL
        </p>

        <div className="hero-actions">
          <a href="#contact" className="red-button primary-cta">
            <Mail size={20} />
            Get In Touch
          </a>
          <a 
            href="/Mayank_Garg_Resume.pdf" 
            download 
            className="secondary-cta"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="hero-links">
          <a 
            href="https://www.linkedin.com/in/mayank-garg-684650255" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <span className="divider">|</span>
          <a href="mailto:mayankgarg033@gmail.com" className="social-link">
            <Mail size={20} />
            mayankgarg033@gmail.com
          </a>
          <span className="divider">|</span>
          <span className="location-text">
            <MapPin size={20} />
            Agra, India
          </span>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;