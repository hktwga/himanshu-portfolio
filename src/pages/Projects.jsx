import PageIntro from '../components/PageIntro'
import { ProjectCard } from '../components/UI'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <PageIntro eyebrow="Selected work" title="Robotics and embedded systems projects." description="Explore production-minded work across autonomous vehicles, robotic arms, defense automation, and Linux platform engineering." />
      <section className="section"><div className="container projects-grid projects-grid--all">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section>
    </>
  )
}
