# Cărpinișan Andrei — Portfolio

Personal portfolio site for Cărpinișan Andrei, Automation & Robotics Engineer from Cluj-Napoca, Romania. Built with Next.js 14, TypeScript and Tailwind CSS. Deployed on Vercel at [carpinisan-tech.org](https://carpinisan-tech.org).

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables
- **Comments:** Giscus (GitHub Discussions)
- **Hosting:** Vercel
- **Domain:** Cloudflare DNS → carpinisan-tech.org

## Features

- Project portfolio with individual project pages
- Blog with Markdown-style content
- Experience and education timeline
- Certifications with photo viewer
- Dark minimal aesthetic
- Fully responsive

## Local Development

**Prerequisites:** Node.js 18+
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes appear instantly.

## Project Structure
```
app/
  page.tsx                  → Homepage (hero, projects, experience, about, contact)
  layout.tsx                → Shared layout (nav, footer, fonts)
  globals.css               → Global styles and CSS variables
  projects/[slug]/page.tsx  → Individual project pages
  blog/page.tsx             → Blog index
  blog/[slug]/page.tsx      → Individual blog posts
  certifications/[slug]/    → Certification viewer pages
components/
  Nav.tsx                   → Navigation with mobile hamburger menu
  BackButton.tsx            → Client-side back navigation
  Comments.tsx              → Giscus comments
lib/
  data.ts                   → All content lives here (projects + blog posts)
```
