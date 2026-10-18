import { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar/NavBar';
import Terminal from '../../components/Terminal/Terminal';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { CODE_LINES } from '../../constants/components';


function Home() {
  const [terminal, setTerminal] = useState(null);

  return (
    <div className="min-h-screen bg-[#080b14] relative overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sid-Ahmed Moussi — Portfolio</title>
      </Helmet>


      <NavBar />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-56 w-[600px] h-[600px] bg-teal-500/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-56 w-[600px] h-[600px] bg-violet-500/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="min-h-screen flex items-center px-6 relative z-10">
        <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/25 bg-teal-400/[0.06] text-teal-400 text-[11px] font-medium tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Disponible pour de nouvelles opportunités
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                Sid-Ahmed<br />
                <span className="text-white">Moussi</span>
              </h1>

              <p className="text-base lg:text-lg text-gray-500 mb-3 mono">
                <span className="text-teal-400">&lt;</span>
                Full Stack Developer
                <span className="text-teal-400"> /&gt;</span>
              </p>

              <p className="text-gray-500 max-w-md mb-10 leading-relaxed text-sm lg:text-base">
                Développeur Full Stack diplômé d'un Mastère Ingénierie du Web, je conçois des
                applications web robustes, du backend Java&nbsp;/&nbsp;Spring Boot au frontend
                React&nbsp;/&nbsp;TypeScript. Mes 3&nbsp;ans d'expérience, en alternance et en
                entreprise, m'ont appris la rigueur, la qualité de code et le travail en équipe.
                Je cherche aujourd'hui à me spécialiser sur la stack Spring Boot&nbsp;/&nbsp;React.
              </p>

              <div className="mb-10">
                <button
                  onClick={() => setTerminal(true)}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0d1117] border border-teal-500/30 text-teal-400 text-sm font-semibold shadow-lg shadow-teal-500/10 hover:border-teal-500/60 hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all duration-200 mono group"
                >
                  <span className="flex items-center gap-1.5 text-gray-600 group-hover:text-teal-400/60 transition-colors">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </span>
                  <span className="text-gray-600 select-none">$</span>
                  Ouvrir la console
                  <FiArrowRight size={13} className="opacity-60" />
                </button>
              </div>


              <div className="flex items-center gap-5">
                <div className="h-px w-6 bg-white/15" />
                <a
                  href="https://github.com/Sid-Ahmed7"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 text-xs hover:text-teal-400 transition-colors duration-200 font-medium mono"
                >
                  <FiGithub size={13} /> GitHub
                </a>
                <span className="text-white/10">·</span>
                <a
                  href="https://www.linkedin.com/in/sid-ahmed-moussi-722b61238/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 text-xs hover:text-violet-400 transition-colors duration-200 font-medium mono"
                >
                  <FiLinkedin size={13} /> LinkedIn
                </a>
                <div className="h-px flex-1 bg-white/15" />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-teal-500/10 via-transparent to-violet-500/10 rounded-3xl blur-2xl" />

                <div className="relative bg-[#0d1117] border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.02]">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-3 text-gray-600 text-[11px] mono">developer.ts</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-teal-400/60 animate-pulse" />
                  </div>

                  <div className="p-6">
                    <pre className="mono text-[12.5px] leading-7">
                      {CODE_LINES.map(({ n, text, c }) => (
                        <div key={n} className="flex items-start gap-5">
                          <span className="text-gray-700 text-[10px] w-4 shrink-0 mt-0.5 select-none tabular-nums">{n}</span>
                          <span className={c}>{text}</span>
                        </div>
                      ))}
                    </pre>

                    <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-600 mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50" />
                        TypeScript
                      </div>
                      <span className="text-[10px] text-gray-700 mono">UTF-8</span>
                      <span className="ml-auto text-[10px] text-gray-700 mono">Ln 7, Col 2</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-4 bg-[#0d1117] border border-teal-500/30 rounded-xl px-3 py-2 shadow-lg shadow-teal-500/10">
                  <span className="text-[11px] text-teal-400 font-semibold mono">Spring Boot</span>
                </div>
                <div className="absolute -bottom-3 -left-4 bg-[#0d1117] border border-violet-500/30 rounded-xl px-3 py-2 shadow-lg shadow-violet-500/10">
                  <span className="text-[11px] text-violet-400 font-semibold mono">React + TypeScript</span>
                </div>
              </div>
            </div>

          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-teal-400" />
            <span className="text-teal-400 text-[9px] tracking-[0.2em] uppercase mono">scroll</span>
          </div>
        </div>
      </div>

      {terminal && (
        <Terminal
          destination={null}
          onClose={() => setTerminal(null)}
        />
      )}
    </div>
  );
}

export default Home;
