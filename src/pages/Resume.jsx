import { Download, Mail } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { Reveal } from '../components/UI'
import { profile, skillGroups, timeline } from '../data/profile'

export default function Resume() {
  return (
    <>
      <PageIntro eyebrow="Resume" title="Technical depth with hands-on ownership." description="A concise overview of experience, education, and engineering capabilities.">
        <div className="button-row"><a className="button primary" href={profile.resume} download>Download RESUME <Download /></a><a className="button secondary" href={`mailto:${profile.email}`}>Email <Mail /></a></div>
      </PageIntro>
      <section className="section resume-section"><div className="container resume-layout">
        <div>
          <p className="eyebrow">Experience</p>
          {timeline.map((item) => <Reveal className="resume-entry" key={`${item.year}-${item.title}`}><span>{item.year}</span><h2>{item.title}</h2><strong>{item.place}</strong><p>{item.text}</p></Reveal>)}
        </div>
        <aside>
          <p className="eyebrow">Core toolkit</p>
          {skillGroups.map((group) => <div className="resume-skill" key={group.title}><h3>{group.title}</h3><p>{group.skills.join(' / ')}</p></div>)}
        </aside>
      </div></section>
    </>
  )
}
