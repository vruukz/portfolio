import BackButton from '@/components/BackButton'
import { blogPosts } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Comments from '@/components/Comments'

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Cărpinișan Andrei`,
    description: post.excerpt,
  }
}

// Very simple markdown-like renderer for the blog content
function renderContent(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('# ')) return <h1 key={i} style={{ fontFamily: "'Instrument Serif'", fontSize: 'clamp(32px,5vw,56px)', lineHeight: 1, margin: '0 0 40px' }}>{line.slice(2)}</h1>
    if (line.startsWith('## ')) return <h2 key={i} style={{ fontFamily: "'Instrument Serif'", fontSize: 28, fontStyle: 'italic', margin: '48px 0 16px', color: 'var(--text)' }}>{line.slice(3)}</h2>
    if (line.startsWith('```')) return null
    if (line.trim() === '') return <br key={i} />
    // inline code
    const parts = line.split(/(`[^`]+`)/)
    return (
      <p key={i} style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
        {parts.map((part, j) =>
          part.startsWith('`') && part.endsWith('`')
            ? <code key={j} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 3, fontSize: 13, fontFamily: 'var(--mono)', color: 'var(--accent)' }}>{part.slice(1, -1)}</code>
            : part
        )}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div style={{ paddingTop: 100 }}>
      <div style={{ padding: '32px 48px 0' }}>
        <BackButton />
      </div>

      <article style={{ padding: '60px 48px 120px', maxWidth: 820 }}>
        <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 24 }}>
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
          {post.tags.map(t => (
            <span key={t} style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: 2 }}>{t}</span>
          ))}
        </div>

        <div>{renderContent(post.content)}</div>
      </article>

      {/* Comments */}
      <section style={{ padding: '0 48px 120px', borderTop: '1px solid var(--border)', paddingTop: 80 }}>
        <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 28, fontStyle: 'italic', marginBottom: 40 }}>Discussion</h2>
        <Comments />
      </section>
    </div>
  )
}
