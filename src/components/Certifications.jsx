import { Shield, Award, Bot, TrendingUp, Brain, Code, Laptop, BadgeCheck, Monitor } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  { name: 'Fortinet NSE 4', issuer: 'Certified in FortiOS', icon: Shield, iconBg: 'bg-red-100 dark:bg-red-500/20', iconColor: 'text-red-600 dark:text-red-400' },
  { name: 'Fortinet NSE 6', issuer: 'Fortinet', icon: Shield, iconBg: 'bg-red-100 dark:bg-red-500/20', iconColor: 'text-red-600 dark:text-red-400' },
  { name: 'Java Foundation Certification', issuer: 'Infosys Springboard', icon: Award, iconBg: 'bg-amber-100 dark:bg-amber-500/20', iconColor: 'text-amber-600 dark:text-amber-400' },
  { name: 'RPA Developer Foundation', issuer: 'UiPath', icon: Bot, iconBg: 'bg-orange-100 dark:bg-orange-500/20', iconColor: 'text-orange-600 dark:text-orange-400' },
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google', icon: TrendingUp, iconBg: 'bg-blue-100 dark:bg-blue-500/20', iconColor: 'text-blue-600 dark:text-blue-400' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn Learning', icon: Brain, iconBg: 'bg-purple-100 dark:bg-purple-500/20', iconColor: 'text-purple-600 dark:text-purple-400' },
  { name: 'Diploma in Python and C++', issuer: 'Online Course', icon: Code, iconBg: 'bg-emerald-100 dark:bg-emerald-500/20', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Human Computer Interaction', issuer: 'NPTEL – Elite + Gold | 96 Marks', icon: Monitor, iconBg: 'bg-amber-100 dark:bg-amber-500/20', iconColor: 'text-amber-600 dark:text-amber-400' },
  { name: 'Infosys Springboard Virtual Internship – Java Full Stack', issuer: 'Infosys', icon: Laptop, iconBg: 'bg-cyan-100 dark:bg-cyan-500/20', iconColor: 'text-cyan-600 dark:text-cyan-400' },
];

function CertificationCard({ cert, index }) {
  const cardRef = useScrollReveal({ delay: index * 80 });
  const Icon = cert.icon;

  return (
    <div
      ref={cardRef}
      className="group card card-hover relative"
    >
      {/* Verified badge */}
      <div className="absolute top-4 right-4">
        <BadgeCheck className="w-5 h-5 text-emerald-400/60 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300" />
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${cert.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${cert.iconColor}`} />
      </div>

      {/* Content */}
      <h3 className="text-slate-900 dark:text-white font-semibold text-sm leading-snug mb-2 pr-6">
        {cert.name}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.issuer}</p>
    </div>
  );
}

export default function Certifications() {
  const titleRef = useScrollReveal();

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span className="text-sm text-slate-600 dark:text-slate-400">Verified Credentials</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and courses I&apos;ve completed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
