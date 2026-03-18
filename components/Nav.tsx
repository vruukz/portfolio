'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
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
      }}>
        Cărpinișan <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Andrei</em>
      </Link>

      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
        <div className="nav-dot" style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
        }} />
      </nav>
    </header>
  )
}
