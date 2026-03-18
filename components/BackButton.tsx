'use client'

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Mono', monospace" }}
    >
      ← Back
    </button>
  )
}