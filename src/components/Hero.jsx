import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-500/20 dark:bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-cyan-500/10 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div
        ref={revealRef}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-2">
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="bg-gradient-to-r from-primary-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Shalini P
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Final-Year Computer Science &amp; Business Systems Student
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          I am a passionate technology enthusiast interested in software
          development, full-stack development, cybersecurity and machine
          learning. I enjoy building practical solutions and continuously
          improving my technical skills.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="btn-primary"
          >
            View My Projects
            <ArrowDown size={18} />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
            <Mail size={18} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/shalini-p-001321290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/shalini476"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="mailto:shalinicsbs@gmail.com"
            className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
