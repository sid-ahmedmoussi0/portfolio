import React, { useState } from 'react';
import ProjectsElements from '../../elements/ProjectsElements/ProjectsElements';
import { FiGithub, FiUsers, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-28 px-6 relative">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-xs font-medium tracking-widest uppercase mb-3">
            Ce que j'ai réalisé
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Mes{' '}
            <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
              projets
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ProjectsElements.map((element) => (
            <div
              key={element.id}
              onMouseEnter={() => setHovered(element.id)}
              onMouseLeave={() => setHovered(null)}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={element.src}
                  alt={element.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/80 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/10">
                  <FiUsers className="text-teal-400" />
                  {element.equipe}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-sm leading-snug mb-2">
                  {element.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {element.language.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {element.lien && element.lien !== '#' && (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <a
                      href={element.lien}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <FiGithub />
                      Voir le code
                      <FiExternalLink className="text-[10px]" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
