import React, { useState, useEffect } from 'react';
import { Palette, Terminal, Menu, X, Sparkles, Github, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onToggleTheme: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, onOpenTerminal }) => {
  const { profile } = PORTFOLIO_DATA;
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.015 }}
        className={`fixed top-4 inset-x-0 mx-auto w-[94%] max-w-7xl z-50 transition-all duration-300 rounded-full ${
          scrolled
            ? 'bg-[#060913]/95 backdrop-blur-2xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.9)] hover:border-[#00f0ff]/50 hover:shadow-[0_15px_45px_rgba(0,240,255,0.25)] py-2 px-4 sm:px-6'
            : 'bg-[#0a0d17]/85 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-[#00f0ff]/40 hover:shadow-[0_15px_45px_rgba(0,240,255,0.2)] py-2.5 px-4 sm:px-6'
        }`}
      >

          {/* Scroll Progress Bar at the Top Rim */}
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-white/5 overflow-hidden rounded-full pointer-events-none z-20">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-2 relative z-20">
          
          {/* Brand Logo & Developer Avatar */}
          <a
            href="https://github.com/suhail3116"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#00f0ff]/50 group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10b981] rounded-full border-2 border-[#060913] shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex flex-col">
              <div className="font-extrabold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1 group-hover:text-[#00f0ff] transition-colors">
                <span>SUHAIL.M</span>
                <span className="text-[9px] font-mono font-bold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-1 py-0.1 rounded">
                  DEV
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 -mt-0.5 hidden xl:inline-block">
                Full Stack & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 to-[#a855f7]/20 border border-[#00f0ff]/50 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Terminal Quick Command Button */}
            <button
              onClick={onOpenTerminal}
              className="p-1.5 sm:px-3 sm:py-1 rounded-full text-slate-300 hover:text-[#00f0ff] bg-white/5 border border-white/10 hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all flex items-center gap-1 cursor-pointer text-xs font-mono"
              title="Open Interactive Terminal"
            >
              <Terminal className="size-3.5 text-[#00f0ff]" />
              <span className="hidden sm:inline-block">CLI</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:px-3 sm:py-1 rounded-full text-slate-300 hover:text-[#a855f7] bg-white/5 border border-white/10 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10 transition-all flex items-center gap-1 cursor-pointer text-xs font-semibold"
              title="Cycle Color Theme"
            >
              <Palette className="size-3.5 text-[#a855f7]" />
              <span className="hidden md:inline-block">Theme</span>
            </button>

            {/* Direct Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 sm:px-4 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] text-[#050811] shadow-[0_4px_20px_rgba(0,240,255,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Contact</span>
              <Sparkles className="size-3" />
            </motion.a>

            {/* Mobile Drawer Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#00f0ff] transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#080c17]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-ping" />
                <span className="text-xs font-mono text-slate-300 font-semibold">M Muhammed Suhail</span>
              </div>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#00f0ff] flex items-center gap-1 hover:underline"
              >
                <Github className="size-3.5" /> GitHub <ArrowUpRight className="size-3" />
              </a>
            </div>

            <ul className="grid grid-cols-2 gap-2 mb-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      activeSection === item.id
                        ? 'bg-[#00f0ff]/15 border border-[#00f0ff] text-[#00f0ff]'
                        : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onOpenTerminal();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center justify-center gap-2 hover:border-[#00f0ff]"
              >
                <Terminal className="size-4 text-[#00f0ff]" /> CLI Terminal
              </button>
              <button
                onClick={onToggleTheme}
                className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 hover:border-[#a855f7]"
              >
                <Palette className="size-4 text-[#a855f7]" /> Switch Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
