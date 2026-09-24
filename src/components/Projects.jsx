import { Github, ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    number: '01',
    title: 'Discipline Management System',
    description:
      'A web-based system designed to manage and monitor student discipline cases through a structured workflow involving Principal, Dean, Discipline Head, HOD, Year Incharge, Faculty, Advisor and Mentor.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'DataTables'],
    features: [
      'Role-based workflow',
      'Student discipline case management',
      'Dashboard analytics',
      'Year-wise case distribution',
      'Reason-wise case analysis',
      'Pending case monitoring',
    ],
    github: 'https://github.com/shalini476',
    accent: 'from-blue-500 to-cyan-500',
    accentBg: 'bg-blue-100 dark:bg-blue-500/10',
    accentText: 'text-blue-600 dark:text-blue-400',
    accentBorder: 'border-blue-200 dark:border-blue-500/30',
  },
  {
    number: '02',
    title: 'Zero Trust Network Architecture with Machine Learning',
    description:
      'A secure network architecture project designed for work-from-home environments using Zero Trust principles and machine learning-based behaviour monitoring.',
    technologies: ['Python', 'Flask', 'SQLite/PostgreSQL', 'Scikit-learn', 'HTML', 'CSS'],
    features: [
      'OTP authentication',
      'CAPTCHA',
      'Session tracking',
      'User behaviour monitoring',
      'Secure document access',
      'Zero Trust security concepts',
    ],
    github: 'https://github.com/shalini476',
    accent: 'from-primary-500 to-pink-500',
    accentBg: 'bg-primary-100 dark:bg-primary-500/10',
    accentText: 'text-primary-600 dark:text-primary-400',
    accentBorder: 'border-primary-200 dark:border-primary-500/30',
  },
  {
    number: '03',
    title: 'Digital Twin-Based Reverse Inference System for Unlabeled Air Pollution Source Mapping',
    description:
      'A research-oriented system that explores the use of digital twin concepts and machine learning to infer potential pollution sources from environmental data.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'SHAP', 'Matplotlib'],
    features: [
      'Air quality analysis',
      'Reverse inference',
      'Pollution source mapping',
      'Machine learning',
      'Explainable AI',
    ],
    github: 'https://github.com/shalini476',
    accent: 'from-emerald-500 to-teal-500',
    accentBg: 'bg-emerald-100 dark:bg-emerald-500/10',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    accentBorder: 'border-emerald-200 dark:border-emerald-500/30',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useScrollReveal({ delay: index * 150 });

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col card card-hover overflow-hidden"
    >
      {/* Gradient top border accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent}`} />

      <div className="flex flex-1 flex-col p-6 pt-7">
        {/* Header: badge + title */}
        <div className="mb-4 flex items-start gap-4">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${project.accentBg} ${project.accentText} font-mono text-sm font-bold`}
          >
            {project.number}
          </span>
          <div className="flex items-center gap-2">
            <FolderGit2 className={`h-5 w-5 shrink-0 ${project.accentText}`} />
            <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${project.accentBorder} ${project.accentText}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="mb-6 flex-1 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 className={`h-4 w-4 shrink-0 ${project.accentText}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-xl border ${project.accentBorder} ${project.accentBg} px-5 py-2.5 text-sm font-medium ${project.accentText} transition-all duration-300 hover:brightness-110`}
        >
          <Github className="h-4 w-4" />
          View on GitHub
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="relative px-6 py-24 bg-slate-50 dark:bg-slate-900/50">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the projects I&apos;ve worked on
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
