import { useState } from 'react';
import { ALL_SKILLS } from '../../constants/skills';

const Skills = () => {
  const [active, setActive] = useState('langages');
  const current = ALL_SKILLS.find((c) => c.id === active);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-400/25 bg-violet-400/[0.06] text-violet-400 text-[11px] font-medium tracking-widest uppercase mb-4">
            Stack technique
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            Mes <span className="text-white">compétences</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_SKILLS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-gradient-to-r from-teal-500 to-violet-600 text-white shadow-lg shadow-teal-500/20'
                  : 'bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {current?.elements.map((element) => (
            <div
              key={element.id}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-teal-500/25 hover:bg-teal-500/[0.04] transition-all duration-200 hover:-translate-y-1 cursor-default"
            >
              <img
                src={element.path}
                alt={element.title}
                className={`h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-200 ${element.imgClass || ''}`}
              />
              <span className="text-gray-400 text-xs font-medium text-center group-hover:text-white transition-colors leading-tight">
                {element.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
