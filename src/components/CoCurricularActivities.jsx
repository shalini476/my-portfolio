import {
  FileText,
  Lightbulb,
  Code2,
  Rocket,
  Cpu,
  CalendarRange,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const activities = [
  {
    title: 'Dr. Kalam Young Achiever Award 2025',
    date: '',
    details: ['Activity: Idea Presented', 'Project: AQUILIS – Underwater Surveillance'],
    description:
      'Presented the idea "AQUILIS – Underwater Surveillance" at the Dr. Kalam Young Achiever Award 2025.',
    icon: Lightbulb,
    bgClass: 'bg-blue-100 dark:bg-blue-500/10',
    iconClass: 'text-blue-600 dark:text-blue-400',
    borderClass: 'border-blue-200 dark:border-blue-500/20',
    hoverBorderClass: 'hover:border-blue-400 dark:hover:border-blue-500/50',
  },
  {
    title: 'Paper Presentation – KPR Institute of Technology',
    date: '',
    details: ['Activity: Paper Presentation', 'Topic: Big Data Analytics'],
    description:
      'Presented a paper on "Big Data Analytics" at KPR Institute of Technology.',
    icon: FileText,
    bgClass: 'bg-violet-100 dark:bg-violet-500/10',
    iconClass: 'text-violet-600 dark:text-violet-400',
    borderClass: 'border-violet-200 dark:border-violet-500/20',
    hoverBorderClass: 'hover:border-violet-400 dark:hover:border-violet-500/50',
  },
  {
    title: 'Paper Presentation – Paavai Engineering College',
    date: '',
    details: ['Activity: Paper Presentation', 'Topic: AI in Education'],
    description:
      'Presented a paper on "AI in Education" at Paavai Engineering College.',
    icon: FileText,
    bgClass: 'bg-amber-100 dark:bg-amber-500/10',
    iconClass: 'text-amber-600 dark:text-amber-400',
    borderClass: 'border-amber-200 dark:border-amber-500/20',
    hoverBorderClass: 'hover:border-amber-400 dark:hover:border-amber-500/50',
  },
  {
    title: 'Codathon – KPR Institute of Technology',
    date: '',
    details: ['Activity: Codathon'],
    description:
      'Participated in a Codathon conducted at KPR Institute of Technology.',
    icon: Code2,
    bgClass: 'bg-cyan-100 dark:bg-cyan-500/10',
    iconClass: 'text-cyan-600 dark:text-cyan-400',
    borderClass: 'border-cyan-200 dark:border-cyan-500/20',
    hoverBorderClass: 'hover:border-cyan-400 dark:hover:border-cyan-500/50',
  },
  {
    title: 'HackXtreme’25 – National Level Hackathon',
    date: '',
    details: ['Activity: 24-Hour National Level Hackathon – HackXtreme’25', 'Venue: K. Ramakrishnan College of Engineering', 'Project: Project Symbiosis'],
    description:
      'Participated in the 24-hour National Level Hackathon "HackXtreme’25" at K. Ramakrishnan College of Engineering with Project Symbiosis.',
    icon: Rocket,
    bgClass: 'bg-pink-100 dark:bg-pink-500/10',
    iconClass: 'text-pink-600 dark:text-pink-400',
    borderClass: 'border-pink-200 dark:border-pink-500/20',
    hoverBorderClass: 'hover:border-pink-400 dark:hover:border-pink-500/50',
  },
  {
    title: 'Intellina 2K26 – National-Level Tech Fest',
    date: '6–7 March 2026',
    details: ['Activity: Web Agent Hackathon', 'Organized by: Department of Artificial Intelligence and Data Science, Coimbatore Institute of Technology (CIT)'],
    description:
      'Participated in the Web Agent Hackathon at Intellina 2K26, a National-Level Tech Fest conducted by the Department of Artificial Intelligence and Data Science, Coimbatore Institute of Technology.',
    icon: Cpu,
    bgClass: 'bg-indigo-100 dark:bg-indigo-500/10',
    iconClass: 'text-indigo-600 dark:text-indigo-400',
    borderClass: 'border-indigo-200 dark:border-indigo-500/20',
    hoverBorderClass: 'hover:border-indigo-400 dark:hover:border-indigo-500/50',
  },
  {
    title: 'National-Level Workshop – Karpagam College of Engineering',
    date: '16 February 2024',
    details: ['Activity: One Day National-Level Workshop on "Antenna Design for Next Generation Wireless Applications"', 'Organized by: Department of Electronics and Communication Engineering in association with IEEE, Karpagam College of Engineering'],
    description:
      'Participated in the One Day National-Level Workshop on "Antenna Design for Next Generation Wireless Applications" at Karpagam College of Engineering.',
    icon: Briefcase,
    bgClass: 'bg-emerald-100 dark:bg-emerald-500/10',
    iconClass: 'text-emerald-600 dark:text-emerald-400',
    borderClass: 'border-emerald-200 dark:border-emerald-500/20',
    hoverBorderClass: 'hover:border-emerald-400 dark:hover:border-emerald-500/50',
  },
  {
    title: "Spectra Genix '24 – National-Level Symposium",
    date: '1 October 2024',
    details: ['Event: Spectra Genix \"24', 'Organized by: Synaptix Association, Department of Artificial Intelligence and Data Science, KGiSL Institute of Technology'],
    description:
      'Participated in Spectra Genix \'24, a National-Level Symposium organized by the Synaptix Association, Department of Artificial Intelligence and Data Science, KGiSL Institute of Technology, with participation in both Paper Presentation and Tech Quiz.',
    participation: ['Paper Presentation', 'Tech Quiz'],
    icon: BadgeCheck,
    bgClass: 'bg-rose-100 dark:bg-rose-500/10',
    iconClass: 'text-rose-600 dark:text-rose-400',
    borderClass: 'border-rose-200 dark:border-rose-500/20',
    hoverBorderClass: 'hover:border-rose-400 dark:hover:border-rose-500/50',
  },
];

export default function CoCurricularActivities() {
  const sectionRef = useScrollReveal();

  return (
    <section id="co-curricular-activities" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Co-Curricular Activities</span>
          </h2>
          <p className="section-subtitle">
            Engagements beyond the classroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border ${activity.borderClass} ${activity.hoverBorderClass} bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${activity.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${activity.iconClass}`} />
                  </div>
                  <div className="flex-1">
                    {activity.date && (
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                        <CalendarRange className="w-3.5 h-3.5" />
                        <span>{activity.date}</span>
                      </div>
                    )}

                    <h3 className="text-slate-100 font-semibold text-lg leading-snug mb-3">
                      {activity.title}
                    </h3>

                    {activity.details && activity.details.length > 0 && (
                      <div className="space-y-2 mb-3 text-sm text-slate-300">
                        {activity.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="leading-relaxed">
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}

                    {activity.participation && activity.participation.length > 0 && (
                      <div className="mb-3 rounded-xl border border-slate-700/80 bg-slate-950/60 p-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                          Exact Participation Activities
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-200">
                          {activity.participation.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activity.description}
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
