import React, { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, X, MapPin, Sparkles, Terminal, Layers3, GraduationCap,
  Layout, Server, Database, Wrench, Download, Check
} from 'lucide-react'
import { profile, skills, projects, education } from './data'
import Experience from './components/Experience'

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Ashish Kumar portfolio home">
          <span className="brand-mark" aria-hidden="true">A<span>.</span></span>
          <span>Ashish Kumar</span>
        </a>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`nav-links ${open ? 'nav-open' : ''}`}
        >
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            <span>Let’s talk</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

const CODE_LINES = [
  {
    tokens: [
      { text: 'const ', cls: 'token-keyword' },
      { text: 'developer ', cls: 'token-variable' },
      { text: '= ', cls: 'token-operator' },
      { text: '{', cls: 'token-bracket' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'name', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '"Ashish Kumar"', cls: 'token-string' },
      { text: ',', cls: 'token-comma' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'role', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '"Full-Stack Developer"', cls: 'token-string' },
      { text: ',', cls: 'token-comma' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'education', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '"B.Tech CSE (2027)"', cls: 'token-string' },
      { text: ',', cls: 'token-comma' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'stack', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '[', cls: 'token-bracket' },
      { text: '"Java"', cls: 'token-string' },
      { text: ', ', cls: 'token-comma' },
      { text: '"MERN"', cls: 'token-string' },
      { text: ', ', cls: 'token-comma' },
      { text: '"GenAI"', cls: 'token-string' },
      { text: ']', cls: 'token-bracket' },
      { text: ',', cls: 'token-comma' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'status', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '"Open to opportunities"', cls: 'token-string' },
      { text: ',', cls: 'token-comma' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: 'build', cls: 'token-property' },
      { text: ': ', cls: 'token-colon' },
      { text: '()', cls: 'token-operator' },
      { text: ' => ', cls: 'token-keyword' },
      { text: '{', cls: 'token-bracket' },
    ],
  },
  {
    indent: '    ',
    tokens: [
      { text: 'return ', cls: 'token-keyword' },
      { text: '"Ship scalable software"', cls: 'token-string' },
      { text: ';', cls: 'token-operator' },
    ],
  },
  {
    indent: '  ',
    tokens: [
      { text: '},', cls: 'token-bracket' },
    ],
  },
  {
    tokens: [
      { text: '};', cls: 'token-bracket' },
    ],
  },
]

function HeroCodeEditor() {
  const totalChars = React.useMemo(() => {
    return CODE_LINES.reduce((sum, line) => {
      const lineLen = (line.indent || '').length + line.tokens.reduce((acc, t) => acc + t.text.length, 0)
      return sum + lineLen
    }, 0)
  }, [])

  const [typedChars, setTypedChars] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 9999
    }
    return 0
  })

  const [phase, setPhase] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'done'
    }
    return 'typing'
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedChars(totalChars)
      setPhase('done')
      return
    }

    let timer
    if (phase === 'typing') {
      timer = setInterval(() => {
        setTypedChars((prev) => {
          if (prev >= totalChars) {
            clearInterval(timer)
            setPhase('paused')
            return totalChars
          }
          return prev + 1
        })
      }, 22)
    } else if (phase === 'paused') {
      // Pause for 4.5 seconds once fully typed so viewers can read the complete snippet
      timer = setTimeout(() => {
        setPhase('deleting')
      }, 4500)
    } else if (phase === 'deleting') {
      // Smoothly backspace characters back to start
      timer = setInterval(() => {
        setTypedChars((prev) => {
          if (prev <= 0) {
            clearInterval(timer)
            setPhase('restart-pause')
            return 0
          }
          return Math.max(0, prev - 2)
        })
      }, 14)
    } else if (phase === 'restart-pause') {
      // Brief pause before retyping
      timer = setTimeout(() => {
        setPhase('typing')
      }, 400)
    }

    return () => {
      clearInterval(timer)
      clearTimeout(timer)
    }
  }, [phase, totalChars])

  let charsAccounted = 0
  const isDone = typedChars >= totalChars

  return (
    <div className="hero-code-wrapper animate-hero-art" aria-label="Developer code snippet">
      <div className="code-ambient-glow" aria-hidden="true" />
      <div className="code-ambient-cyan" aria-hidden="true" />
      <div className="code-grid-bg" aria-hidden="true" />

      <div className="code-editor-card">
        <div className="code-editor-header">
          <div className="window-dots" aria-hidden="true">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
          </div>
          <div className="window-tab" aria-hidden="true">
            <span className="window-tab-icon">JS</span>
            <span className="window-tab-title">developer.js</span>
          </div>
        </div>

        <div className="code-editor-body">
          <pre className="code-pre">
            <code>
              {CODE_LINES.map((line, lineIdx) => {
                const indentStr = line.indent || ''
                const indentLen = indentStr.length
                const lineStartChar = charsAccounted

                let showIndent = ''
                if (typedChars > charsAccounted) {
                  showIndent = indentStr.slice(0, Math.max(0, typedChars - charsAccounted))
                }
                charsAccounted += indentLen

                let cursorHere = false

                const tokenElements = line.tokens.map((token, tokenIdx) => {
                  const tokenLen = token.text.length
                  const tokenStartChar = charsAccounted
                  charsAccounted += tokenLen

                  if (typedChars < tokenStartChar) {
                    return null
                  }

                  const visibleLength = Math.min(tokenLen, Math.max(0, typedChars - tokenStartChar))
                  const visibleText = token.text.slice(0, visibleLength)

                  const isLastVisibleToken = typedChars >= tokenStartChar && typedChars < tokenStartChar + tokenLen
                  if (isLastVisibleToken && !isDone) {
                    cursorHere = true
                  }

                  return (
                    <span key={tokenIdx} className={token.cls}>
                      {visibleText}
                    </span>
                  )
                })

                if (!cursorHere && typedChars >= lineStartChar && typedChars < charsAccounted && !isDone) {
                  cursorHere = true
                }

                const isLastLine = lineIdx === CODE_LINES.length - 1

                return (
                  <span key={lineIdx} className="code-line">
                    {showIndent}
                    {tokenElements}
                    {cursorHere && <span className="code-cursor" aria-hidden="true" />}
                    {isLastLine && isDone && <span className="code-cursor" aria-hidden="true" />}
                    {'\n'}
                  </span>
                )
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

function ProfileArt() {
  return (
    <div className="about-art" aria-hidden="true">
      <div className="art-glow art-glow-purple" />
      <div className="art-glow art-glow-cyan" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      
      <div className="profile-frame">
        <img
          src="/profile.png"
          alt="Ashish Kumar - Full-Stack Developer"
          width="330"
          height="380"
          loading="eager"
        />
        <div className="profile-overlay">
          <span>BUILD</span>
          <span>·</span>
          <span>LEARN</span>
          <span>·</span>
          <span>SHIP</span>
        </div>
      </div>

      <div className="float-card float-code">
        <Terminal size={17} className="float-icon-code" />
        <div>
          <strong>Java & MERN</strong>
          <small>Full-Stack Engineering</small>
        </div>
      </div>

      <div className="float-card float-ai">
        <Sparkles size={17} className="float-icon-ai" />
        <div>
          <strong>GenAI & Voice</strong>
          <small>Applied AI Integrations</small>
        </div>
      </div>

      <div className="art-index">01 <span>—</span> PROFILE</div>
    </div>
  )
}

function Hero() {
  const firstName = profile.name.split(' ')[0]
  const lastName = profile.name.split(' ').slice(1).join(' ')

  return (
    <section id="home" className="hero section-pad" aria-label="Introduction">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability animate-hero-badge">
            <span className="availability-dot" aria-hidden="true" />
            <span>Open to internships and entry-level opportunities</span>
          </div>

          <p className="hero-kicker animate-hero-kicker">HELLO, I'M</p>

          <h1 className="hero-title animate-hero-title">
            <span className="name-first">{firstName}</span>{' '}
            <span className="name-last">{lastName}</span>
            <span className="name-dot">.</span>
          </h1>

          <div className="role-line animate-hero-role">
            <span className="role-bar" aria-hidden="true" />
            <span className="role-title">Full-Stack Developer</span>
            <span className="role-divider" aria-hidden="true">|</span>
            <span className="role-tag">Java, MERN & GenAI</span>
          </div>

          <p className="hero-description animate-hero-desc">{profile.intro}</p>

          <div className="hero-actions animate-hero-actions">
            <a
              className="button button-primary"
              href="#projects"
              aria-label="Explore my projects in the work section"
            >
              <span>Explore My Projects</span>
              <ArrowRight size={17} className="btn-icon" aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href={profile.resume}
              download="Ashish_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Ashish Kumar's Resume PDF"
            >
              <span>Download Resume</span>
              <Download size={16} className="btn-icon-down" aria-hidden="true" />
            </a>
            <a
              className="hero-touch-link"
              href="#contact"
              aria-label="Get in touch with Ashish Kumar"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} className="touch-icon" aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials animate-hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ashish Kumar's GitHub profile"
              className="social-link"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Ashish Kumar on LinkedIn"
              className="social-link"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Inquiry%20-%20Ashish%20Kumar`}
              aria-label={`Send an email to ${profile.email}`}
              title={profile.email}
              className="social-link"
            >
              <Mail size={18} />
            </a>
            <span className="social-rule" aria-hidden="true" />
            <span className="location" title="Current location">
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </div>

        <HeroCodeEditor />
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down to explore about section">
        <ArrowDown size={15} className="scroll-arrow" aria-hidden="true" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-pad section-border" aria-label="About Ashish Kumar">
      <div className="container about-layout">
        <div className="about-content">
          <SectionHeading
            eyebrow="ABOUT ME"
            title={<>Developer by craft.<br /><span className="muted-title">Problem solver by nature.</span></>}
          />
          <p className="about-text reveal">{profile.about}</p>
          <div className="about-stats reveal">
            <div className="about-stat-item">
              <strong>8.98 CGPA</strong>
              <span>Centurion Univ. B.Tech CSE</span>
            </div>
            <div className="about-stat-item">
              <strong>4 Projects</strong>
              <span>Full-Stack & GenAI Solutions</span>
            </div>
            <div className="about-stat-item">
              <strong>100+ Solved</strong>
              <span>DSA on GeeksforGeeks</span>
            </div>
          </div>
          <div className="about-actions reveal">
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
              Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="about-visual reveal">
          <ProfileArt />
        </div>
      </div>
    </section>
  )
}

const categoryIcons = {
  code: <Code2 size={16} />,
  layout: <Layout size={16} />,
  server: <Server size={16} />,
  database: <Database size={16} />,
  sparkles: <Sparkles size={16} />,
  wrench: <Wrench size={16} />,
}

function SkillBadge({ skill }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="skill-badge" title={skill.name}>
      <div className="skill-logo-wrap" aria-hidden="true">
        {!imgError && skill.logo ? (
          <img
            src={skill.logo}
            alt=""
            loading="lazy"
            width="18"
            height="18"
            onError={() => setImgError(true)}
          />
        ) : (
          <Code2 size={13} className="skill-fallback-icon" />
        )}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  )
}

function SkillCategoryCard({ group, index }) {
  return (
    <article
      className="skill-category-card reveal"
      style={{ '--delay': `${index * 60}ms` }}
    >
      <div className="skill-category-header">
        <div className="skill-category-title-group">
          <div className="skill-category-icon" aria-hidden="true">
            {categoryIcons[group.iconType] || <Layers3 size={16} />}
          </div>
          <h3 className="skill-category-title">{group.category}</h3>
        </div>
        <span
          className="skill-category-count"
          aria-label={`${group.items.length} skills in ${group.category}`}
          title={`${group.items.length} skills`}
        >
          {group.items.length}
        </span>
      </div>

      <div className="skill-items-wrap">
        {group.items.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </article>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-pad section-border" aria-label="Technical Skills">
      <div className="container">
        <SectionHeading
          eyebrow="TECHNICAL SKILLS"
          title={<>Technical <span className="gradient-text">Skills.</span></>}
          description="Technologies, frameworks, and developer tools I use to build modern applications."
        />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <SkillCategoryCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.number}`}
      >
        <div className="project-modal-header">
          <div className="project-modal-tag-group">
            <span className="project-modal-number">{project.number}</span>
            <span className="project-modal-type">{project.type}</span>
          </div>
          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <h3 id={`modal-title-${project.number}`} className="project-modal-title">
          {project.name}
        </h3>

        <p className="project-modal-summary">{project.description}</p>

        {project.problem && (
          <div className="project-modal-section">
            <h4 className="project-modal-section-title">Problem Statement & Purpose</h4>
            <p className="project-modal-text">{project.problem}</p>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="project-modal-section">
            <h4 className="project-modal-section-title">Key Implemented Features</h4>
            <ul className="project-modal-feature-list">
              {project.features.map((feat, idx) => (
                <li key={idx} className="project-modal-feature-item">
                  <span className="feature-bullet" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && (
          <div className="project-modal-section">
            <h4 className="project-modal-section-title">Architecture & Data Flow</h4>
            <p className="project-modal-text">{project.architecture}</p>
          </div>
        )}

        {project.challenge && (
          <div className="project-modal-section">
            <h4 className="project-modal-section-title">Technical Challenge & Solution</h4>
            <p className="project-modal-text">{project.challenge}</p>
          </div>
        )}

        <div className="project-modal-section">
          <h4 className="project-modal-section-title">Technologies Used</h4>
          <div className="project-modal-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-modal-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-modal-footer">
          <a
            className="button button-primary"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
          >
            <Github size={16} aria-hidden="true" />
            <span>View Source on GitHub</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
          >
            <span>Close Details</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-pad section-border" aria-label="Selected Projects">
      <div className="container">
        <div className="projects-heading">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={<>Projects with a <span className="gradient-text">purpose.</span></>}
            description="A selection of applications exploring full-stack engineering, AI integration, and real-world workflows."
          />
          <a className="text-link all-projects" href={profile.github} target="_blank" rel="noreferrer">
            <span>More on GitHub</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <article className="project-row reveal" key={project.number} style={{ '--delay': `${i * 70}ms` }}>
              <div className="project-number" aria-hidden="true">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary || project.description}</p>
                <div className="project-stack">
                  {project.stack.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="project-actions">
                <button
                  type="button"
                  className="project-details-btn"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View architectural details for ${project.name}`}
                  title="View Architecture & Implementation Details"
                >
                  <Layers3 size={15} aria-hidden="true" />
                  <span>Details</span>
                </button>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                  title="View Source on GitHub"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section-pad section-border" aria-label="Education Background">
      <div className="container">
        <SectionHeading
          eyebrow="EDUCATION"
          title={<>Academic <span className="gradient-text">foundation.</span></>}
          description="Building a strong base in computer science, software technology, and engineering fundamentals."
        />
        <div className="education-cards">
          {education.map((item, i) => {
            const isCurrent = item.status === 'Current Program'
            return (
              <article
                className={`education-card-card reveal ${isCurrent ? 'education-card-current' : ''}`}
                key={item.institution}
                style={{ '--delay': `${i * 90}ms` }}
              >
                <div className="education-card-header">
                  <div className="education-card-logo">
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.parentElement?.querySelector('.education-logo-fallback')
                        if (fallback) fallback.style.display = 'grid'
                      }}
                    />
                    <div className="education-logo-fallback" style={{ display: 'none' }}>
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div className="education-card-titles">
                    <div className="education-title-row">
                      <h3 className="education-institution">{item.institution}</h3>
                      {isCurrent && (
                        <span className="education-status-badge">CURRENT PROGRAM</span>
                      )}
                    </div>
                    <div className="education-degree-row">
                      <span className="education-degree">{item.degree}</span>
                      {item.score && (
                        <span className="education-score-pill">{item.score}</span>
                      )}
                    </div>
                    <div className="education-duration">{item.duration}</div>
                  </div>
                </div>

                {item.activities && item.activities.length > 0 && (
                  <div className="education-tags">
                    {item.activities.map((act) => (
                      <span key={act} className="education-pill">
                        {act}
                      </span>
                    ))}
                  </div>
                )}

                {item.description && (
                  <p className="education-description">{item.description}</p>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div className="education-skills">
                    {item.skills.map((skill) => (
                      <span key={skill} className="education-pill education-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section id="contact" className="section-pad contact-section section-border" aria-label="Contact Information">
      <div className="container contact-box reveal">
        <div className="contact-decoration"><span>LET'S BUILD SOMETHING</span><div className="decoration-line" /></div>
        <span className="eyebrow"><span className="eyebrow-dot" /> CONTACT</span>
        <h2>Have a project in mind?<br /><span className="gradient-text">Let’s make it real.</span></h2>
        <p>I’m open to software engineering internships, entry-level developer roles, and practical collaborations. Send an email or connect through LinkedIn.</p>
        
        <div className="contact-actions-row">
          <a
            className="button button-primary contact-button"
            href={`mailto:${profile.email}?subject=Portfolio%20Inquiry%20-%20Ashish%20Kumar`}
            aria-label={`Send an email to ${profile.email}`}
          >
            <span>Say hello</span> <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="button button-ghost contact-copy-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} aria-hidden="true" />
                <span style={{ color: 'var(--color-success)' }}>Email Copied! ✓</span>
              </>
            ) : (
              <>
                <Mail size={16} aria-hidden="true" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Ashish Kumar on GitHub">
            <Github size={17} aria-hidden="true" /> <span>GitHub</span> <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Ashish Kumar on LinkedIn">
            <Linkedin size={17} aria-hidden="true" /> <span>LinkedIn</span> <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={`Email ${profile.email}`}>
            <Mail size={17} aria-hidden="true" /> <span>{profile.email}</span> <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <a href="#home" className="brand" aria-label="Back to top of page">
          <span className="brand-mark" aria-hidden="true">A<span>.</span></span>
          <span>Ashish Kumar</span>
        </a>
        <p>Designed & built with React.</p>
        <a href="#home" className="back-top" aria-label="Scroll back to top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Ashish Kumar</span>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
