import React, { useState } from 'react';
import { ALL_SKILLS } from '../../constants/skills';


const Skills = () => {
  const [active, setActive] = useState('langages');

  const current = ALL_SKILLS.find((c) => c.id === active);

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Mes{' '}
            <span className="text-white">
              compétences
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_SKILLS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-gradient-to-r from-teal-500 to-violet-600 text-white shadow-lg shadow-teal-500/20'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {current?.elements.map((element) => (
            <div
              key={element.id}
              className="group bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-white/25 hover:bg-white/8 transition-all duration-200 hover:-translate-y-1"
            >
              <img
                src={element.path}
                alt={element.title}
                className={`h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-200 ${element.imgClass || ''}`}
              />
              <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
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
