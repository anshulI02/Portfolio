# Anshul Israni — Portfolio

Personal portfolio site: electrical engineering, embedded systems, and validation.
Built with **Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

**All site content lives in [`lib/data.ts`](lib/data.ts)** — bio, experience,
projects, skills, education, links. Edit that one file to update the site;
no component changes needed.

### Clearly marked placeholders

| What | Where | How to replace |
| --- | --- | --- |
| Headshot | Monogram avatar in the About card | Save a photo to `public/images/headshot.jpg`, then swap the marked `<div>` in `components/sections/About.tsx` for the `<Image>` snippet in the comment beside it |
| Project photos | Custom schematic line-art (intentional, on-brand) | Save images to `public/projects/<slug>.jpg` and swap them into `components/ProjectCard` (see comment in `components/sections/Projects.tsx`) |
| Project links | GitHub/docs/demo per project | Fill the `links` object per project in `lib/data.ts` |
| Production URL | `site.url` in `lib/data.ts` | Set to your Vercel domain after first deploy (drives sitemap, OG tags, JSON-LD) |
| Resume PDF | `public/resume/Anshul-Israni-Resume.pdf` | Drop in a newer PDF with the same filename |
| Contact form | Opens the visitor's mail client (`mailto:`) | To use a hosted service (Formspree etc.), edit `handleSubmit` in `components/sections/Contact.tsx` |
| Download analytics | Console stub | Wire `trackResumeDownload` in `components/sections/Resume.tsx` to Vercel Analytics/Plausible |

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — zero config needed.
3. After the first deploy, set `site.url` in `lib/data.ts` to the assigned domain and redeploy.

## Structure

```
app/            layout, page, globals.css, SEO routes (sitemap, robots, OG image, favicon)
components/     shared UI (Navbar, Footer, Reveal, PcbTraces, counters, …)
components/sections/  one file per page section
hooks/          useActiveSection (scroll-spy)
lib/            data.ts (ALL content) + utils
public/         resume PDF, images, project assets
```
