import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      icon: Briefcase,
      title: 'Web Development Intern',
      organization: 'G-Tech',
      location: 'Agra',
      description: 'Contributed to web development projects, gaining hands-on experience in building responsive and user-friendly web applications.'
    },
    {
      type: 'leadership',
      icon: Users,
      title: 'Team Head - Graphics Team',
      organization: 'Marketing Club, IBM',
      location: 'GLA University',
      description: 'Led the graphics team for the Marketing Club, managing design projects and coordinating with team members to deliver high-quality visual content.'
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Event Organizer',
      organization: "Sell-Ebrate'25",
      location: 'GLA University',
      description: 'Successfully organized and managed the Marketing Club flagship event with over 200 participants, handling logistics, coordination, and execution.'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Experience & Leadership</h2>
      <p className="section-subtitle">
        Professional experience combined with strong leadership roles
      </p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div 
              key={index} 
              className="experience-item glass-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-icon-container">
                <div className={`experience-icon ${exp.type}`}>
                  <Icon size={28} />
                </div>
              </div>
              
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="organization">{exp.organization}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;