import React, { useState } from 'react';
import { Cpu, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const { skillCategories, skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter((s) => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    const matchSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Cpu className="size-3.5" /> Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Full Stack Skill Matrix</h2>
          <p className="text-slate-400 text-base max-w-2xl mb-8">
            A comprehensive breakdown of technical proficiencies built across production engineering.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
            />
          </div>
        </div>

        {/* Animated Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((s, idx) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                    {s.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-2 py-0.5 rounded">
                    {s.years}
                  </span>
                </div>

                <div className="h-2 bg-slate-900 rounded-full overflow-hidden mb-3 p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] rounded-full shadow-[0_0_10px_#00f0ff]"
                  />
                </div>

                <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                  {s.highlight}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
