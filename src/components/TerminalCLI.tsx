import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TerminalCLIProps {
  onCycleTheme: () => void;
}

interface CommandLog {
  command?: string;
  output: string;
}

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ onCycleTheme }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      output: 'Welcome to M MUHAMMED SUHAIL\'s Interactive CLI v2.4.0!\nType "help" to display available commands. Try typing "sudo hire" for priority status!'
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      setInputVal('');

      if (!cmd) return;

      if (cmd === 'clear') {
        setLogs([]);
        return;
      }

      if (cmd === 'theme') {
        onCycleTheme();
        setLogs((prev) => [...prev, { command: cmd, output: 'Switched color theme preset!' }]);
        return;
      }

      // Check for project specific lookup (e.g., "project 1", "project sumaiya", "project rolls")
      if (cmd.startsWith('project ') || cmd === 'project') {
        const query = cmd.replace('project', '').trim();
        if (!query) {
          setLogs((prev) => [
            ...prev,
            { command: cmd, output: PORTFOLIO_DATA.terminalCommands.projects }
          ]);
          return;
        }

        const num = parseInt(query, 10);
        let project = null;
        if (!isNaN(num) && num >= 1 && num <= PORTFOLIO_DATA.projects.length) {
          project = PORTFOLIO_DATA.projects[num - 1];
        } else {
          project = PORTFOLIO_DATA.projects.find((p) =>
            p.id.toLowerCase().includes(query) ||
            p.title.toLowerCase().includes(query) ||
            p.subtitle.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
          );
        }

        if (project) {
          const detailOutput = `=== PROJECT SPECIFICATION: ${project.title.toUpperCase()} ===\nCategory:     ${project.category}\nTech Stack:   ${project.tags.join(', ')}\nDescription:  ${project.description}\n\nKey Highlights:\n${project.highlights.map(h => `  • ${h}`).join('\n')}\n\nKey Metrics:\n${project.metrics.map(m => `  • ${m.label}: ${m.value}`).join('\n')}\n\nGitHub Repo:  ${project.github}${project.live ? `\nLive Demo:    ${project.live}` : ''}`;

          setLogs((prev) => [...prev, { command: cmd, output: detailOutput }]);
          return;
        } else {
          setLogs((prev) => [
            ...prev,
            { command: cmd, output: `No project found matching "${query}". Type "projects" to view all 17 projects.` }
          ]);
          return;
        }
      }

      // Check for certification specific lookup (e.g., "cert 1", "cert claude", "cert agile", "certs", "certifications")
      if (cmd === 'certs' || cmd === 'certifications') {
        setLogs((prev) => [
          ...prev,
          { command: cmd, output: PORTFOLIO_DATA.terminalCommands.certs }
        ]);
        return;
      }

      if (cmd.startsWith('cert ') || cmd === 'cert') {
        const query = cmd.replace('cert', '').trim();
        if (!query) {
          setLogs((prev) => [
            ...prev,
            { command: cmd, output: PORTFOLIO_DATA.terminalCommands.certs }
          ]);
          return;
        }

        const num = parseInt(query, 10);
        let cert = null;
        if (!isNaN(num) && num >= 1 && num <= PORTFOLIO_DATA.certifications.length) {
          cert = PORTFOLIO_DATA.certifications[num - 1];
        } else {
          cert = PORTFOLIO_DATA.certifications.find((c) =>
            c.id.toLowerCase().includes(query) ||
            c.title.toLowerCase().includes(query) ||
            c.issuer.toLowerCase().includes(query) ||
            c.credentialId.toLowerCase().includes(query) ||
            c.skills.some(s => s.toLowerCase().includes(query))
          );
        }

        if (cert) {
          const detailOutput = `=== CERTIFICATION SPECIFICATION: ${cert.title.toUpperCase()} ===\nIssuer:          ${cert.issuer}\nVerification:    ${cert.issueDate} (${cert.credentialId})\nCredential ID:   ${cert.credentialId}\nVerified Skills: ${cert.skills.join(', ')}\nVerification URL: ${cert.verificationUrl || 'https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/'}`;

          setLogs((prev) => [...prev, { command: cmd, output: detailOutput }]);
          return;
        } else {
          setLogs((prev) => [
            ...prev,
            { command: cmd, output: `No certification found matching "${query}". Type "certs" to view all 5 verified certifications.` }
          ]);
          return;
        }
      }

      const found = PORTFOLIO_DATA.terminalCommands[cmd as keyof typeof PORTFOLIO_DATA.terminalCommands];
      if (found) {
        setLogs((prev) => [...prev, { command: cmd, output: found }]);
      } else {
        setLogs((prev) => [
          ...prev,
          { command: cmd, output: `Command not found: "${cmd}". Type "help" for available commands.` }
        ]);
      }
    }
  };

  return (
    <section id="terminal" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <TerminalIcon className="size-3.5" /> Interactive CLI
          </span>
          <h2 className="text-3xl font-extrabold text-white">Developer Command Center</h2>
          <p className="text-slate-400 text-sm mt-2">
            Type commands below to inspect profile, skills, projects, and contact details in real-time.
          </p>
        </div>

        <div className="bg-[#080c14] border border-[#00f0ff]/30 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-mono">
          <div className="bg-[#0e1420] px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-xs text-slate-400">suhail@dev: ~/portfolio (zsh)</div>
            <div className="text-xs text-slate-500">UTF-8</div>
          </div>

          <div ref={terminalBodyRef} className="p-6 h-80 sm:h-96 overflow-y-auto text-sm text-[#38bdf8] leading-relaxed">
            {logs.map((log, idx) => (
              <div key={idx} className="mb-4">
                {log.command && (
                  <div className="flex items-center gap-2 text-[#00f0ff] font-bold mb-1">
                    <span>suhail@portfolio:~$</span>
                    <span className="text-white">{log.command}</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-slate-300">{log.output}</div>
              </div>
            ))}

            <div className="flex items-center gap-2">
              <span className="text-[#00f0ff] font-bold">suhail@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. help, about, skills, projects, certs)..."
                className="bg-transparent border-none outline-none text-white font-mono text-sm w-full"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
