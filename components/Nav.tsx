'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        background: 'rgba(13,13,13,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link href="/" style={{
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontSize: '20px',
  color: 'var(--text)',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}}>
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="28" height="28" rx="6" fill="#c8f060" fillOpacity="0.15"/>
  <rect width="28" height="28" rx="6" stroke="#c8f060" strokeWidth="1" strokeOpacity="0.4"/>
  <text x="14" y="19" textAnchor="middle" fontFamily="'Instrument Serif', Georgia, serif" fontSize="13" fontStyle="italic" fill="#c8f060">C-T</text>
</svg>
  Cărpinișan<em style={{ color: 'var(--accent)', fontStyle: 'italic', marginLeft: 6 }}>Andrei</em>
  <span className="nav-subtitle" style={{ 
  fontSize: '10px', 
  color: 'var(--muted)', 
  letterSpacing: '0.2em', 
  textTransform: 'uppercase', 
  marginLeft: 16,
  fontFamily: "'DM Mono', monospace",
  opacity: 0.6,
}}>
  Personal Projects
</span>
</Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              color: pathname === link.href ? 'var(--accent)' : 'var(--muted)',
              textDecoration: 'none',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? 'var(--accent)' : 'var(--muted)')}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: open ? 'var(--accent)' : 'var(--text)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: open ? 'var(--accent)' : 'var(--text)', transition: 'all 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: open ? 'var(--accent)' : 'var(--text)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: 61,
          left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(13,13,13,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>
          {links.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '16px 0',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}