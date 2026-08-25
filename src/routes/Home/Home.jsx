import React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/Button/Button';
import { TYPE_WRITER_STRINGS } from '../../constants/home';

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
          <span className="text-white">
            Moussi
          </span>
        </h1>

        <div className="text-xl lg:text-2xl text-gray-400 font-medium mb-6 h-9">
          <Typewriter
            options={{
              strings: TYPE_WRITER_STRINGS,
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
          <Button to="/a-propos">En savoir plus</Button>
          <Button to="/mes-projet" variant="outline">Voir mes projets</Button>
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
