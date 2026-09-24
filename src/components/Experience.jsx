import { Users, Code, Briefcase, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    title: 'Google Student Ambassador',
    period: '31 Aug 2025 – Present',
    icon: Users,
    description:
      'Participated as a Google Student Ambassador, promoting technology awareness, student learning initiatives and Google technologies among the campus community.',
    badge: 'Leadership',
    badgeColor: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-500/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    dotColor: 'bg-blue-500',
    extra: '2025–2026',
  },
  {
    title: 'Elysium Pro Technologies',
    period: 'June 2025 – July 2025',
    icon: Briefcase,
    description: 'Full Stack Development (Java)',
    badge: 'Internship',
    badgeColor: 'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400',
    iconBg: 'bg-violet-100 dark:bg-violet-500/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    dotColor: 'bg-violet-500',
    technologies: ['Apache NetBeans', 'XAMPP'],
  },
  {
    title: 'Prodigy Infotech',
    period: 'February 2025 – March 2025',
    icon: Briefcase,
    description: 'Web Development',
    badge: 'Internship',
    badgeColor: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400',
    iconBg: 'bg-cyan-100 dark:bg-cyan-500/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    dotColor: 'bg-cyan-500',
    technologies: ['VS Code', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'TIH Hands-on Project Experience',
    period: 'Project Based',
    icon: Code,
    description:
      'Gained practical hands-on experience working with web development technologies.',
    badge: 'Technical',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
    iconBg: 'bg-emerald-100 dark:bg-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'Git'],
  },
];

function TimelineItem({ experience, index }) {
  const itemRef = useScrollReveal({ delay: index * 200 });
  const Icon = experience.icon;

  return (
    <div ref={itemRef} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full ${experience.iconBg} flex items-center justify-center border-4 border-white dark:border-slate-950 z-10`}>
        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${experience.iconColor}`} />
      </div>

      {/* Card */}
      <div className="card card-hover">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${experience.badgeColor}`}>
            {experience.badge}
          </span>
          <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{experience.period}</span>
          </div>
          {experience.extra && (
            <span className="text-xs text-slate-400 dark:text-slate-500">{experience.extra}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {experience.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
          {experience.description}
        </p>

        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 rounded-lg text-xs text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useScrollReveal();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary-600 dark:text-blue-400" />
            <span className="text-sm text-slate-600 dark:text-slate-400">What I&apos;ve Done</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Experience &amp; Activities</span>
          </h2>
          <p className="section-subtitle">My journey and key activities</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-primary-500/50 to-emerald-500/50" />

          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
