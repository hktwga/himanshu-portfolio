import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .55, delay }}>{children}</motion.div>
}

export function ProjectCard({ project }) {
  return (
    <Reveal className="project-card">
      <div className="project-image">
        <img src={project.images[0].src} alt="" />
        <span>{project.number}</span>
      </div>
      <div className="project-body">
        <p className="card-label">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link className="text-link" to={`/projects/${project.id}`}>View case study <ArrowUpRight /></Link>
      </div>
    </Reveal>
  )
}

export function CircuitBackdrop() {
  return <div className="circuit-backdrop"><i /><i /><i /><i /><i /></div>
}

export function MetricGrid({ items }) {
  return (
    <div className="metric-grid">
      {items.map(([value, label]) => <div className="metric" key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  )
}
