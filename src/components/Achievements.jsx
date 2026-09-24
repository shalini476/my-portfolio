import { Users, Trophy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const achievements = [
  {
    title: 'Student Ambassador - Google Gemini',
    date: '31 Aug 2025 – Present',
    description:
      'Participating as a Google Gemini Student Ambassador, promoting Google Gemini and technology awareness among students and supporting student learning initiatives.',
    icon: Users,
    bgClass: 'bg-blue-100 dark:bg-blue-500/10',
    iconClass: 'text-blue-600 dark:text-blue-400',
    borderClass: 'border-blue-200 dark:border-blue-500/20',
    hoverBorderClass: 'hover:border-blue-400 dark:hover:border-blue-500/50',
  },
  {
    title: '3rd Prize – Adzap',
    date: 'Intra-college technical symposium',
    description:
      'Secured 3rd Prize in the Adzap event conducted at an intra-college technical symposium.',
    icon: Trophy,
    bgClass: 'bg-amber-100 dark:bg-amber-500/10',
    iconClass: 'text-amber-600 dark:text-amber-400',
    borderClass: 'border-amber-200 dark:border-amber-500/20',
    hoverBorderClass: 'hover:border-amber-400 dark:hover:border-amber-500/50',
  },
];

export default function Achievements() {
  const sectionRef = useScrollReveal();

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions and competitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border ${achievement.borderClass} ${achievement.hoverBorderClass} bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${achievement.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${achievement.iconClass}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                      {achievement.date}
                    </p>
                    <h3 className="text-slate-100 font-semibold text-lg leading-snug mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
