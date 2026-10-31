import React from 'react'
import { Briefcase, CalendarDays, Laptop, Building2, Star } from 'lucide-react'

export function ExperienceCard({ experience, index }) {
  const isPurple = experience.theme === 'purple'

  return (
    <article
      className={`experience-card reveal ${isPurple ? 'experience-card-purple' : 'experience-card-blue'}`}
      style={{ '--delay': `${index * 120}ms` }}
      aria-label={`${experience.position} at ${experience.company}`}
    >
      {/* Soft ambient corner lighting */}
      <div className="experience-card-ambient-glow" aria-hidden="true" />

      {/* Decorative Star Icon in top-right corner matching reference */}
      <div
        className="experience-card-star"
        aria-hidden="true"
        title="Featured Experience"
      >
        <Star size={17} className="star-icon" />
      </div>

      <div className="experience-card-inner">
        {/* Left Column (~42% on desktop) */}
        <div className="experience-left-col">
          <div className="experience-position-wrap">
            <h3 className="experience-position">{experience.position}</h3>
          </div>

          <div className="experience-company-row">
            <span className="experience-company-info">
              <Building2 size={14} className="company-icon" aria-hidden="true" />
              <span>{experience.company}</span>
            </span>
            <span className="company-divider" aria-hidden="true">–</span>
            <span className="experience-work-mode">
              <Laptop size={13} className="mode-icon" aria-hidden="true" />
              <span>{experience.workMode}</span>
            </span>
          </div>

          <div className="experience-duration-row">
            <CalendarDays size={14} className="duration-icon" aria-hidden="true" />
            <span className="experience-duration">{experience.duration}</span>
          </div>

          {experience.supportingOrg && (
            <div className="experience-support-wrap">
              <span className="experience-support-pill">
                <Briefcase size={11} aria-hidden="true" />
                <span>Supported by {experience.supportingOrg}</span>
              </span>
            </div>
          )}
        </div>

        {/* Right Column (~58% on desktop) */}
        <div className="experience-right-col">
          <ul className="experience-bullet-list" role="list">
            {experience.description.map((bullet, idx) => (
              <li key={idx} className="experience-bullet-item">
                <span className="experience-bullet-dot" aria-hidden="true" />
                <span className="experience-bullet-text">{bullet}</span>
              </li>
            ))}
          </ul>

          {experience.skills && experience.skills.length > 0 && (
            <div className="experience-tags-container">
              <span className="experience-tags-label" aria-hidden="true">Skills &amp; Technologies:</span>
              <div className="experience-tags-list">
                {experience.skills.map((skill) => (
                  <span key={skill} className="experience-tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
