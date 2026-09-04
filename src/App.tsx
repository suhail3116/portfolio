import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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

  React.useEffect(() => {
    if (window.location.hash && window.location.hash !== '#about') {
      window.history.replaceState(null, '', ' ');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleCompleteIntro = () => {
    setShowIntro(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

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
        {showIntro && <IntroLoader onComplete={handleCompleteIntro} />}
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

        {/* Integrated Coverflow 3D Showcase with Ambient Video Background */}
        <section id="projects" className="py-20 border-y border-white/10 relative overflow-hidden bg-[#0a0d14]/75">
          {/* Ambient Video Background Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-0">
            {/* Ambient Breathing Motion Layer */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.32, 0.44, 0.32],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full"
            >
              <video
                src="/assets/Scroll_down.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center mix-blend-screen filter contrast-125 brightness-90 saturate-110 [mask-image:radial-gradient(ellipse_85%_80%_at_50%_50%,black_35%,transparent_90%)]"
              />
            </motion.div>

            {/* Smooth Blend Gradients to seamlessly merge with adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-transparent to-[#0a0d14] opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14]/80 via-transparent to-[#0a0d14]/80 opacity-70" />

            {/* Ambient Neon Radial Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Subtle Cyber Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 mb-4 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              3D Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Project Showcase</h2>
            <p className="text-slate-400 text-sm mt-2">
              Move your cursor over any card to center it, or click the image to open the project.
            </p>
          </div>
          <div className="relative z-10">
            <CoverflowDemo />
          </div>
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
