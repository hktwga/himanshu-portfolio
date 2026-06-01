import { Code2, ExternalLink, Mail } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let&apos;s build systems that move." description="For embedded Linux, BSP, robotics, and integration opportunities, start a conversation." />
      <section className="section"><div className="container contact-grid">
        <div><p className="eyebrow">Direct contact</p><h2>Tell me about the hardware, the constraints, and what success looks like.</h2></div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail /><span><small>Email</small>{profile.email}</span></a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer"><ExternalLink /><span><small>LinkedIn</small>Professional profile</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Code2 /><span><small>GitHub</small>Code and experiments</span></a>
        </div>
      </div></section>
    </>
  )
}
