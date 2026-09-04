import React from 'react';
import { Briefcase, GraduationCap, Trophy, Award, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const { experience, education, honors, certifications, profile } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        
        {/* Experience Header & Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="size-3.5" /> Career & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Experience</h2>
            <p className="text-slate-400 text-sm mt-2">
              Leadership, cross-functional project management, and full-stack software execution.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-[#00f0ff]/40 space-y-12 max-w-3xl mx-auto">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0a0d14] border-4 border-[#00f0ff] shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform" />
                
                <div className="font-mono text-xs font-semibold text-[#00f0ff] mb-1">{item.period}</div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">{item.role}</h3>
                <div className="text-sm text-slate-400 mb-4">{item.company} • {item.location}</div>

                <motion.p
                  whileHover={{ scale: 1.01 }}
                  className="text-slate-300 text-sm mb-4 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/5 group-hover:border-[#00f0ff]/30 transition-all shadow-lg"
                >
                  {item.summary}
                </motion.p>

                <ul className="space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-[#00f0ff] font-mono">▹</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="size-3.5" /> Verified Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Licenses & Certifications</h2>
            <p className="text-slate-400 text-sm mt-2">
              Verified certifications and technical accreditations linked directly to LinkedIn profile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-[#10b981]/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-semibold flex items-center gap-1">
                      <ShieldCheck className="size-3" /> {cert.issueDate}
                    </span>
                    {cert.credentialId && (
                      <span className="text-slate-500">{cert.credentialId}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#10b981] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-sm text-slate-400 mb-4">{cert.issuer}</div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 group-hover:border-[#10b981]/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between text-xs font-mono font-bold text-[#10b981] hover:underline pt-3 border-t border-white/5 cursor-pointer"
                >
                  <span>Verify on LinkedIn</span>
                  <ExternalLink className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7000ff]/10 border border-[#7000ff]/20 text-[#a855f7] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="size-3.5" /> Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Education & Degrees</h2>
            <p className="text-slate-400 text-sm mt-2">
              Rigorous foundation in Computer Science Engineering and Artificial Intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-[#a855f7]/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#a855f7] mb-2">
                    <span>{edu.year}</span>
                    <span className="px-2 py-0.5 rounded bg-[#a855f7]/10 border border-[#a855f7]/30">{edu.status}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#a855f7] transition-colors">{edu.degree}</h3>
                  <div className="text-sm text-slate-400 mb-4">{edu.institution}</div>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-[#a855f7] font-mono">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons & Awards Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Trophy className="size-3.5" /> Hackathons & Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">National Competitions & Honors</h2>
            <p className="text-slate-400 text-sm mt-2">
              National hackathon finalist and active competitive tech sprinter.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {honors.map((honor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#eab308]/60 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#eab308] font-mono">{honor.number}</span>
                    <Award className="size-5 text-[#eab308] group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#eab308] transition-colors">{honor.title}</h3>
                  <div className="text-xs text-slate-400 mb-3">{honor.event}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {honor.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="inline-block text-[11px] font-mono font-bold text-[#eab308] bg-[#eab308]/10 px-2 py-1 rounded border border-[#eab308]/20">
                    🏆 {honor.achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
