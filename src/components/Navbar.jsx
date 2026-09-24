import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Publications', id: 'publications' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Co-Curricular Activities', id: 'co-curricular-activities' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-slate-950/70 border-b border-slate-700/50 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-500 via-pink-500 to-rose-500 bg-clip-text text-transparent select-none"
          aria-label="Go to home"
        >
          SP
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors duration-200"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 space-y-1 bg-slate-950/90">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
