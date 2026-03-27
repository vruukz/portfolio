import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Cărpinișan Andrei — Robotics & AI Engineer',
  description: 'Automation & Robotics Engineer from Cluj-Napoca, Romania. Building robots, automation systems, and software.',
  openGraph: {
    title: 'Cărpinișan Andrei — Robotics & AI Engineer',
    description: 'Portfolio of Andrei Cărpinișan — robotics, automation, AI, and hardware projects.',
    url: 'https://carpinisan-tech.org',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <footer style={{
          padding: '32px 48px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '11px',
          color: 'var(--muted)',
        }}>
          <span>© 2026 Cărpinișan Andrei</span>
          <span>Cluj-Napoca, Romania</span>
          <span style={{ color: 'var(--accent)' }}>Open to opportunities ✦</span>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
