import { useState, useMemo } from 'react';
import ProjectsElements from '../../elements/ProjectsElements/ProjectsElements';
import ProjectModal from './ProjectModal';
import FeaturedShowcase from './FeaturedShowcase';
import ProjectCard from './ProjectCard';
import { FILTERS } from '../../constants/components';

const matchesFilter = (language, match) => {
  if (!match) return true;
  const targets = Array.isArray(match) ? match : [match];
  return targets.some((t) => language.includes(t));
};

const Projects = () => {
  const [active, setActive] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    const filter = FILTERS.find((f) => f.label === active);
    return ProjectsElements.filter((el) => matchesFilter(el.language, filter.match));
  }, [active]);

  const featured = active === 'Tous' ? ProjectsElements.find((p) => p.id === 16) : null;
  const gridItems = useMemo(
    () => (featured ? filtered.filter((p) => p.id !== 16) : filtered),
    [filtered, featured]
  );

  return (
    <section className="py-28 px-6 relative">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/5 text-teal-400 text-xs font-medium tracking-widest uppercase mb-6">
            Ce que j'ai construit
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Mes projets
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => {
            const count = ProjectsElements.filter((el) =>
              matchesFilter(el.language, f.match)
            ).length;
            return (
              <button
                key={f.label}
                onClick={() => setActive(f.label)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === f.label
                    ? 'bg-gradient-to-r from-teal-500 to-violet-600 text-white shadow-lg shadow-teal-500/20'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  active === f.label ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {featured && (
          <FeaturedShowcase
            project={featured}
            onClick={() => setSelectedProject(featured)}
          />
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((element) => (
            <ProjectCard
              key={element.id}
              element={element}
              onClick={() => setSelectedProject(element)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
