import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Sparkles, Code2, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Terminal CLI', href: '#terminal' },
    { label: 'Skill Matrix', href: '#skills' },
    { label: '3D Showcase', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const techBadges = [
    'React.js',
    'Next.js',
    'TypeScript',
    'Claude API',
    'Three.js 3D',
    'Node.js',
    'Supabase',
    'Tailwind CSS',
  ];

  return (
    <footer className="relative bg-[#04060d] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Developer Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              />
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>{profile.name}</span>
                  <span className="text-xs font-mono font-bold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                    @suhail3116
                  </span>
                </h3>
                <p className="text-xs font-mono text-[#00f0ff]">{profile.title}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {profile.bio}
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[#00f0ff]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-[#a855f7]" />
                <a href={`mailto:${profile.social.email}`} className="hover:text-white transition-colors">
                  {profile.social.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[#10b981]" />
                <a href={`tel:${profile.social.phone}`} className="hover:text-white transition-colors">
                  {profile.social.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Terminal className="size-3.5 text-[#00f0ff]" /> Navigation Map
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="text-slate-600 group-hover:text-[#00f0ff] font-mono text-xs">▹</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Stack & Social Links (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Code2 className="size-3.5 text-[#a855f7]" /> Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Connect & Follow</h5>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github className="size-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="size-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={`mailto:${profile.social.email}`}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all shadow-lg"
                  aria-label="Email Contact"
                >
                  <Mail className="size-5" />
                </motion.a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Status & Back To Top */}
        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>System Status: 🟢 Available for Full-Stack Contracts</span>
          </div>

          <div className="text-slate-500">
            © 2026 M MUHAMMED SUHAIL (@suhail3116). Crafted with React, TypeScript & Motion.
          </div>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 text-[#00f0ff]" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};
