import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiTerminal, FiChevronRight } from 'react-icons/fi';
import {PROMPT, COMPLETIONS, HINTS, TERMINAL_INIT, TERMINAL_HELP, TERMINAL_WHOAMI, TERMINAL_CD_ABOUT, TERMINAL_CD_PROJECTS, TERMINAL_OPEN_GITHUB, TERMINAL_OPEN_LINKEDIN, TERMINAL_EXIT} from '../../constants/components';

function run(rawCmd, navigate, close) {
  const t = rawCmd.trim().toLowerCase();

  if (t === '') return null;

  if (t === 'help') return TERMINAL_HELP;

  if (t === 'whoami') return TERMINAL_WHOAMI;

  if (t === 'cd about' || t === 'cd /about' || t === 'cd a-propos') {
    setTimeout(() => { navigate('/a-propos'); close(); }, 900);
    return TERMINAL_CD_ABOUT;
  }

  if (t === 'cd projects' || t === 'cd /projects' || t === 'cd mes-projet') {
    setTimeout(() => { navigate('/mes-projet'); close(); }, 900);
    return TERMINAL_CD_PROJECTS;
  }

  if (t === 'open github' || t === 'github') {
    window.open('https://github.com/Sid-Ahmed7', '_blank', 'noreferrer');
    return TERMINAL_OPEN_GITHUB;
  }

  if (t === 'open linkedin' || t === 'linkedin') {
    window.open('https://www.linkedin.com/in/sid-ahmed-moussi-722b61238/', '_blank', 'noreferrer');
    return TERMINAL_OPEN_LINKEDIN;
  }

  if (t === 'exit') {
    setTimeout(() => close(), 400);
    return TERMINAL_EXIT;
  }

  return [
    { text: `bash: ${rawCmd.trim()}: command not found`, c: 'text-red-400' },
    { text: "Tapez 'help' pour voir les commandes disponibles.", c: 'text-gray-500' },
  ];
}

const Terminal = ({ onClose }) => {
  const navigate = useNavigate();

  const [entries, setEntries] = useState([{ cmd: null, lines: TERMINAL_INIT }]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const submit = useCallback((cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const result = run(trimmed, navigate, onClose);

    if (result === '__CLEAR__') {
      setEntries([]);
    } else if (result !== null) {
      setEntries(prev => [...prev, { cmd: trimmed, lines: result }]);
    }

    setCmdHistory(prev => [trimmed, ...prev]);
    setHistIdx(-1);
    setInput('');
  }, [navigate, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : (cmdHistory[next] ?? ''));
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMPLETIONS.find(
        c => c.startsWith(input.toLowerCase()) && c.toLowerCase() !== input.toLowerCase()
      );
      if (match) setInput(match);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 p-4 bg-black/75 backdrop-blur-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); navigate('/a-propos'); }}
        className="w-full max-w-2xl py-2.5 px-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-500 text-[11px] mono hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
      >
        🏳️  Ok j'abandonne — voir le profil quand même
      </button>

      <div
        className="relative w-full max-w-2xl bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.015]">
          <span className="w-3 h-3 rounded-full bg-red-500/55" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/55" />
          <span className="w-3 h-3 rounded-full bg-green-500/55" />
          <span className="ml-3 text-gray-500 text-[11px] mono flex items-center gap-1.5">
            <FiTerminal size={10} /> bash — portfolio
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-gray-700 text-[10px] mono">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 animate-pulse" />
            connected
          </span>
          <button
            onClick={onClose}
            className="ml-3 w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.1] transition-colors"
            aria-label="Fermer"
          >
            <FiX size={11} />
          </button>
        </div>

        <div
          className="h-64 overflow-y-auto px-5 py-4 space-y-1"
          onClick={() => inputRef.current?.focus()}
        >
          {entries.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.cmd && (
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-teal-400/80 text-[11px] mono shrink-0 select-none">{PROMPT}</span>
                  <span className="text-white text-[12px] mono">{entry.cmd}</span>
                </div>
              )}
              {entry.lines.map((line, j) => (
                <div
                  key={j}
                  className={`text-[12px] mono leading-6 whitespace-pre ${line.c || 'text-gray-400'}`}
                >
                  {line.text || ' '}
                </div>
              ))}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div
          className="flex items-center gap-3 px-5 py-3 border-t border-white/[0.06] bg-white/[0.01]"
          onClick={() => inputRef.current?.focus()}
        >
          <span className="text-teal-400 text-[11px] mono shrink-0 select-none">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white text-[12px] mono outline-none caret-teal-400 placeholder-gray-700"
            placeholder="help"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={() => submit(input)}
            className="shrink-0 text-gray-600 hover:text-teal-400 transition-colors"
            aria-label="Exécuter"
          >
            <FiChevronRight size={14} />
          </button>
        </div>

        <div className="px-5 pt-2 pb-3 flex flex-wrap gap-1.5 items-center">
          {HINTS.map(({ label, cmd }) => (
            <button
              key={cmd}
              onClick={() => { setInput(cmd); inputRef.current?.focus(); }}
              onDoubleClick={() => submit(cmd)}
              title="Clic → saisir · Double-clic → exécuter"
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-gray-500 text-[10px] mono hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/[0.05] transition-all duration-150"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="px-5 pb-4 pt-1 border-t border-white/[0.04] flex items-center justify-between">
          <span className="text-gray-700 text-[10px] mono hidden sm:block">
            ↑↓ historique · Tab autocomplétion · Esc fermer
          </span>
          <button
            onClick={onClose}
            className="text-[11px] text-gray-500 hover:text-teal-400 transition-colors flex items-center gap-1 ml-auto mono"
          >
            Fermer <FiChevronRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
