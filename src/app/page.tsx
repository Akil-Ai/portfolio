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
import { StatsCounter } from "@/components/portfolio/stats-counter";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { MarqueeStrip } from "@/components/portfolio/marquee-strip";
import { CommandPalette } from "@/components/portfolio/command-palette";
import { KeyboardHelp } from "@/components/portfolio/keyboard-help";
import { TerminalEasterEgg } from "@/components/portfolio/terminal-easter-egg";
import { AnimatedBackground } from "@/components/portfolio/animated-background";
import { CursorGlow } from "@/components/portfolio/cursor-glow";
import { PageEntrance } from "@/components/portfolio/page-entrance";
import { BackToTop } from "@/components/portfolio/back-to-top";
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
    <div className="noise-overlay relative flex min-h-screen flex-col text-slate-100">
      {/* Animated gradient background (slowly shifting hue) — provides the dark base + living orbs */}
      <AnimatedBackground />
      {/* Cursor-following glow (desktop / fine-pointer only) */}
      <CursorGlow />

      <PageEntrance>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <MarqueeStrip />
          <About />
          <Divider />
          <StatsCounter />
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
      </PageEntrance>

      {/* Floating AI chatbot */}
      <ChatbotWidget />
      {/* Back-to-top button (appears on scroll) */}
      <BackToTop />
      {/* Command palette (Cmd+K / Ctrl+K) */}
      <CommandPalette />
      {/* Keyboard shortcut help (? key) */}
      <KeyboardHelp />
      {/* Terminal easter egg (press 't') */}
      <TerminalEasterEgg />
    </div>
  );
}
