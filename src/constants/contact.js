import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export const CONTACT_INFO = [
  { icon: <FiMail size={15} />, label: 'Email', value: 'moussisidahmed0@gmail.com', href: 'mailto:moussisidahmed0@gmail.com' },
  { icon: <FiPhone size={15} />, label: 'Téléphone', value: '06 21 74 63 55', href: 'tel:+33621746355' },
  { icon: <FiMapPin size={15} />, label: 'Localisation', value: 'Île-de-France, France', href: null },
];

export const CONTACT_FORM_INITIAL = { name: '', email: '', subject: '', message: '' };

export const CONTACT_SOCIALS = [
  { icon: <FiGithub size={16} />, label: 'GitHub', href: 'https://github.com/Sid-Ahmed7' },
  { icon: <FiLinkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sid-ahmed-moussi-722b61238/' },
];
export const INPUT_CLASS = 'w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none focus:border-teal-500/40 focus:bg-teal-500/[0.03] transition-all duration-200';
