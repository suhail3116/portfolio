import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TerminalCLI } from './components/TerminalCLI';
import { SkillMatrix } from './components/SkillMatrix';
import { ArchitectureSandbox } from './components/ArchitectureSandbox';
import { InteractiveHoverLinks } from './components/ui/interactive-hover-links';
import CoverflowDemo from './components/ui/coverflow-demo';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { IntroLoader } from './components/IntroLoader';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState<'neon' | 'emerald' | 'sapphire'>('neon');

  const cycleTheme = () => {
    const themes: ('neon' | 'emerald' | 'sapphire')[] = ['neon', 'emerald', 'sapphire'];
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
    document.body.setAttribute('data-theme', next);
  };

  const scrollToTerminal = () => {
    document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-[#00f0ff] selection:text-black">
      {/* Intro Loading / Landing Screen */}
      <AnimatePresence>
        {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <ParticleCanvas />

      {/* Ambient background glows */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00f0ff]/10 blur-[100px] pointer-events-none -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#a855f7]/10 blur-[100px] pointer-events-none -z-10" />

      <Navbar onToggleTheme={cycleTheme} onOpenTerminal={scrollToTerminal} />

      <main>
        <Hero onOpenTerminal={scrollToTerminal} />
        <TerminalCLI onCycleTheme={cycleTheme} />
        <SkillMatrix />

        {/* Integrated Coverflow 3D Showcase */}
        <section id="projects" className="py-20 border-y border-white/10 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              3D Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Project Showcase</h2>
            <p className="text-slate-400 text-sm mt-2">
              Move your cursor over any card to center it, or click the image to open the project.
            </p>
          </div>
          <CoverflowDemo />
        </section>

        <ArchitectureSandbox />

        {/* Integrated Interactive Hover Links Component */}
        <section id="interactive-links" className="py-20 border-y border-white/10 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              Interactive Navigation
            </span>
            <h2 className="text-3xl font-extrabold text-white">Explore Creative Services & Work</h2>
          </div>
          <InteractiveHoverLinks />
        </section>

        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
