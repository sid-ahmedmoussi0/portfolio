export const VARIANTS_BUTTON = {
  primary: 'bg-gradient-to-r from-teal-500 to-violet-600 text-white hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-teal-500/20',
  outline: 'border border-white/15 text-white hover:bg-white/5 transition-colors duration-200',
  ghost: 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200',
};

export const SIZES_BUTTON = {
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-8 py-3 text-sm font-semibold',
};

export const FILTERS = [
  { label: 'Tous', match: null },
  { label: 'Spring', match: 'Spring' },
  { label: 'React', match: 'React' },
  { label: 'Node.js', match: 'Node' },
  { label: 'PHP / Symfony', match: ['PHP', 'Symfony'] },
  { label: 'Python', match: 'Python' },
  { label: 'TypeScript', match: 'TypeScript' },
];

export const TYPE_STYLES = {
  Professionnel: {
    badge: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    glow:  'hover:shadow-[0_0_30px_rgba(20,184,166,0.12)] hover:border-teal-500/30',
  },
  Personnel: {
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    glow:  'hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:border-violet-500/30',
  },
  Académique: {
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    glow:  'hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] hover:border-amber-500/30',
  },
};

export const PROMPT = 'visitor@portfolio:~$';

export const COMPLETIONS = [
  'help', 'whoami', 'exit',
  'cd about', 'cd projects',
  'open github', 'open linkedin',
];

export const HINTS = [
  { label: 'help', cmd: 'help' },
  { label: 'whoami', cmd: 'whoami' },
  { label: 'cd about', cmd: 'cd about' },
  { label: 'cd projects', cmd: 'cd projects' },
  { label: 'open github', cmd: 'open github' },
  { label: 'open linkedin', cmd: 'open linkedin' },
];

export const TERMINAL_INIT = [
  { text: 'Portfolio de Sid-Ahmed Moussi — terminal interactif', c: 'text-teal-400' },
  { text: '─────────────────────────────────────────────────────────────', c: 'text-gray-700' },
  { text: "Tapez 'help' pour voir toutes les commandes disponibles.", c: 'text-gray-500' },
  { text: "💡 Essayez : whoami  ·  cd projects  ·  open github", c: 'text-amber-400/90' },
];

export const TERMINAL_HELP = [
  { text: 'Commandes disponibles :', c: 'text-teal-400' },
  { text: '', c: '' },
  { text: '  help                    Afficher cette aide', c: 'text-gray-400' },
  { text: '  whoami                  Informations sur le développeur', c: 'text-gray-400' },
  { text: '  cd about                Naviguer vers "À propos"', c: 'text-gray-400' },
  { text: '  cd projects             Naviguer vers "Projets"', c: 'text-gray-400' },
  { text: '  open github             Ouvrir mon GitHub', c: 'text-gray-400' },
  { text: '  open linkedin           Ouvrir mon LinkedIn', c: 'text-gray-400' },
  { text: '  exit                    Fermer le terminal', c: 'text-gray-400' },
  { text: '', c: '' },
  { text: "  ↑ ↓   Naviguer dans l'historique", c: 'text-gray-600' },
  { text: '  Tab   Autocomplétion', c: 'text-gray-600' },
  { text: '  Esc   Fermer', c: 'text-gray-600' },
];

export const TERMINAL_CD_ABOUT = [
  { text: 'Chargement de la section "À propos"...', c: 'text-teal-400' },
  { text: '✓ Redirection en cours — à tout de suite !', c: 'text-emerald-400' },
];

export const TERMINAL_CD_PROJECTS = [
  { text: 'Chargement de la section "Projets"...', c: 'text-teal-400' },
  { text: '✓ Redirection en cours — à tout de suite !', c: 'text-emerald-400' },
];

export const TERMINAL_OPEN_GITHUB = [
  { text: 'Ouverture de github.com/Sid-Ahmed7...', c: 'text-teal-400' },
  { text: '✓ Nouvel onglet ouvert', c: 'text-emerald-400' },
];

export const TERMINAL_OPEN_LINKEDIN = [
  { text: 'Ouverture de linkedin.com/in/sid-ahmed-moussi...', c: 'text-violet-400' },
  { text: '✓ Nouvel onglet ouvert', c: 'text-emerald-400' },
];

export const TERMINAL_EXIT = [
  { text: 'Au revoir ! 👋', c: 'text-gray-500' },
];

export const TERMINAL_WHOAMI = [
  { text: '┌─ Développeur Full Stack', c: 'text-teal-400' },
  { text: '│  Sid-Ahmed Moussi', c: 'text-white' },
  { text: '│', c: 'text-gray-700' },
  { text: '│  Stack      Spring Boot · React · TypeScript · Java', c: 'text-gray-400' },
  { text: '│  Mobilité   Île-de-France 🇫🇷', c: 'text-gray-400' },
  { text: '│  Diplôme    Master Ingénierie du Web – ESGI Paris', c: 'text-gray-400' },
  { text: '│  Recherche  CDI · Développeur Full Stack Spring / React', c: 'text-gray-400' },
  { text: '│  Contact    moussisidahmed0@gmail.com', c: 'text-gray-400' },
  { text: '└─ Statut     open to opportunities ✓', c: 'text-emerald-400' },
];

export const CODE_LINES = [
  { n: '01', text: 'const developer = {', c: 'text-gray-400' },
  { n: '02', text: '  name:     "Sid-Ahmed Moussi",', c: 'text-emerald-400' },
  { n: '03', text: '  role:     "Full Stack Developer",', c: 'text-sky-400' },
  { n: '04', text: '  stack:    ["Spring", "React", "Java"],',  c: 'text-violet-400' },
  { n: '05', text: '  status:   "open to opportunities",', c: 'text-amber-400' },
  { n: '06', text: '  location: "Île-de-France 🇫🇷",', c: 'text-teal-400' },
  { n: '07', text: '};', c: 'text-gray-400' },
];