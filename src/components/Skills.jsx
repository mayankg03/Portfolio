import React from 'react';
import { Code, Database, BarChart3, FileSpreadsheet, Palette, Users, Brain, GitBranch } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'R', icon: GitBranch, level: 80 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Power BI', icon: BarChart3, level: 90 },
    { name: 'Tableau', icon: BarChart3, level: 85 },
    { name: 'Advanced Excel', icon: FileSpreadsheet, level: 95 },
  ];

  const tools = [
    { name: 'Canva', icon: Palette },
    { name: 'Krita', icon: Palette },
    { name: 'MS Office', icon: FileSpreadsheet },
  ];

  const softSkills = [
    { name: 'Team Leadership', icon: Users },
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Problem Solving', icon: Brain },
    { name: 'Collaboration', icon: Users },
    { name: 'People Management', icon: Users },
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        Technical proficiency combined with strong leadership capabilities
      </p>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skill-category">
          <h3 className="category-title">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="skill-card glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">
                      <Icon size={24} />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Software */}
        <div className="skill-category">
          <h3 className="category-title">Tools & Software</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={tool.name} 
                  className="tool-badge glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={20} />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-category">
          <h3 className="category-title">Soft Skills</h3>
          <div className="tools-grid">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="tool-badge glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={20} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;