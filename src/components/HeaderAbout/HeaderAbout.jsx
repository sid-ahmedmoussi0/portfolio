import IMG from '../../assets/Profil/Profil.jpg';
import Typewriter from 'typewriter-effect';
import { TYPE_WRITER_STRINGS } from '../../constants/home';
import CVButton from '../CVButton/CVButton';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';

const HeaderAbout = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden" id="about">
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-teal-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-violet-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/25 bg-teal-400/[0.06] text-teal-400 text-[11px] font-medium tracking-widest uppercase mb-6">
              À propos de moi
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 leading-tight tracking-tight">
              Sid-Ahmed<br />
              <span className="text-white">Moussi</span>
            </h1>

            <div className="flex items-center gap-2 text-base text-teal-400 font-medium mb-5 h-8 mono">
              <span className="text-gray-600 select-none">&gt;_</span>
              <Typewriter
                options={{
                  strings: TYPE_WRITER_STRINGS,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-teal-400" size={11} />
                Île-de-France, France
              </span>
              <span className="flex items-center gap-1.5">
                <FiBriefcase className="text-teal-400" size={11} />
                <span className="text-white font-semibold">3+</span> ans d'expérience
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Disponible pour de nouvelles opportunités
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
    Passionné par l'informatique et plus particulièrement par le développement
              d'applications et de sites web. Grâce à mes formations, mes expériences
              professionnelles et mes projets personnels, j'ai acquis un ensemble de compétences
              solides. Actuellement en quête de nouvelles opportunités, je suis animé par le désir
              constant d'apprendre et de mettre en pratique mes connaissances.
            </p>

            <CVButton />
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/15 to-violet-500/15 rounded-3xl blur-2xl" />

              <div className="relative p-[2px] bg-gradient-to-br from-teal-400/40 to-violet-500/40 rounded-2xl shadow-2xl">
                <div className="bg-[#080b14] rounded-2xl p-1">
                  <img
                    src={IMG}
                    alt="Sid-Ahmed Moussi"
                    className="w-80 h-80 lg:w-[360px] lg:h-[360px] object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-5 bg-[#0d1117] border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs text-gray-300 font-medium">Open to work</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeaderAbout;
