import { ArrowRight, Download, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CircuitBackdrop, ProjectCard, Reveal, SectionTitle } from '../components/UI'
import { hireReasons, profile, skillGroups, stats } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <CircuitBackdrop />
        <div className="container hero-content">
          <Reveal>
            <p className="eyebrow">Embedded Linux / BSP / Robotics</p>
            <h1>Engineering reliable systems for <em>real-world</em> robotics.</h1>
            <p className="hero-copy">{profile.name} builds embedded Linux platforms, robotic systems, and hardware-aware software for demanding environments.</p>
            <div className="button-row">
              <Link className="button primary" to="/projects">Explore projects <ArrowRight /></Link>
              <Link className="button secondary" to="/contact">Start a conversation <Mail /></Link>
            </div>
          </Reveal>
          <Reveal className="hero-panel" delay={0.18}>
            <span className="hero-panel__kicker">Currently</span>
            <strong>{profile.role}</strong>
            <p>{profile.company}</p>
            <div className="terminal-lines"><i /><i /><i /><i /></div>
          </Reveal>
        </div>
      </section>

      <section className="stats-strip"><div className="container stats-grid">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="section about-section">
        <div className="container about-grid">
          <SectionTitle eyebrow="About" title="Built around hardware, shaped by the whole system." />
          <Reveal>
            <p className="about-lead">I work where software meets physical systems: Linux platforms, board bring-up, robotics control, sensors, and operator workflows.</p>
            <p>My focus is dependable engineering on real hardware. That means understanding the full path from bootloader and device tree through middleware, applications, field diagnostics, and iterative validation.</p>
            <Link className="text-link" to="/timeline">Follow the timeline <ArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Selected work" title="Systems built beyond the happy path." text="Production-minded engineering across robotics, Linux platform work, computer vision, and distributed hardware." />
          <div className="projects-grid">{projects.slice(0, 3).map((project) => <ProjectCard project={project} key={project.id} />)}</div>
          <Link className="button secondary section-action" to="/projects">View all projects <ArrowRight /></Link>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle eyebrow="Capabilities" title="Depth across the full embedded stack." />
          <div className="skills-grid">{skillGroups.map(({ icon: Icon, title, skills }) => <Reveal className="skill-card" key={title}><Icon /><h3>{title}</h3><p>{skills.join(' / ')}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why work together" title="Practical engineering ownership." />
          <div className="reasons-grid">{hireReasons.map(({ icon: Icon, title, text }) => <Reveal className="reason-card" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div><p className="eyebrow">Let&apos;s collaborate</p><h2>Have a hardware problem worth solving?</h2></div>
          <div className="button-row"><Link className="button primary" to="/contact">Get in touch <Mail /></Link><Link className="button secondary" to="/resume">View resume <Download /></Link></div>
        </div>
      </section>
    </>
  )
}
