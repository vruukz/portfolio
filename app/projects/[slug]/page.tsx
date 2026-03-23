import BackButton from '@/components/BackButton'
import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Cărpinișan Andrei`,
    description: project.shortDesc,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const others = projects.filter(p => p.slug !== project.slug).slice(0, 2)

  return (
    <div style={{ paddingTop: 100 }}>
      {/* Back */}
      <div style={{ padding: '32px 48px 0' }}>
       <BackButton />
      </div>

      {/* Header */}
      <section style={{ padding: '60px 48px 80px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--accent)' }} />
          {project.num}{project.label ? ` — ${project.label}` : ''}
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif'", fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1, marginBottom: 32 }}>
          {project.emoji} {project.name}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
  {project.tags.map(t => (
    <span key={t} style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: 2 }}>{t}</span>
  ))}
</div>

{project.github && (
  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    padding: '12px 24px',
    border: '1px solid var(--border)',
    color: 'var(--accent)',
    textDecoration: 'none',
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }}>
    ↗ View on GitHub
  </a>
)}

{project.github2 && (
  <a href={project.github2} target="_blank" rel="noopener noreferrer" style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    padding: '12px 24px',
    border: '1px solid var(--border)',
    color: 'var(--accent)',
    textDecoration: 'none',
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }}>
    ↗ View on GitHub (Windows Widget)
  </a>
)}

      </section>

      {/* Content */}
      <section style={{ padding: '80px 48px', maxWidth: 780 }}>
        {project.longDesc.split('\n\n').map((para, i) => (
          <p key={i} style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>{para}</p>
        ))}
      </section>

{project.slug === 'weather-app' && (
  <section style={{ padding: '0 48px 40px' }}>
    <img src="/images/weather-app.png" alt="Weather App screenshot" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  </section>
)}

{project.slug === 'bookshelf' && (
  <section style={{ padding: '0 48px 40px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
      <img src="/images/bookshelf.png" alt="TheBookShelf app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
      <img src="/images/bookshelf2.png" alt="TheBookShelf app 2" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
    </div>
  </section>
)}

{project.slug === 'soundvault' && (
  <section style={{ padding: '0 48px 40px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
      <img src="/images/soundvault.png" alt="Sound Vault app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
      <img src="/images/soundvault2.png" alt="Sound Vault app 2" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
    </div>
  </section>
)}

{project.slug === 'weather-flutter' && (
  <section style={{ padding: '0 48px 40px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
      <img src="/images/weather-flutter.jpeg" alt="Weather Flutter app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
      <img src="/images/weather-flutter2.jpeg" alt="Weather Flutter app 2" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
    </div>
  </section>
)}

{project.slug === 'calculator' && (
  <section style={{ padding: '0 48px 40px' }}>
    <img src="/images/calculator.png" alt="Calculator app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  </section>
)}

{project.slug === 'notes' && (
  <section style={{ padding: '0 48px 40px' }}>
    <img src="/images/notes.png" alt="NotesApp" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  </section>
)}

{project.slug === 'calendar' && (
  <section style={{ padding: '0 48px 40px' }}>
    <img src="/images/calendar.png" alt="Calendar app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  </section>
)}

{project.slug === 'clock' && (
  <section style={{ padding: '0 48px 40px' }}>
    <img src="/images/clock.jpeg" alt="Clock app" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  </section>
)}

{project.slug === 'vox'
  ? <div style={{ display: 'flex', flexDirection: 'row', gap: 16, padding: '0 48px' }}>
      <img src="/images/vox.png" alt="Vox robot" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
      <img src="/images/vox2.png" alt="Vox robot detail" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
    </div>
  : project.slug === 'escape-room-ouija'
  ? <img src="/images/ouija.jpeg" alt="Ouija board puzzle" style={{ width: '50%', borderRadius: 4, border: '1px solid var(--border)' }} />
  : null
}

{project.code && (
  <section style={{ padding: '0 48px 80px' }}>
    <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 28, fontStyle: 'italic', marginBottom: 24 }}>Source code</h2>
    <pre style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 4,
      padding: '32px',
      overflowX: 'auto',
      fontSize: 12,
      lineHeight: 1.7,
      color: 'var(--muted)',
      fontFamily: "'DM Mono', monospace",
    }}>
      <code>{project.code}</code>
    </pre>
  </section>
)}

      {/* Other projects */}
      <section style={{ padding: '80px 48px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 28, fontStyle: 'italic', marginBottom: 32 }}>Other projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {others.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '32px 40px',
              color: 'inherit',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s, background 0.3s',
            }} className="card-hover">
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.emoji}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>{p.num}</div>
              <h3 style={{ fontFamily: "'Instrument Serif'", fontSize: 22, marginBottom: 8 }}>{p.name}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.7 }}>{p.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
