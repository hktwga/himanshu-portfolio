import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Mail, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'

const nav = [['Home', '/'], ['Projects', '/projects'], ['Timeline', '/timeline'], ['Resume', '/resume'], ['Contact', '/contact']]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span>HKT</span><strong>{profile.shortName}</strong>
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'site-nav open' : 'site-nav'}>
          {nav.map(([name, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{name}</NavLink>)}
          <Link className="nav-cta" to="/resume" onClick={() => setOpen(false)}>View CV</Link>
        </nav>
      </header>
      <AnimatePresence mode="wait">
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="site-footer">
        <div><Link className="brand" to="/"><span>HKT</span><strong>{profile.shortName}</strong></Link><p>Embedded Linux. Robotics. Real hardware.</p></div>
        <div className="footer-links">{nav.map(([name, path]) => <Link key={path} to={path}>{name}</Link>)}</div>
        <div className="social-links">
          <a href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </footer>
    </div>
  )
}
