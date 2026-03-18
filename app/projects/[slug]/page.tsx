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
        <Link href="/#projects" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
          ← Back to projects
        </Link>
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
      </section>

      {/* Content */}
      <section style={{ padding: '80px 48px', maxWidth: 780 }}>
        {project.longDesc.split('\n\n').map((para, i) => (
          <p key={i} style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>{para}</p>
        ))}
      </section>

      {/* Photo placeholder */}
      <section style={{ padding: '0 48px 80px' }}>
        {project.slug === 'vox' && (
  <img src="/images/vox.png" alt="Vox robot" style={{ width: '100%', borderRadius: 4, border: '1px solid var(--border)' }} />
)}
      </section>

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
