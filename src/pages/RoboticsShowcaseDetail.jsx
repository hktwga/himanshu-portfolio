import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'
import { Reveal, SectionTitle } from '../components/UI'

export default function RoboticsShowcaseDetail({ project, nextProject, featureIcons }) {
  return (
    <>
      <section className="flagship-hero">
        <div className="container flagship-hero__grid">
          <Reveal>
            <p className="eyebrow">{project.category} / {project.showcase.domain}</p>
            <h1>{project.title}</h1>
            <p className="flagship-summary">{project.summary}</p>
            <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </Reveal>
          <Reveal className="flagship-hero__image" delay={0.16}>
            <img src={project.images[0].src} alt={project.showcase.imageAlt} />
            <span>{project.number} / {project.showcase.label}</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container showcase-overview">
          <SectionTitle eyebrow="Project Overview" title={project.showcase.overviewTitle} />
          <Reveal><p>{project.overview}</p></Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container showcase-architecture">
          <SectionTitle eyebrow="System Architecture" title={project.showcase.architectureTitle} text={project.showcase.architectureText} />
          <div className="architecture-flow">
            {project.architecture.map((block) => <Reveal className="architecture-node" key={block}><span>{block}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Key Features" title={project.showcase.featuresTitle} />
          <div className="feature-grid">
            {project.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length]
              return <Reveal className="feature-card" key={feature}><Icon /><h3>{feature}</h3></Reveal>
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container showcase-contributions">
          <SectionTitle eyebrow="Engineering Contributions" title={project.showcase.contributionsTitle} />
          <div className="contribution-grid">
            {project.contributions.map((contribution) => <Reveal className="contribution-item" key={contribution}><CheckCircle2 /><span>{contribution}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Gallery" title={project.showcase.galleryTitle} text={project.showcase.galleryText} />
          <ProjectGallery images={project.images} videos={project.videos} documents={project.documents} diagrams={project.diagrams} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle eyebrow="Results" title={project.showcase.resultsTitle} />
          <div className="results-grid">
            {project.results.map((result) => <Reveal className="result-card" key={result}><CheckCircle2 /><h3>{result}</h3></Reveal>)}
          </div>
          <div className="case-nav"><Link className="button secondary" to="/projects"><ArrowLeft /> All projects</Link><Link className="button primary" to={`/projects/${nextProject.id}`}>Next: {nextProject.title} <ArrowRight /></Link></div>
        </div>
      </section>
    </>
  )
}
