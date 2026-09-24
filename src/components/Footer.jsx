import { Linkedin, Github, Mail, ArrowUp, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shalini-p-001321290/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/shalini476', label: 'GitHub' },
  { icon: Mail, href: 'mailto:shalinicsbs@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-sm">Back to top</span>
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:border-primary-500 hover:bg-primary-500 transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Built With Love */}
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
          </p>

          {/* Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-600">
            &copy; 2026 Shalini P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
