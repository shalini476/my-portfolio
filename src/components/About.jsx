import { GraduationCap, MapPin, BookOpen, Code } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Title */}
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto mb-12 rounded-full" />

        {/* Introduction Text */}
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
          I am a final-year B.Tech Computer Science and Business Systems student at
          M. Kumarasamy College of Engineering, Karur. I am interested in software
          development, full-stack technologies, cybersecurity and machine learning.
          I enjoy learning new technologies, working on practical projects and
          participating in technical programs and events.
        </p>

        {/* Education Card */}
        <div className="card card-hover mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                B.Tech – Computer Science and Business Systems
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                M. Kumarasamy College of Engineering, Karur
              </p>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Aruppukottai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* CGPA */}
            <div className="flex-shrink-0 text-center md:text-right">
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">CGPA</p>
              <p className="text-4xl font-bold gradient-text">
                7.99
              </p>
            </div>
          </div>
        </div>

        {/* Info Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card card-hover flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Current Status</p>
              <p className="text-slate-900 dark:text-white font-medium">Final Year Student</p>
            </div>
          </div>

          <div className="card card-hover flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
              <p className="text-slate-900 dark:text-white font-medium">Tamil Nadu, India</p>
            </div>
          </div>

          <div className="card card-hover flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Interests</p>
              <p className="text-slate-900 dark:text-white font-medium">Software Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
