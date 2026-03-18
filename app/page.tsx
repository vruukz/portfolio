'use client'
import Link from 'next/link'
import { projects } from '@/lib/data'

const majorProjects = projects.filter(p => p.category === 'major')
const tinkeringProjects = projects.filter(p => p.category === 'tinkering')

const certifications = [
  {
    name: 'Fundamentele Securității Cibernetice',
    issuer: 'Bittnet Systems',
    year: '2026',
    icon: '🔐',
  },
  {
    name: 'Database Design and Programming with SQL',
    issuer: 'Oracle Academy',
    year: '2020',
    icon: '🗄️',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(200,240,96,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(240,168,96,0.05) 0%, transparent 60%)
          `,
        }} />

        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--accent)' }} />
          Robotics & AI Engineer — Cluj-Napoca
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 'clamp(52px, 8vw, 110px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: 40,
          position: 'relative',
          zIndex: 1,
        }}>
          Robots, code<br />
          & <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>everything</em><br />
          in between.
        </h1>

        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-end' }}>
          <p style={{ maxWidth: 420, color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 400 }}>Automation & Robotics Engineer</strong> transitioning into AI and software development.
            Currently pursuing a Master's in Artificial Intelligence in Industrial Production
            at the Technical University of Cluj-Napoca. I build things that move, think, and sometimes both.
          </p>
          <div style={{ display: 'flex', gap: 40, paddingBottom: 4 }}>
            {[['7', 'Projects'], ['2+', 'Yrs Exp.'], ['∞', 'Ideas']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: "'Instrument Serif'", fontSize: 36, color: 'var(--accent2)', lineHeight: 1, display: 'block' }}>{num}</span>
                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginTop: 4 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 40, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--muted)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div className="scroll-arrow" style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--muted))' }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '120px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 64, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 40, fontStyle: 'italic' }}>Selected projects</h2>
          <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>{majorProjects.length} projects</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {majorProjects.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{
              gridColumn: i === 0 ? 'span 2' : undefined,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: i === 0 ? '56px' : '40px',
              position: 'relative',
              overflow: 'hidden',
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: i === 0 ? 'row' : 'column',
              gap: i === 0 ? 48 : 16,
              transition: 'border-color 0.3s, background 0.3s',
            }}
              className="card-hover"
            >
              {i === 0 && (
                <div style={{ width: 260, flexShrink: 0, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180, fontSize: 64 }}>
                  {p.emoji}
                </div>
              )}
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>{p.num}{p.label ? ` — ${p.label}` : ''}</span>
                <h3 style={{ fontFamily: "'Instrument Serif'", fontSize: i === 0 ? 42 : 28, lineHeight: 1.1, margin: '10px 0 12px' }}>{p.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, maxWidth: 460, marginBottom: 24 }}>{p.shortDesc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2 }}>{t}</span>
                  ))}
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 24 }}>
                  View project →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TINKERING */}
      <section style={{ padding: '0 48px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 32, fontStyle: 'italic' }}>Tinkering & experiments</h2>
          <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>Small builds</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {tinkeringProjects.map(p => (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '32px 40px',
              position: 'relative',
              overflow: 'hidden',
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
              transition: 'border-color 0.3s, background 0.3s',
            }} className="card-hover">
              <span style={{ fontSize: 32, flexShrink: 0 }}>{p.emoji}</span>
              <div>
                <h3 style={{ fontFamily: "'Instrument Serif'", fontSize: 22, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{p.shortDesc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2 }}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: '120px 48px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 64, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 40, fontStyle: 'italic' }}>Experience & education</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { year: '2024–', sub: 'ongoing', role: "Master's — AI in Industrial Production", org: 'Technical University of Cluj-Napoca', desc: 'Deepening expertise in AI systems applied to industrial and robotic contexts.' },
            { year: '2023', role: 'Automation Intern', org: 'VCST Automotive Parts — Alba Iulia', desc: 'Maintained automation systems on the production line. Contributed to PLC programming, sensor calibration, and hands-on work with industrial robots.' },
            { year: '2022', role: 'Automation Intern', org: 'VCST Automotive Parts — Alba Iulia', desc: 'Supported senior engineers implementing control logic for gear production machinery. Reported on equipment efficiency and automation bottlenecks.' },
            { year: '2020–2024', role: "Bachelor's — Robotics (English programme)", org: 'Technical University of Cluj-Napoca', desc: 'Four-year English-language robotics engineering programme. Graduated 2024.' },
          ].map(item => (
            <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 40, padding: '36px 40px', background: 'var(--surface)', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}
              className="card-hover">
              <div>
                <span style={{ fontFamily: "'Instrument Serif'", fontSize: 32, color: 'var(--accent2)', lineHeight: 1, display: 'block' }}>{item.year}</span>
                {item.sub && <span style={{ fontSize: 13, color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{item.sub}</span>}
              </div>
              <div>
                <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 6 }}>{item.role}</div>
                <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>{item.org}</div>
                <div style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: '0 48px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 32, fontStyle: 'italic' }}>Certifications</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {certifications.map(c => (
            <div key={c.name} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '32px 40px', display: 'flex', gap: 20, alignItems: 'flex-start' }} className="card-hover">
              <span style={{ fontSize: 32, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.issuer}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{c.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 48px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>About me</p>
          <p style={{ fontFamily: "'Instrument Serif'", fontSize: 28, lineHeight: 1.4 }}>
            Engineer by training,<br />
            <em style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>builder</em> by nature.
          </p>
        </div>
        <div style={{ paddingTop: 48 }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 40 }}>
            I'm an Automation & Robotics Engineer from Cluj-Napoca, Romania, currently transitioning
            into AI and software development. I have a strong foundation in both hardware and software —
            from programming PLCs on factory floors to building AI-powered robots from scratch.
            <br /><br />
            Right now I'm pursuing a <strong style={{ color: 'var(--text)', fontWeight: 400 }}>Master's in AI in Industrial Production</strong> while
            exploring backend development and scalable systems.
            Outside engineering I'm into woodworking, game development, Linux tinkering, and I've been
            an active scout with <strong style={{ color: 'var(--text)', fontWeight: 400 }}>Cercetașii României</strong> since 2011.
          </p>

          {[
            { label: 'Programming', skills: ['Python', 'Java', 'C++', 'C#'] },
            { label: 'Robotics & Hardware', skills: ['Arduino', 'Raspberry Pi', 'Siemens PLC', 'RobotStudio', 'National Instruments', '3D Printing'] },
            { label: 'Design & Tools', skills: ['SolidWorks', 'CATIA', 'Blender', 'Unity', 'Linux', 'AI Integration'] },
          ].map(group => (
            <div key={group.label} style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>{group.label}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {group.skills.map(s => (
                  <div key={s} style={{ padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'block' }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '120px 48px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>Get in touch</p>
        <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1, marginBottom: 32 }}>
          Let's build<br />something <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>real.</em>
        </h2>
        <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 2.2 }}>
          <p>📍 Cluj-Napoca, Cluj, Romania</p>
          <p>📧 <a href="mailto:Carpinisan.vi.andrei@student.utcluj.ro" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>Carpinisan.vi.andrei@student.utcluj.ro</a></p>
          <p>📞 <a href="tel:+40754688068" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>+40 754 688 068</a></p>
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 40 }}>
          {[
            { label: 'Email me', href: 'mailto:Carpinisan.vi.andrei@student.utcluj.ro' },
            { label: 'GitHub', href: 'https://github.com/vruukz' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrei-ștefan-cărpinișan/' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 28px',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
