import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Passionate about turning data into meaningful business insights
      </p>

      <div className="about-content">
        <div className="about-main glass-card">
          <p className="about-text">
            I am an enthusiastic and self-motivated MBA (Business Analytics) student with 
            a strong foundation in data analysis and visualization. With deep knowledge in 
            <span className="tech-highlight"> Python</span>, 
            <span className="tech-highlight"> Advanced Excel</span>, and 
            <span className="tech-highlight"> Power BI</span>, I thrive on solving complex 
            business problems through data-driven decision making.
          </p>
          <p className="about-text">
            My journey combines technical expertise with strong leadership experience, having 
            led graphics teams and organized successful events with 200+ participants. I possess 
            critical thinking and problem-solving skills that enable me to transform raw data 
            into actionable insights for strategic business decisions.
          </p>
          <p className="about-text">
            I am actively seeking opportunities in the analytics domain where I can apply my 
            skills to real-world challenges and contribute to organizational growth through 
            data-driven strategies.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card glass-card">
            <div className="highlight-icon">
              <Brain size={32} />
            </div>
            <h3>Analytical Mindset</h3>
            <p>Critical thinking and problem-solving approach to complex data challenges</p>
          </div>

          <div className="highlight-card glass-card">
            <div className="highlight-icon">
              <Target size={32} />
            </div>
            <h3>Goal-Oriented</h3>
            <p>Focused on delivering measurable results and actionable business insights</p>
          </div>

          <div className="highlight-card glass-card">
            <div className="highlight-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Continuous Learner</h3>
            <p>Always expanding skills through certifications and hands-on projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;