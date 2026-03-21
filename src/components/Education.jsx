import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'MBA (Business Analytics)',
      institution: 'GLA University, Mathura',
      duration: '2025 - Present',
      score: '6.5 CPI',
      status: 'current'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Amity University, Jaipur, Rajasthan',
      duration: '2022 - 2025',
      score: '84%',
      status: 'completed'
    },
    {
      degree: 'Intermediate / 12th (PCM)',
      institution: 'CBSE Board',
      duration: '2021 - 2022',
      score: '72%',
      status: 'completed'
    },
    {
      degree: 'High School / 10th',
      institution: 'ICSE Board',
      duration: '2019 - 2020',
      score: '74%',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        Academic journey building a strong foundation in analytics and technology
      </p>

      <div className="education-timeline">
        <div className="timeline-line"></div>
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="education-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-marker">
              {edu.status === 'current' ? (
                <div className="current-pulse"></div>
              ) : (
                <div className="completed-dot"></div>
              )}
            </div>
            
            <div className="education-card glass-card">
              <div className="education-header">
                <div className="degree-icon">
                  <GraduationCap size={28} />
                </div>
                <div className="education-info">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="duration">
                      <Calendar size={16} />
                      {edu.duration}
                    </span>
                    <span className="score">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;