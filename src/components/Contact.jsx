import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'shalinicsbs@gmail.com', href: 'mailto:shalinicsbs@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/shalini-p-001321290', href: 'https://www.linkedin.com/in/shalini-p-001321290/' },
  { icon: Github, label: 'GitHub', value: 'github.com/shalini476', href: 'https://github.com/shalini476' },
];

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="section-subtitle">
            I am open to internship opportunities, software development roles,
            technical collaborations and learning opportunities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-4 card card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-500/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{link.label}</p>
                  <p className="text-slate-900 dark:text-white font-medium">{link.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
