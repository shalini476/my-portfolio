import { Code, Globe, Terminal, Brain, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    color: 'blue',
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'green',
    skills: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'React', 'MySQL'],
  },
  {
    title: 'Backend / Tools',
    icon: Terminal,
    color: 'orange',
    skills: ['Flask', 'Git', 'GitHub', 'XAMPP'],
  },
  {
    title: 'AI / Data',
    icon: Brain,
    color: 'purple',
    skills: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Matplotlib', 'SHAP'],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'red',
    skills: [
      'Zero Trust Architecture',
      'Authentication',
      'CAPTCHA',
      'Network Security',
      'Fortinet FortiOS',
    ],
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20',
    hover: 'hover:border-blue-300 dark:hover:border-blue-500/40',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    badge: 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/20',
    hover: 'hover:border-green-300 dark:hover:border-green-500/40',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-500/10',
    text: 'text-orange-600 dark:text-orange-400',
    badge: 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20',
    hover: 'hover:border-orange-300 dark:hover:border-orange-500/40',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-500/10',
    text: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20',
    hover: 'hover:border-purple-300 dark:hover:border-purple-500/40',
  },
  red: {
    bg: 'bg-red-100 dark:bg-red-500/10',
    text: 'text-red-600 dark:text-red-400',
    badge: 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/20',
    hover: 'hover:border-red-300 dark:hover:border-red-500/40',
  },
};

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <h2 className="section-title">
          <span className="gradient-text">Skills &amp; Technologies</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <div
                key={category.title}
                className={`card card-hover ${colors.hover}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm border ${colors.badge} transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
