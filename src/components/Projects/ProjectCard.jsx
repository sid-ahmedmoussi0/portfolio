import { FiGithub, FiUsers, FiExternalLink } from 'react-icons/fi';
import Button from '../Button/Button';
import { TYPE_STYLES } from '../../constants/components';

const ProjectCard = ({ element, onClick }) => {
  const ts = TYPE_STYLES[element.type] ?? {};
  const hasLink = element.lien && element.lien !== '#';
  const isGithub = element.lien?.includes('github.com');

  return (
    <div
      className={`group relative bg-white/5 rounded-xl overflow-hidden cursor-pointer flex flex-col border border-white/10 hover:-translate-y-1.5 transition-all duration-300 ${ts.glow ?? 'hover:border-white/20'}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-44 shrink-0">
        <img
          src={element.src}
          alt={element.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/95 via-[#080b14]/20 to-transparent" />

        <div className="absolute top-3 inset-x-3 flex items-start justify-between gap-2">
          {element.type && ts.badge && (
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${ts.badge}`}>
              {element.type}
            </span>
          )}
          {element.equipe && (
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-full border border-white/10 ml-auto">
              <FiUsers size={10} className="text-teal-400" />
              {element.equipe === '1' ? '×1' : `×${element.equipe}`}
            </div>
          )}
        </div>

        {element.inProgress && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-[11px] px-2.5 py-1 rounded-full border border-amber-500/25 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            En cours
          </div>
        )}
      </div>

      <div className="relative z-10 p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-sm leading-snug mb-2">{element.title}</h3>

        {element.description && (
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{element.description}</p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {element.language.split(', ').map((tech) => (
            <span key={tech} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
              {tech}
            </span>
          ))}
        </div>

        {hasLink && (
          <div className="mt-auto pt-3 border-t border-white/5">
            <Button
              variant="ghost"
              size="sm"
              href={element.lien}
              target="_blank"
              rel="noreferrer"
              icon={isGithub ? <FiGithub size={12} /> : <FiExternalLink size={12} />}
              onClick={(e) => e.stopPropagation()}
            >
              {isGithub ? 'Code source' : 'Voir le site'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
