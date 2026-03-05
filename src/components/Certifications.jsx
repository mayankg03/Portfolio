import React from 'react';
import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'SEO Certified',
      issuer: 'HubSpot Academy',
      date: 'March 2026',
      image: '/seo-cert.png',
      featured: true
    },
    {
      title: 'Business Analyst with Tableau',
      issuer: 'Dataquest / IoA',
      date: '2026',
      image: '/busi-analyst-tab.jpg',
      featured: true
    },
    {
      title: 'Data Visualization with Tableau',
      issuer: 'Codecademy',
      image: '/dvbi.jpg',
      date: '2026',
      featured: true
    },
    {
      title: 'Reports in Power BI',
      issuer: 'DataCamp',
      image: '/report-bi.jpg',
      date: 'March 2026',
      featured: true
    },
    {
      title: 'Ecommerce Analysis',
      issuer: 'DataCamp',
      image: '/ecom-bi.png',
      date: 'March 2026',
      featured: true
    },
    {
      title: 'Deloitte Australia Data Analytics Job Simulation',
      issuer: 'Forage',
      image: '/delo-data.jpg',
      date: '2025',
      featured: true
    },
    {
      title: 'Python',
      issuer: 'Udemy',
      date: '2024',
      featured: true
    },
    {
      title: 'Power BI',
      issuer: 'OfficeMasters',
      image: '/power-bi.jpg',
      date: '2024',
      featured: true
    },
    {
      title: 'R Programming',
      issuer: 'Codecademy',
      image: '/r-certi.jpg',
      date: '2024',
      featured: true
    },
  ];

  return (
    <section id="certifications" className="section certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        Continuous learning and professional development across analytics and technology
      </p>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className={`certification-card glass-card ${cert.featured ? 'featured' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {cert.image && (
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
            )}
            
            <div className="cert-content">
              <div className="cert-icon">
                <Award size={24} />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;