# Cărpinișan Andrei — Portfolio

Built with Next.js 14 + Tailwind CSS. Deployed on Vercel.

---

## Local development

### Prerequisites
- Node.js 18+ (download from https://nodejs.org — pick LTS)
- A code editor (VS Code recommended)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open http://localhost:3000 in your browser. Changes you save appear instantly.

---

## Project structure

```
app/
  page.tsx                  → Homepage (hero, projects, experience, about, contact)
  layout.tsx                → Shared layout (nav, footer, fonts)
  globals.css               → Global styles and CSS variables
  projects/[slug]/page.tsx  → Individual project pages
  blog/page.tsx             → Blog index
  blog/[slug]/page.tsx      → Individual blog posts

components/
  Nav.tsx                   → Top navigation bar
  Comments.tsx              → Giscus comments (GitHub Discussions)

lib/
  data.ts                   → ALL your content lives here (projects, blog posts)
```

---

## How to update content

**Everything lives in `lib/data.ts`.**

### Add a new project
Copy an existing project object in the `projects` array and fill in your details:
```ts
{
  slug: 'my-new-project',     // URL: /projects/my-new-project
  num: '08',
  name: 'My New Project',
  emoji: '⚡',
  category: 'major',          // 'major' = main grid, 'tinkering' = small builds section
  shortDesc: 'One sentence description.',
  longDesc: `Full description shown on the project page. Can be multiple paragraphs.`,
  tags: ['Arduino', 'Python'],
}
```

### Add a new blog post
Copy an existing post in the `blogPosts` array:
```ts
{
  slug: 'my-post-title',       // URL: /blog/my-post-title
  title: 'My Post Title',
  date: '2026-04-01',
  excerpt: 'Short preview shown on the blog index.',
  tags: ['Arduino', 'DIY'],
  content: `# My Post Title

Write your post here. Use # for h1, ## for h2.
Leave a blank line between paragraphs.

Use \`backticks\` for inline code.`,
}
```

### Add photos to a project
In `app/projects/[slug]/page.tsx`, find the photo placeholder section and replace:
```tsx
// Replace this:
<div style={{ ... }}>Add photos here...</div>

// With this:
<img src="/images/vox-robot.jpg" alt="Vox robot" style={{ width: '100%', borderRadius: 4 }} />
```
Put your images in the `public/images/` folder.

---

## Set up Giscus comments

1. Create a GitHub repo for your portfolio (or use an existing one)
2. Go to **Settings → Features** and enable **Discussions**
3. Go to https://giscus.app
4. Enter your repo name (e.g. `vruukz/portfolio`)
5. Copy the `data-repo-id` and `data-category-id` values
6. Paste them into `components/Comments.tsx`

---

## Deploy to Vercel

1. Push this project to GitHub
2. Go to https://vercel.com → Import project → select your repo
3. Click Deploy (zero config needed)
4. Go to **Settings → Domains** → add `carpinisan-tech.org`
5. In Cloudflare DNS, add the records Vercel shows you

That's it — every `git push` to main auto-deploys.
