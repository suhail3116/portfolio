import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal, ShieldCheck, Sparkles, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const { profile } = PORTFOLIO_DATA;
  const [typedTitle, setTypedTitle] = useState('');
  
  const titles = [
    "AI & Full Stack Engineer",
    "React & TypeScript Developer",
    "Claude AI Prompt Specialist",
    "3D WebGL Web Developer"
  ];

  useEffect(() => {
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const current = titles[titleIdx];
      if (isDeleting) {
        setTypedTitle(current.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypedTitle(current.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === current.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        speed = 400;
      }

      timer = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center pt-36 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
            {profile.status}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Hi, I'm <span className="gradient-text">{profile.name}</span>.<br />
            <span className="font-mono text-2xl sm:text-3xl text-[#00f0ff] h-10 block">
              {typedTitle}<span className="animate-ping">|</span>
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] text-[#050811] shadow-[0_4px_25px_rgba(0,240,255,0.3)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              Explore Projects <ArrowRight className="size-4" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenTerminal}
              className="px-6 py-3.5 rounded-xl font-semibold bg-slate-900/80 border border-white/10 text-white hover:border-[#00f0ff] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="size-4 text-[#00f0ff]" /> Launch CLI Terminal
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {profile.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#00f0ff]/30 transition-all"
              >
                <div className="text-2xl font-extrabold font-mono text-white">{stat.value}</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Animated Profile Photo Display */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center perspective-[1000px]"
        >
          <motion.div
            whileHover={{ rotateY: 6, rotateX: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-3.5 rounded-3xl bg-slate-900/80 border border-white/15 backdrop-blur-2xl shadow-2xl group cursor-pointer"
          >
            {/* Animated Glowing Holographic Aura Border behind the Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse" />

            {/* Profile Photo Image */}
            <div className="relative overflow-hidden rounded-2xl max-w-sm h-[400px]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Image Gradient Vignette & Cyber Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Online Pulse Dot at Top Right */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono font-bold text-emerald-400">ONLINE</span>
              </div>

              {/* Floating Tech Badge Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-[#00f0ff]/40 backdrop-blur-md text-[11px] font-mono text-[#00f0ff]"
              >
                <Code2 className="size-3" />
                <span>AI & Full Stack</span>
              </motion.div>
            </div>

            {/* Floating Verified Badge at Bottom Right */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-slate-950/95 border border-[#00f0ff]/50 p-4 rounded-2xl backdrop-blur-2xl flex items-center gap-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] group-hover:border-[#00f0ff] transition-all"
            >
              <div className="p-2.5 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff]">
                <ShieldCheck className="size-6 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white flex items-center gap-1">
                  <span>Verified Senior Developer</span>
                  <Sparkles className="size-3 text-[#00f0ff]" />
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">React • Node • TS • Claude AI</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
