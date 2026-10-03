import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Certifications } from "@/components/portfolio/certifications";
import { Achievements } from "@/components/portfolio/achievements";
import { BeyondWork } from "@/components/portfolio/beyond-work";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { MarqueeStrip } from "@/components/portfolio/marquee-strip";
import { CommandPalette } from "@/components/portfolio/command-palette";
import { ChatbotWidget } from "@/components/chatbot-widget";

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="section-divider" aria-hidden />
    </div>
  );
}

export default function Home() {
  return (
    <div className="noise-overlay relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Global decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-600/5 blur-[120px]" />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <About />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Certifications />
        <Divider />
        <Achievements />
        <Divider />
        <BeyondWork />
        <Divider />
        <Contact />
      </main>
      <Footer />

      {/* Floating AI chatbot */}
      <ChatbotWidget />
      {/* Command palette (Cmd+K / Ctrl+K) */}
      <CommandPalette />
    </div>
  );
}
