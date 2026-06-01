import {
  ArrowRight,
  Boxes,
  Code2,
  Cpu,
  Download,
  Gauge,
  Layers3,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CircuitBackdrop, ProjectCard, Reveal, SectionTitle } from '../components/UI'
import { projects } from '../data/projects'
import { profile, stats } from '../data/profile'

const highlights = [
  'STM32MP1 BSP Development',
  'Embedded Linux Platforms',
  'Autonomous UGV Systems',
  'Robotic Arm Platforms',
  'Defense Automation Systems',
]

const featuredProjects = projects.slice(0, 3).map((project, index) => ({
  ...project,
  title: [
    'Autonomous UGV Platform',
    'STM32MP1 Robotic Arm Platform',
    'MMTS & RIS Defense System',
  ][index],
}))

const skillGroups = [
  {
    icon: Code2,
    title: 'Embedded Linux & BSP',
    skills: ['Yocto', 'Buildroot', 'U-Boot', 'Device Tree', 'Kernel Debugging', 'Board Bring-up'],
  },
  {
    icon: Layers3,
    title: 'Programming & Middleware',
    skills: ['C', 'C++', 'Python', 'POSIX Threads', 'IPC', 'DBus', 'Sockets', 'systemd'],
  },
  {
    icon: Cpu,
    title: 'Hardware Platforms',
    skills: ['STM32MP1', 'Raspberry Pi', 'ATmega', 'UART', 'SPI', 'I2C', 'GPIO', 'PWM'],
  },
  {
    icon: Gauge,
    title: 'Robotics & Vision',
    skills: ['UGV Systems', 'Robotic Arms', 'OpenCV', 'Computer Vision', 'Motor Control', 'Encoder Feedback', 'Sensor Fusion'],
  },
]

const reasons = [
  {
    icon: ShieldCheck,
    title: 'End-to-End Ownership',
    text: 'Owns the path from Linux boot sequence and BSP development through integration, testing, diagnostics, and deployment.',
  },
  {
    icon: Cpu,
    title: 'Hardware + Software Expertise',
    text: 'Bridges board-level constraints with maintainable software architecture, clear interfaces, and reliable system behavior.',
  },
  {
    icon: Boxes,
    title: 'Robotics Experience',
    text: 'Hands-on experience with autonomous UGVs, robotic arms, vision pipelines, motor control, and defense platforms.',
  },
  {
    icon: Gauge,
    title: 'Production Mindset',
    text: 'Prioritizes debugging, validation, performance, and field reliability so prototypes become dependable products.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <CircuitBackdrop />
        <div className="container hero-content">
          <Reveal>
            <p className="eyebrow">Embedded Linux &bull; BSP Development &bull; Robotics &bull; Autonomous Systems</p>
            <h1>Building Embedded Linux Platforms and Intelligent Robotic Systems</h1>
            <p className="hero-copy">
              Embedded Software Engineer specializing in BSP development, Linux bring-up, STM32MP1 platforms,
              robotics integration, computer vision, and autonomous systems.
              <span>Experienced in taking products from board bring-up to field deployment.</span>
            </p>
            <div className="button-row">
              <Link className="button primary" to="/projects">Explore Projects <ArrowRight /></Link>
              <Link className="button secondary" to="/contact">Contact Me <Mail /></Link>
            </div>
          </Reveal>

          <Reveal className="hero-panel" delay={0.18}>
            <span className="hero-panel__kicker">Current Position</span>
            <strong>{profile.primaryIdentity}</strong>
            <p>{profile.company}</p>
            <ul className="hero-list">
              {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <SectionTitle eyebrow="About" title="Engineering software that controls real machines." />
          <Reveal>
            <p className="about-lead">
              I build embedded software for robotics and autonomous systems, working across Linux BSP development,
              board bring-up, middleware, communication frameworks, computer vision, and real-time control systems.
            </p>
            <p>
              My experience spans STM32MP1, Raspberry Pi, microcontrollers, custom Linux distributions, robotic arms,
              autonomous UGVs, and defense-oriented embedded platforms requiring reliability under real-world operating conditions.
            </p>
            <Link className="text-link" to="/timeline">View Professional Journey <ArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Featured Projects" title="Real systems. Real hardware. Real deployment." text="Selected projects covering robotics, Embedded Linux, computer vision, automation, and distributed control systems." />
          <div className="projects-grid">{featuredProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
          <Link className="button secondary section-action" to="/projects">View All Projects <ArrowRight /></Link>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle eyebrow="Core Expertise" title="Depth across the complete embedded stack." />
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }) => (
              <Reveal className="skill-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why Work With Me" title="Engineering ownership from bootloader to deployment." />
          <div className="reasons-grid reasons-grid--home">
            {reasons.map(({ icon: Icon, title, text }) => (
              <Reveal className="reason-card" key={title}>
                <Icon />
                <div><h3>{title}</h3><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow">Let&apos;s Build Something Meaningful</p>
            <h2>Need an engineer who can bridge hardware and software?</h2>
            <p>Let&apos;s discuss Embedded Linux, BSP development, robotics platforms, autonomous systems, and real-world product engineering.</p>
          </div>
          <div className="button-row">
            <Link className="button primary" to="/contact">Get In Touch <Mail /></Link>
            <Link className="button secondary" to="/resume">View Resume <Download /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
