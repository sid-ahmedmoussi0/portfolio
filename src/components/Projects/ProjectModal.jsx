import { useEffect } from 'react';
import { FiX, FiGithub, FiExternalLink, FiUsers } from 'react-icons/fi';
import Button from '../Button/Button';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isGithub = project.lien?.includes('github.com');
  const hasLink = project.lien && project.lien !== '#';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0d1117] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent" />

          {project.equipe && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/10">
              <FiUsers className="text-teal-400" />
              {project.equipe === '1' ? 'Projet solo' : `Équipe de ${project.equipe}`}
            </div>
          )}

          {project.type && (
            <div className="absolute bottom-4 left-4 text-xs px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400">
              {project.type}
            </div>
          )}

          <Button
            variant="ghost"
            size="sm"
            icon={<FiX size={16} />}
            onClick={onClose}
            className="absolute top-3 right-3 !p-2 !gap-0 rounded-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-white font-bold text-xl leading-snug mb-4">
            {project.title}
          </h2>

          {project.description && (
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          )}

          <div className="mb-6">
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.language.split(', ').map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {hasLink && (
            <div className="pt-5 border-t border-white/5">
              <Button
                variant="outline"
                size="sm"
                href={project.lien}
                target="_blank"
                rel="noreferrer"
                icon={isGithub ? <FiGithub /> : <FiExternalLink />}
              >
                {isGithub ? 'Voir le code source' : 'Voir le site en ligne'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
