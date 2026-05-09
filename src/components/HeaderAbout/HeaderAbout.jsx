import React from 'react';
import IMG from '../../assets/Profil/Profil.jpg';
import Typewriter from 'typewriter-effect';
import CVButton from '../CVButton/CVButton';
import { FiMail, FiMapPin } from 'react-icons/fi';

const HeaderAbout = () => {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden" id="about">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/5 text-teal-400 text-xs font-medium tracking-widest uppercase mb-6">
              À propos de moi
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              Sid-Ahmed{' '}
              <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
                Moussi
              </span>
            </h1>

            <div className="text-lg text-teal-400 font-medium mb-6 h-8">
              <Typewriter
                options={{
                  strings: ['Développeur Full Stack'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-teal-400" />
                Île-de-France, France
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm lg:text-base">
              Passionné par l'informatique et plus particulièrement par le développement
              d'applications et de sites web. Grâce à mes formations, mes expériences
              professionnelles et mes projets personnels, j'ai acquis un ensemble de compétences
              solides. Actuellement en quête de nouvelles opportunités, je suis animé par le désir
              constant d'apprendre et de mettre en pratique mes connaissances.
            </p>

            <CVButton />
          </div>

          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-violet-500 rounded-2xl blur-lg opacity-20" />
              <div className="relative p-1 bg-gradient-to-r from-teal-400/30 to-violet-500/30 rounded-2xl">
                <img
                  src={IMG}
                  alt="Sid-Ahmed Moussi"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAbout;
