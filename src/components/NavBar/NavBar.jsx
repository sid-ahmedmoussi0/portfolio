import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from './../../constants/navbar';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-[#080b14]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/">
          <img src="/logo.svg" alt="Logo" width="44" height="44" />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/[0.06]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-teal-400 to-violet-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="mailto:moussisidahmed0@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-500/[0.08] border border-teal-500/25 text-teal-400 text-xs font-semibold hover:bg-teal-500/[0.14] hover:border-teal-500/40 transition-all duration-200"
          >
            Contact
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {open ? <FiX size={15} /> : <FiMenu size={15} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-teal-400 bg-teal-400/[0.08]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:moussisidahmed0@gmail.com"
            className="mt-2 py-3 px-4 rounded-xl text-sm font-medium text-center bg-teal-500/[0.08] border border-teal-500/20 text-teal-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
