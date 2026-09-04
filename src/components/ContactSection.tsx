import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2, Copy, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    triggerToast("📋 Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(`🚀 Message sent! ${profile.name} will get back to you promptly.`);
  };

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Mail className="size-3.5" /> Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let's Build Something Extraordinary</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Interested in discussing AI engineering, full-stack applications, civic tech solutions, or technical collaborations? Drop a line and let's connect!
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02, x: 4 }}
              className="glass-card p-5 flex items-center justify-between border border-white/10 hover:border-[#00f0ff]/50 transition-all rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#00f0ff]" />
                <div>
                  <div className="text-xs text-slate-500">Direct Email</div>
                  <div className="text-sm font-mono font-bold text-white">{profile.social.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white hover:border-[#00f0ff] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? <CheckCircle2 className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </motion.div>

            {profile.social.phone && (
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-5 flex items-center gap-3 border border-white/10 hover:border-[#10b981]/50 transition-all rounded-2xl"
              >
                <Phone className="size-5 text-[#10b981]" />
                <div>
                  <div className="text-xs text-slate-500">Phone Contact</div>
                  <div className="text-sm font-mono font-bold text-white">{profile.social.phone}</div>
                </div>
              </motion.div>
            )}

            <motion.div
              whileHover={{ scale: 1.02, x: 4 }}
              className="glass-card p-5 flex items-center gap-3 border border-white/10 hover:border-[#a855f7]/50 transition-all rounded-2xl"
            >
              <Globe className="size-5 text-[#a855f7]" />
              <div>
                <div className="text-xs text-slate-500">Location & Timezone</div>
                <div className="text-sm font-semibold text-white">{profile.location}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 glass-card p-8 rounded-3xl border border-white/10 hover:border-[#00f0ff]/30 shadow-2xl transition-all"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@company.com"
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Project Type</label>
              <select className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                <option value="fullstack">Full Stack Web Application</option>
                <option value="ai">AI Application / Claude API Prompt Engineering</option>
                <option value="civic">Civic Tech / Web Security Platform</option>
                <option value="other">General Inquiry / Engineering Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Project Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project goals, technical requirements, or collaboration..."
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all resize-y"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ec4899] text-[#050811] font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              Send Message <Send className="size-4" />
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 bg-[#121824] border border-[#00f0ff] text-white text-sm px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3"
        >
          <CheckCircle2 className="size-5 text-[#00f0ff]" />
          <span>{toastMsg}</span>
        </motion.div>
      )}
    </section>
  );
};
