import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { MetricGrid, Reveal } from '../components/UI'
import { getProject, projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) {
    return (
      <PageIntro
        eyebrow="Project not found"
        title="This case study is not available."
        description="The requested project may have moved or the link may be incorrect."
      >
        <Link className="text-link" to="/projects">Return to projects</Link>
      </PageIntro>
    )
  }

  const projectIndex = projects.findIndex((item) => item.id === project.id)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <>
      <PageIntro eyebrow={`${project.number} / ${project.category}`} title={project.title} description={project.summary}>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </PageIntro>
      <section className="project-hero-image"><img src={project.image} alt="" /></section>
      <section className="section"><div className="container">
        <MetricGrid items={project.metrics} />
        <div className="case-summary">
          <Reveal><p className="eyebrow">Challenge</p><h2>{project.challenge}</h2></Reveal>
          <Reveal><p className="eyebrow">Outcome</p><p>{project.outcome}</p></Reveal>
        </div>
        <div className="case-grid">{project.sections.map(([title, text], index) => <Reveal className="case-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
        <div className="case-nav"><Link className="button secondary" to="/projects"><ArrowLeft /> All projects</Link><Link className="button primary" to={`/projects/${nextProject.id}`}>Next: {nextProject.title} <ArrowRight /></Link></div>
      </div></section>
    </>
  )
}
