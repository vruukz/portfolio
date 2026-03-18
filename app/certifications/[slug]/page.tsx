const certs: Record<string, { name: string; issuer: string; year: string; image: string }> = {
  'cybersecurity': {
    name: 'Fundamentele Securității Cibernetice',
    issuer: 'Bittnet Systems',
    year: '2026',
    image: '/images/cyber.png',
  },
  'oracle-sql': {
    name: 'Database Design and Programming with SQL',
    issuer: 'Oracle Academy',
    year: '2020',
    image: '/images/oracle.png',
  },
}

export default function CertPage({ params }: { params: { slug: string } }) {
  const cert = certs[params.slug]
  if (!cert) return <div style={{ padding: '120px 48px', paddingTop: 160 }}>Not found</div>

  return (
    <div style={{ paddingTop: 100 }}>
      <div style={{ padding: '40px 48px 0' }}>
        <a href="/#certifications" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
          ← Back
        </a>
      </div>
      <section style={{ padding: '60px 48px 120px', maxWidth: 900 }}>
        <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>{cert.issuer} — {cert.year}</div>
        <h1 style={{ fontFamily: "'Instrument Serif'", fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, marginBottom: 48 }}>{cert.name}</h1>
        <img src={cert.image} alt={cert.name} style={{ width: '100%', borderRadius: 4, border: '1px solid var(--border)' }} />
      </section>
    </div>
  )
}