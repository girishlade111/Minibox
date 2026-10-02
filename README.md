# Minibox

A modern product landing page for **Minibox** — a mini-services concept — built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Features a polished marketing page with hero section, feature highlights, gallery, and call-to-action, backed by a Prisma (SQLite) data layer scaffold and a sample API route.

## ✨ Features

- **Marketing landing page** — Navbar, Hero, "What's Included" section, gallery, footer CTA
- **Dark-ready styling** — Tailwind CSS with shadcn/ui component library
- **Prisma + SQLite** data layer scaffold (`prisma/schema.prisma`, `db/custom.db`)
- **Sample API route** — `src/app/api/route.ts` (health-check style JSON endpoint)
- **Standalone output** — `next.config.ts` uses `output: "standalone"` for container/server deployment

## 🛠 Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **Prisma ORM** with **SQLite**
- **Bun**-friendly scripts (`bun` used in dev/start)

## 🚀 Quick Start

```bash
# install
npm install   # or: bun install

# database
npx prisma db push        # creates tables in db/custom.db
npx prisma generate      # generates the Prisma client

# dev
npm run dev              # http://localhost:3000

# production build (standalone)
npm run build
npm run start
```

### Environment

Copy `.env.example` (if present) or set:

```
DATABASE_URL="file:./db/custom.db"
```

## 📁 Project Structure

```
Minibox/
├── src/
│   ├── app/            # Next.js App Router (page.tsx, layout.tsx, api/)
│   ├── components/
│   │   ├── minbox/     # Navbar, Hero, WhatsIncluded, GallerySection, FooterCta, Footer
│   │   └── ui/         # shadcn/ui primitives
│   └── lib/            # utilities
├── prisma/schema.prisma
├── db/custom.db        # SQLite database file
├── mini-services/      # (reserved for service modules)
├── public/             # static assets
└── next.config.ts      # output: "standalone"
```

## 🌐 Deploy Notes

- **Dynamic app** (API route + Prisma SQLite) — deploy on a Node-capable host such as **Netlify** or a VPS/container (`next start` against the standalone build).
- Not suitable for pure static hosting (Cloudflare Pages static / GitHub Pages) because of the API route and database.

## 🙏 Credits

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)

Solo founder of LadeStack, building free tools for everyone.
