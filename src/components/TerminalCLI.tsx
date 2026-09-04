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
      output: 'Welcome to Alex Mercer\'s Interactive CLI v2.4.0!\nType "help" to display available commands. Try typing "sudo hire" for priority status!'
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="text-xs text-slate-400">alex@mercer-macbook: ~/portfolio (zsh)</div>
            <div className="text-xs text-slate-500">UTF-8</div>
          </div>

          <div className="p-6 h-72 overflow-y-auto text-sm text-[#38bdf8] leading-relaxed">
            {logs.map((log, idx) => (
              <div key={idx} className="mb-4">
                {log.command && (
                  <div className="flex items-center gap-2 text-[#00f0ff] font-bold mb-1">
                    <span>alex@portfolio:~$</span>
                    <span className="text-white">{log.command}</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-slate-300">{log.output}</div>
              </div>
            ))}

            <div className="flex items-center gap-2">
              <span className="text-[#00f0ff] font-bold">alex@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. help, about, skills, projects)..."
                className="bg-transparent border-none outline-none text-white font-mono text-sm w-full"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
