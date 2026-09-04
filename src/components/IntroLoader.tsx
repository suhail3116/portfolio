import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const { profile, projects } = PORTFOLIO_DATA;
  const [progress, setProgress] = useState(0);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const loadingSteps = [
    "Initializing Core WebGL Shaders...",
    "Loading 17 GitHub Repositories & Visual Assets...",
    "Mounting Claude AI Prompt Engineering Pipelines...",
    "Synchronizing Supabase Realtime Voting Data...",
    "Synthesizing Interactive Portfolio Canvas...",
    "Ready to Launch Experience!"
  ];

  // Divide 17 projects into two running streams for double marquee motion
  const topProjects = projects.slice(0, 9);
  const bottomProjects = projects.slice(9, 17);

  useEffect(() => {
    // 7 seconds total loading duration (7000ms / 100 = 70ms per 1%)
    const startTime = performance.now();
    const duration = 7000; // Exactly 7 seconds

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(timer);
        setIsReady(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cycle status text over the 7-second window (7000ms / 6 steps ~ 1160ms)
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1160);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#03050c] text-white flex flex-col justify-between overflow-hidden selection:bg-[#00f0ff] selection:text-black font-sans"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Bar: Developer Badge & System Time */}
      <div className="relative z-10 p-6 sm:p-10 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#00f0ff]/60 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          />
          <div>
            <div className="font-black text-sm tracking-tight text-white flex items-center gap-1.5">
              <span>{profile.name}</span>
              <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-1.5 py-0.2 rounded font-bold">
                @suhail3116
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">Coimbatore, Tamil Nadu, India</div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>7-SECOND LOADING SEQUENCE</span>
        </div>
      </div>

      {/* Middle Section: Projects Running Motion Marquee Stream */}
      <div className="relative z-10 my-auto py-4 space-y-6 overflow-hidden">
        {/* Row 1: Marquee Scrolling Left */}
        <div className="flex w-max space-x-6 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
          {[...topProjects, ...topProjects].map((proj, idx) => (
            <motion.div
              key={`${proj.id}-top-${idx}`}
              whileHover={{ scale: 1.05, y: -4 }}
              className="w-72 sm:w-80 shrink-0 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all backdrop-blur-xl group cursor-pointer"
            >
              <div className="relative h-40 rounded-xl overflow-hidden mb-3 bg-black">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-[#00f0ff]">
                  {proj.category}
                </div>
              </div>

              <h4 className="font-bold text-sm text-white truncate group-hover:text-[#00f0ff] transition-colors">
                {proj.title}
              </h4>
              <p className="text-xs text-slate-400 truncate mt-0.5">{proj.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Marquee Scrolling Right */}
        <div className="flex w-max space-x-6 animate-[marquee-reverse_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...bottomProjects, ...bottomProjects].map((proj, idx) => (
            <motion.div
              key={`${proj.id}-bot-${idx}`}
              whileHover={{ scale: 1.05, y: -4 }}
              className="w-72 sm:w-80 shrink-0 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all backdrop-blur-xl group cursor-pointer"
            >
              <div className="relative h-40 rounded-xl overflow-hidden mb-3 bg-black">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-[#a855f7]">
                  {proj.category}
                </div>
              </div>

              <h4 className="font-bold text-sm text-white truncate group-hover:text-[#a855f7] transition-colors">
                {proj.title}
              </h4>
              <p className="text-xs text-slate-400 truncate mt-0.5">{proj.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Progress Bar, Status Text & Action Button */}
      <div className="relative z-10 p-6 sm:p-10 max-w-4xl mx-auto w-full text-center space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-[#00f0ff]">
              <Cpu className="size-4 animate-spin" /> {loadingSteps[loadingTextIndex]}
            </span>
            <span className="font-bold text-white text-base">{progress}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-3 w-full bg-slate-900/80 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] rounded-full shadow-[0_0_15px_#00f0ff] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Enter Button when Loading Reaches 100% */}
        <AnimatePresence>
          {isReady ? (
            <motion.button
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] text-[#050811] font-black text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,240,255,0.5)] mx-auto cursor-pointer"
            >
              <span>ENTER DEVELOPER PORTFOLIO</span>
              <ArrowRight className="size-5" />
            </motion.button>
          ) : (
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Synthesizing 17 Repositories • 7-Second Sequence Active
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Keyframe Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </motion.div>
  );
};
