import PageIntro from '../components/PageIntro'
import { Reveal } from '../components/UI'
import { timeline } from '../data/profile'

export default function Timeline() {
  return (
    <>
      <PageIntro eyebrow="Experience" title="A timeline of engineering work." description="A practical journey through embedded systems, robotics platforms, and system integration." />
      <section className="section"><div className="container timeline-list">{timeline.map((item) => <Reveal className="timeline-item" key={`${item.year}-${item.title}`}><span>{item.year}</span><div><h2>{item.title}</h2><strong>{item.place}</strong><p>{item.text}</p></div></Reveal>)}</div></section>
    </>
  )
}
