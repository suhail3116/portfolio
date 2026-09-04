import React from 'react';
import { Briefcase, GraduationCap, Trophy, Award, ShieldCheck, ExternalLink, Linkedin, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from './ui/tilt-card';
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
                <div className="absolute -left-[41px] top-5 w-4 h-4 rounded-full bg-[#0a0d14] border-4 border-[#00f0ff] shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform z-20" />
                
                <TiltCard
                  maxTilt={8}
                  glareColor="rgba(0, 240, 255, 0.2)"
                  className="bg-slate-900/70 p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00f0ff]/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,240,255,0.18)] transition-all duration-300"
                >
                  <div className="font-mono text-xs font-semibold text-[#00f0ff] mb-1">{item.period}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">{item.role}</h3>
                  <div className="text-sm text-slate-400 mb-4 font-mono">{item.company} • {item.location}</div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {item.summary}
                  </p>

                  {(item as any).teamMembers && (item as any).teamMembers.length > 0 && (
                    <div className="mb-5 p-4 rounded-xl bg-[#00f0ff]/5 border border-[#00f0ff]/20">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00f0ff] mb-2.5">
                        <Users className="size-4" />
                        <span>HACKATHON SQUAD ({(item as any).teamContext || 'COLLEGE CLASSMATES IN B.E. CSE'}):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {((item as any).teamMembers as string[]).map((member, mIdx) => (
                          <span
                            key={mIdx}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950/90 border border-white/10 text-slate-200 font-medium flex items-center gap-1.5 hover:border-[#00f0ff]/50 hover:text-white transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]" />
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-[#00f0ff] font-mono">▹</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div id="certifications" className="scroll-mt-24">
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

          {/* Featured LinkedIn Video Credential Showcase with Mouse Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <TiltCard
              maxTilt={6}
              scale={1.015}
              glareColor="rgba(0, 240, 255, 0.2)"
              className="rounded-3xl p-1 bg-gradient-to-r from-[#00f0ff] via-[#10b981] to-[#a855f7] shadow-[0_10px_40px_rgba(0,240,255,0.15)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.35)] transition-all duration-500 group overflow-hidden cursor-pointer"
            >
              <a
                href="https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/"
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full relative"
              >
                {/* Background ambient glowing blur */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00f0ff] via-[#10b981] to-[#a855f7] rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition-opacity duration-500 -z-10" />

                <div className="relative rounded-[22px] bg-[#070b14] overflow-hidden border border-white/10">
                  {/* Header Top Bar inside video player */}
                  <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-semibold pl-2 border-l border-white/10 flex items-center gap-1.5">
                        <Linkedin className="size-3.5 text-[#0077b5]" />
                        <span>linkedin.com/in/muhammed-suhail-4a0a9936b</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        LIVE RECORDING
                      </span>
                    </div>
                  </div>

                  {/* Video Container */}
                  <div className="relative aspect-video w-full bg-black overflow-hidden group/video">
                    <video
                      src="/assets/LinkedInCertificate.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

                    {/* Center hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-3 px-6 py-3 rounded-full bg-[#0077b5]/90 border border-white/30 text-white font-bold text-sm shadow-[0_0_30px_rgba(0,119,181,0.6)] backdrop-blur-md">
                        <Linkedin className="size-5 fill-current" />
                        <span>View Recent Activity on LinkedIn</span>
                        <ExternalLink className="size-4" />
                      </div>
                    </div>

                    {/* Bottom info banner */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#070b14] via-[#070b14]/85 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 pointer-events-none">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-[10px] font-semibold">
                            SCREEN RECORDING ARCHIVE
                          </span>
                          <span className="text-slate-400 text-xs">• Click anywhere to open</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                          LinkedIn Licenses, Certifications & Recent Activity
                          <ExternalLink className="size-4 text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0077b5]/80 group-hover:bg-[#0077b5] border border-white/20 text-white text-xs font-bold font-mono tracking-wide transition-colors shadow-lg">
                          <Linkedin className="size-3.5" />
                          <span>OPEN LINKEDIN ACTIVITY</span>
                          <ExternalLink className="size-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={10}
                  glareColor={cert.badgeColor ? `${cert.badgeColor}35` : "rgba(16, 185, 129, 0.25)"}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-[#10b981]/50 hover:shadow-[0_12px_35px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between group h-full"
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
                    className="inline-flex items-center justify-between text-xs font-mono font-bold text-[#10b981] hover:underline pt-3 border-t border-white/5 cursor-pointer relative z-20"
                  >
                    <span>Verify on LinkedIn</span>
                    <ExternalLink className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </TiltCard>
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={10}
                  glareColor="rgba(168, 85, 247, 0.25)"
                  className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-[#a855f7]/50 hover:shadow-[0_12px_35px_rgba(168,85,247,0.18)] transition-all duration-300 flex flex-col justify-between group h-full"
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
                </TiltCard>
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={12}
                  glareColor="rgba(234, 179, 8, 0.25)"
                  className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#eab308]/60 hover:shadow-[0_12px_35px_rgba(234,179,8,0.18)] transition-all duration-300 group flex flex-col justify-between h-full"
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
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
