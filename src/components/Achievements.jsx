import React from 'react';
import { Trophy, Users, Radio, Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Organized 'Sell-Ebrate'25'",
      description: 'Successfully managed the Marketing Club flagship event with over 200 participants, handling end-to-end logistics, coordination, and execution.',
      highlight: '200+ Participants'
    },
    {
      icon: Users,
      title: 'Team Head - Graphics',
      description: 'Led the graphics team for the Marketing Club at IBM, managing design projects and mentoring team members.',
      highlight: 'Leadership Role'
    },
    {
      icon: Award,
      title: 'Leadership Summit Coordinator',
      description: 'Coordinated the hospitality segment of the Leadership Summit at GLA University in 2025, ensuring smooth operations.',
      highlight: 'Hospitality Management'
    },
    {
      icon: Radio,
      title: 'Radio Jockey Event Manager',
      description: 'Successfully managed and executed a Radio Jockey event at Amity University, Jaipur, showcasing event management skills.',
      highlight: 'Event Management'
    }
  ];

  return (
    <section id="achievements" className="section achievements">
      <h2 className="section-title">Activities & Achievements</h2>
      <p className="section-subtitle">
        Leadership roles and successful event management experiences
      </p>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div 
              key={index} 
              className="achievement-card glass-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="achievement-header">
                <div className="achievement-icon">
                  <Icon size={32} />
                </div>
                <span className="achievement-badge">{achievement.highlight}</span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;