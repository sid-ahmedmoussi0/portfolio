import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navbar';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import ScrollToTopButton from '../TopButton/TopButton';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#080b14]">
      <ScrollToTopButton />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <div className="mb-4">
              <img src="/logo.svg" alt="Logo" width="44" height="44" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Développeur Full Stack 
            </p>
          </div>

          <div>
            <h6 className="text-white font-semibold text-sm mb-4">Navigation</h6>
            <ul className="space-y-2">
              {[
                ...NAV_LINKS,
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-500 text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold text-sm mb-4">Contact</h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:moussisidahmed0@gmail.com"
                  className="flex items-center gap-2.5 text-gray-500 text-sm hover:text-teal-400 transition-colors"
                >
                  <FiMail className="shrink-0" />
                  moussisidahmed0@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <FiPhone className="shrink-0" />
                  06 21 74 63 55
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {[
                {
                  icon: <FiGithub />,
                  href: 'https://github.com/Sid-Ahmed7',
                  label: 'GitHub',
                },
                {
                  icon: <FiLinkedin />,
                  href: 'https://www.linkedin.com/in/sid-ahmed-moussi-722b61238/',
                  label: 'LinkedIn',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          &copy; {currentYear} Sid-Ahmed Moussi. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
