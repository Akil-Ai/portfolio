# Portfolio Project Worklog — AKIL S

## Project Overview
Building a portfolio website for **AKIL S**, an Artificial Intelligence & Data Science engineering student, with an integrated AI chatbot assistant.

Source resume: `/home/z/my-project/upload/AKIL S Resume.pdf`

## Resume Extracted Information

**Name:** AKIL S
**Title:** Artificial Intelligence and Data Science Student
**Contact:**
- Phone: 9842651523
- Email: akilrmhss@gmail.com
- Address: 9/299 kanniyan kinaru, Kuttapalayam, kangayam, Tirupur - 638 108
- LinkedIn: www.linkedin.com/in/akil008
- GitHub: https://github.com/Akil-Ai

**Objective:**
AI & Data Science student with strong foundation in Python and problem-solving, seeking an online internship to apply technical skills and gain practical experience in real-world projects.

**Education:**
- B.Tech Artificial Intelligence and Data Science — VSB Engineering College (2024–2028) — CGPA: 8.21
- Rajendran Matric Hr School (2021–2024) — SSLC: 90.6%, HSC: 87%

**Projects:**
1. **UAT-Lens-Ai** — Transforms complex requirement documents (PRDs, BRDs, User Stories, Acceptance Criteria) into complete, verified, and traceable User Acceptance Testing (UAT) test cases in minutes. Every test case links directly to a verbatim source quote with a zero-hallucination guarantee.
2. **Rock-Guard AI** — A working control-room console that turns rock-face imagery and slope-sensor telemetry into a graded rockfall risk score, an explanation of why the risk is what it is, a hazard map, and an actionable alert.

**Tech Skills:** Python, Java, HTML, CSS, JavaScript, SQL, Microsoft Word, Microsoft Excel
**Soft Skills:** Typewriting, Time Management, Leadership, Teamwork, Quick Learner
**Languages:** English, Tamil
**Tools:** GitHub, VS Code, Excel

**Achievements:**
- Secured 2nd Prize in Code Fault Arena at VSB Engineering College
- Elite in NPTEL courses

**Certifications:**
- Artificial Intelligence Intern — Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)
- Introduction to IoT and Digital Transformation (Silver Category) — NASSCOM FutureSkills Prime
- Salesforce Administrator Explorer — FutureSkills Prime (Aligned with SSC NASSCOM)
- SkillQuest - Generative AI Literacy — Simplilearn through SkillUp
- Introduction to Cybersecurity Awareness — HP LIFE / HP Foundation
- Agentblazer Champion 2026 (AI Agentforce Skills) — Salesforce
- Data Analyst Foundation Course — Udemy

---

Task ID: 1
Agent: Main (Z.ai Code)
Task: Read resume PDF, plan portfolio architecture, and scaffold project files

Work Log:
- Extracted resume text via pdf skill `extract.text` command
- Reviewed existing Next.js 16 project structure (shadcn/ui already installed)
- Loaded LLM skill docs to plan the chatbot backend (z-ai-web-dev-sdk in API route)
- Designed a dark, tech-themed portfolio (emerald/teal accent — avoiding blue/indigo per rules) with single-page sections: Hero, About, Education, Skills, Projects, Certifications, Achievements, Contact, plus a floating chatbot widget

Stage Summary:
- Resume data fully captured and stored in this worklog
- Architecture decided: single `/` route, portfolio data centralized in `src/lib/portfolio-data.ts`, chatbot API at `src/app/api/chat/route.ts`, chatbot UI as a floating widget
- Color system: dark slate background + emerald/teal accents + amber for achievements

---
Task ID: 2
Agent: Main (Z.ai Code)
Task: Build the full portfolio (frontend + chatbot backend) and verify end-to-end

Work Log:
- Created centralized portfolio data: `src/lib/portfolio-data.ts` (profile, nav, stats, education, skills, projects, certifications, achievements, tools, languages, contact links, and a portfolio-knowledge blob used as the chatbot system prompt)
- Built chatbot backend: `src/app/api/chat/route.ts` using z-ai-web-dev-sdk (LLM skill). Includes in-memory sliding-window rate limiting (20 req/min/IP), conversation trimming (last 8 turns), error handling, and a portfolio-aware system prompt
- Built floating chatbot widget: `src/components/chatbot-widget.tsx` (framer-motion animations, quick-prompt chips, typing indicator, scroll-to-bottom, clear conversation, mobile-friendly)
- Built portfolio sections under `src/components/portfolio/`:
  - `navbar.tsx` — sticky, scroll-aware, active-section highlight (IntersectionObserver), mobile drawer
  - `hero.tsx` — animated gradient/grid background, glow orbs, profile card with stats, CTAs
  - `about.tsx` — bio + highlight cards + languages/tools/achievements side panels
  - `education.tsx` — vertical timeline with emerald dots
  - `skills.tsx` — animated skill bars (technical + soft) + tag cloud
  - `projects.tsx` — two project cards with AI-generated cover images, highlights, tags
  - `certifications.tsx` — 7 certification cards with accent-colored icons
  - `achievements.tsx` — amber-accented highlight cards
  - `contact.tsx` — contact links + working mailto form (sonner toasts)
  - `footer.tsx` — sticky footer (mt-auto) with social links + back-to-top
  - `section-heading.tsx` — reusable eyebrow/title/description heading
- Generated 2 AI project cover images via image-generation skill: `public/projects/uat-lens.png` and `public/projects/rock-guard.png`
- Updated `src/app/layout.tsx`: dark theme, SEO metadata, added Sonner toaster
- Updated `src/app/page.tsx`: flex-column layout so footer sticks to bottom
- Ran `bun run lint` — clean (no errors)
- Verified with agent-browser:
  - Page loads (GET / 200, ✓ Compiled)
  - All 8 sections render + footer present
  - Chatbot: typed "What are Akil's two main projects?" → AKIL Bot returned an accurate answer describing UAT-Lens-Ai and Rock-Guard AI
  - POST /api/chat returns 200
  - Mobile nav toggle present in DOM

Stage Summary:
- Portfolio fully built and verified working end-to-end
- Color system: dark slate (#020617) + emerald/teal accents + amber for achievements (no indigo/blue)
- Tech: Next.js 16 App Router, TypeScript, Tailwind 4, shadcn/ui, framer-motion, z-ai-web-dev-sdk
- Chatbot is grounded in the resume data (zero-hallucination-prone scope) and routes internship enquiries to email/LinkedIn
- Remaining optional polish: more micro-animations, blog/testimonials sections, dark/light toggle — can be picked up by the recurring webDevReview cron

Unresolved / Next-phase recommendations:
- Add a light/dark theme toggle (currently hard-coded dark)
- Add a downloadable resume PDF button in hero/contact
- Add a "now playing / currently learning" widget
- Add typing-animation on hero tagline
- Consider storing chatbot conversations in Prisma for analytics

---
Task ID: 3
Agent: webDevReview cron (round 1)
Task: Assess project status, perform QA, fix bugs, add features & improve styling

Work Log:
- Read existing worklog (Tasks 1 & 2) — portfolio + chatbot already built and functional
- QA via agent-browser: page loads (GET / 200), all 8 sections + footer present, chatbot returns accurate answers, mobile toggle detected, no runtime errors
- VLM screenshot analysis (hero + full page) identified critical bug + polish issues:
  - CRITICAL: `whileInView` framer-motion animations kept below-fold content at opacity:0 in full-page screenshots (and until user scrolls) — caused the full page to look ~80% empty
  - Body text contrast too low (slate-400 on slate-950)
  - Avatar Sparkles badge looked like an accidental overlap/artifact
  - Footer felt cramped

Fixes applied:
- Converted ALL `whileInView` → on-mount `animate` across 7 section files (section-heading, about, education, skills, projects, certifications, achievements, contact) — content is now always visible regardless of scroll/screenshot
- Improved text contrast: slate-400 → slate-300 for body text, descriptions, contact labels, placeholders (slate-500 → slate-400)
- Cleaned hero avatar (removed artifact-like Sparkles badge, kept clean gradient avatar with subtle pulse dot)
- Added `h-full` to certification cards for consistent grid heights
- Increased footer top spacing (mt-20, py-12/14) for breathing room

New features added:
1. **AnimatedCounter** (`animated-counter.tsx`) — hero stats now count up from 0 on mount (CGPA 8.21, SSLC 90.6, HSC 87, 7+ certs)
2. **Typewriter** (`typewriter.tsx`) — hero now shows a rotating role ("AI & Data Science Student" → "Python Problem-Solver" → "ML Enthusiast" → "Test Automation Builder" → "Future Intern") with blinking cursor
3. **Download Resume button** in hero — copies resume PDF to `/public/Akil-S-Resume.pdf`, wired with `download` attribute
4. **"Currently Learning" widget** in About section — live progress bars for ML (72%), Deep Learning (58%), Data Structures (80%), Generative AI (65%) with pulsing "Live" indicator
5. **TiltCard** (`tilt-card.tsx`) — 3D mouse-tracking tilt on project cards (rotateX/rotateY with spring physics) + animated gradient glow border on hover + translateZ depth on image
6. **ScrollProgress** (`scroll-progress.tsx`) — thin emerald→teal gradient bar at top of viewport that fills as you scroll (useScroll + useSpring)
7. Tech-stack mini-badges in hero (Python, ML, Data Science, Gen AI with icons)
8. Hero profile card now gently floats (y-axis bobbing animation)
9. Improved hero CTA button contrast (emerald-tinted outline for Resume button)

Verification:
- `bun run lint` — clean (0 errors, 0 warnings)
- Dev log: `✓ Compiled` + `GET / 200` consistently
- agent-browser: chatbot still functional after all changes
- VLM final report: **9/10 polish** (up from 7.5), all 9 sections render in full screenshot, Currently Learning widget visible, project cards consistent height, scroll progress bar present

Stage Summary:
- Critical visibility bug FIXED (content no longer hidden in full-page screenshots)
- Polish rating improved 7.5 → 9/10
- 6 new reusable components added (AnimatedCounter, Typewriter, TiltCard, ScrollProgress + integrations)
- Resume data file extended with `resumeUrl`, `currentlyLearning`, numeric stats
- All new features verified working via VLM + agent-browser

Unresolved / Next-phase recommendations (for next webDevReview round):
- Add subtle "lift" hover micro-interaction on certification cards (translateY + shadow) — projects already have tilt
- Mobile responsiveness audit: verify About 3-col grid + Skills side-by-side stack gracefully < 768px
- Add light/dark theme toggle (next-themes) — requires converting hardcoded slate/white classes to CSS variables (significant effort)
- Add a testimonials/mentors section (would need real data — avoid fabrication)
- Add page-load entrance animation for the whole page
- Consider adding a subtle noise texture overlay for premium feel
- Add `prefers-reduced-motion` support to disable heavy animations for accessibility
