import React from 'react';
import { Heart, Linkedin, Mail, Download } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-name">Mayank</span>
              <span className="logo-accent">Garg</span>
            </h3>
            <p className="footer-tagline">
              Transforming Data into Actionable Insights
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/mayank-garg-684650255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:mayankgarg033@gmail.com">
                    <Mail size={16} />
                    Email
                  </a>
                </li>
                <li>
                  <a href="/Mayank_Garg_Resume.pdf" download>
                    <Download size={16} />
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Mayank Garg. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> for Data & Analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;