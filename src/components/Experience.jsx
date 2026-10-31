import React from 'react'
import { Briefcase } from 'lucide-react'
import { experiences } from '../data'
import ExperienceCard from './ExperienceCard'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad experience-section section-border"
      aria-label="Professional Experience"
    >
      {/* Background ambient lighting effects */}
      <div className="experience-ambient-glow experience-glow-purple" aria-hidden="true" />
      <div className="experience-ambient-glow experience-glow-blue" aria-hidden="true" />
      <div className="experience-grid-overlay" aria-hidden="true" />

      <div className="container experience-container">
        {/* Section Heading with reference screenshot aesthetics */}
        <div className="experience-heading-wrap reveal">
          <div className="experience-pill-badge" aria-label="Experiences badge">
            <Briefcase size={13} className="pill-badge-icon" aria-hidden="true" />
            <span>Experiences</span>
          </div>

          <h2 className="experience-heading-title">
            Professional <span className="gradient-text">Experience.</span>
          </h2>

          <div className="experience-accent-decoration" aria-hidden="true">
            <span className="accent-line-gradient" />
            <span className="accent-center-gem" />
          </div>

          <p className="experience-heading-subtitle">
            Professional experiences and internships that helped me develop practical skills in software development and UI/UX design.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="experience-cards-stack">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
