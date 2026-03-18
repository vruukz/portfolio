import { blogPosts } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Cărpinișan Andrei',
  description: 'Thoughts, builds, and experiments from an automation & robotics engineer.',
}

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--accent)' }} />
          Writing
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif'", fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
          Build logs &<br /><em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>experiments.</em>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, maxWidth: 480, marginTop: 24 }}>
          Short write-ups on things I've built, problems I've solved, and rabbit holes I've gone down.
          Mostly hardware, sometimes software.
        </p>
      </section>

      <section style={{ padding: '80px 48px' }}>
        {blogPosts.length === 0 ? (
          <div style={{ color: 'var(--muted)', fontSize: 14, textAlign: 'center', padding: '80px 0' }}>
            First post coming soon...
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '40px',
                color: 'inherit',
                textDecoration: 'none',
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 40,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, background 0.3s',
              }} className="card-hover">
                <div style={{ fontSize: 11, color: 'var(--muted)', paddingTop: 4 }}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 28, marginBottom: 12 }}>{post.title}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {post.tags.map(t => (
                      <span key={t} style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
