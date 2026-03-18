'use client'
import { useEffect, useRef } from 'react'

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    // ── SETUP INSTRUCTIONS ──────────────────────────────────────────────
    // 1. Go to https://giscus.app
    // 2. Enter your repo: vruukz/<your-repo-name>
    // 3. Enable Discussions on that repo (Settings → Features → Discussions)
    // 4. Copy the data-repo-id and data-category-id values and paste below
    // ────────────────────────────────────────────────────────────────────
    script.setAttribute('data-repo', 'vruukz/portfolio')          // change to your repo
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID')           // from giscus.app
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID')   // from giscus.app
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'dark')
    script.setAttribute('data-lang', 'en')
    script.crossOrigin = 'anonymous'
    script.async = true

    ref.current.appendChild(script)
  }, [])

  return <div ref={ref} />
}
