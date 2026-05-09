import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import NavBar from '../../components/NavBar/NavBar';

function Home() {
  return (
    <div className="min-h-screen bg-[#080b14] relative overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sid-Ahmed Moussi - Portfolio</title>
      </Helmet>

      <NavBar />

      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/5 text-teal-400 text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Disponible pour de nouvelles opportunités
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          Sid-Ahmed{' '}
          <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
            Moussi
          </span>
        </h1>

        <div className="text-xl lg:text-2xl text-gray-400 font-medium mb-6 h-9">
          <Typewriter
            options={{
              strings: [
                'Développeur Full Stack',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
            }}
          />
        </div>

        <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed text-sm lg:text-base">
          Découvrez mon parcours et mes projets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/a-propos">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-violet-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-teal-500/20">
              En savoir plus
            </button>
          </Link>
          <Link to="/mes-projet">
            <button className="px-8 py-3 border border-white/15 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors duration-200">
              Voir mes projets
            </button>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-teal-400" />
          <div className="w-1 h-1 rounded-full bg-teal-400" />
        </div>
      </div>
    </div>
  );
}

export default Home;
