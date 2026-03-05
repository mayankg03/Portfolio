import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mayankgarg033@gmail.com',
      link: 'mailto:mayankgarg033@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8899599996',
      link: 'tel:+918899599996'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '132, Tagore Nagar, Dayalbagh, Agra - 282005',
      link: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mayank-garg-684650255',
      link: 'https://www.linkedin.com/in/mayank-garg-684650255'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Let's discuss how I can contribute to your analytics team
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-intro glass-card">
            <h3>Let's Connect</h3>
            <p>
              I'm actively seeking opportunities in the analytics domain where I can apply 
              my skills in Python, Power BI, SQL, and data visualization to drive business 
              insights and growth.
            </p>
            <p>
              Whether it's a full-time position, internship, or consulting project, I'm 
              excited to discuss how I can add value to your organization.
            </p>
          </div>

          <div className="contact-cards">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className="contact-card glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-icon">
                    <Icon size={24} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-value"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;