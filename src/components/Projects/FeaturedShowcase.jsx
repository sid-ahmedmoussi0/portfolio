import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import Button from '../Button/Button';

const FeaturedShowcase = ({ project, onClick }) => (
  <div
    className="relative p-px rounded-2xl bg-gradient-to-r from-teal-500/40 via-violet-500/20 to-teal-500/40 mb-8 cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative bg-[#080b14] rounded-2xl overflow-hidden min-h-[300px] flex flex-col lg:flex-row">

      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              En production
            </span>
          </div>

          <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 max-w-lg">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.language.split(', ').map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md" icon={<FiArrowRight size={14} />}>
              Explorer le projet
            </Button>
            {project.lien && project.lien !== '#' && (
              <Button
                variant="outline"
                size="sm"
                href={project.lien}
                target="_blank"
                rel="noreferrer"
                icon={<FiExternalLink size={14} />}
                onClick={(e) => e.stopPropagation()}
              >
                skaldly.fr
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-[42%] overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080b14]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/60 to-transparent" />
      </div>
    </div>
  </div>
);

export default FeaturedShowcase;
