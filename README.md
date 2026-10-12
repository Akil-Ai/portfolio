# 🚀 Akil S — AI & Data Science Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Akil-Ai/portfolio)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

A modern, high-performance personal portfolio built for **Akil S**, an AI & Data Science undergraduate at VSB Engineering College. Designed with futuristic aesthetics, interactive micro-animations, command palette, live AI chat concierge, and immersive easter eggs.

---

## ✨ Features & Highlights

- **⚡ Fast & Modern**: Built on Next.js 16 (App Router) with Turbopack, React 19, and Tailwind CSS.
- **🤖 Built-in AKIL Bot**: Interactive AI concierge providing verified answers about projects, skills, education, and internship availability with offline/cloud fallback resilience.
- **⌘ Command Palette (`Cmd + K` / `Ctrl + K`)**: Quick keyboard navigation across all sections, projects, contacts, and actions.
- **🌌 Skills Constellation**: Interactive 2D canvas visualization showcasing tech stack clusters and proficiencies.
- **📊 Interactive Project Case Studies**: Deep-dive modals for **UAT-Lens-Ai** and **Rock-Guard AI** with architecture breakdown, metrics, and tech stack tags.
- **🎮 Fun Easter Eggs**:
  - **Terminal Mode** (`Ctrl + ~` or `F12` prompt) with interactive CLI commands.
  - **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) secret arcade fireworks activation.
- **📄 Resume Preview & Download**: Instant modal preview and 1-click PDF download.
- **📱 Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop with smooth dark-mode aesthetics.

---

## 🌐 Quick Online Deployment

### Option 1: Deploy to Vercel (Recommended — Free & 1-Click)

1. Click the button below:
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Akil-Ai/portfolio)

2. Sign in with your GitHub account.
3. Select your repository: `Akil-Ai/portfolio`.
4. Click **Deploy**. Vercel will automatically detect Next.js and deploy your portfolio to a free `.vercel.app` domain within 60 seconds!

---

### Option 2: Deploy to Netlify

1. Log into [Netlify](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub repository `Akil-Ai/portfolio`.
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click **Deploy site**.

---

### Option 3: Deploy via Docker / Render / Railway

The project is configured with `output: "standalone"` in `next.config.ts`, making it container-ready:

```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 20+ installed
- npm, pnpm, or bun

### Setup
```bash
# 1. Clone repository
git clone https://github.com/Akil-Ai/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts development server on port 3000 |
| `npm run build` | Compiles optimized production bundle |
| `npm run start` | Starts Next.js production server |
| `npm run lint` | Runs ESLint analysis |

---

## 📬 Contact & Connect

- **Name**: Akil S
- **Role**: AI & Data Science Undergraduate
- **Email**: [akilrmhss@gmail.com](mailto:akilrmhss@gmail.com)
- **LinkedIn**: [linkedin.com/in/akil008](https://www.linkedin.com/in/akil008)
- **GitHub**: [github.com/Akil-Ai](https://github.com/Akil-Ai)
- **Phone**: +91 9842651523

---

*Crafted with passion by Akil S.*
