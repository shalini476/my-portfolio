import { BookOpenText, MapPin, BadgeCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const publications = [
  {
    title: 'Digital Twin-Based Reverse Inference System for Unlabeled Air Pollution Source Mapping',
    description:
      'Presented a research paper titled “Digital Twin-Based Reverse Inference System for Unlabeled Air Pollution Source Mapping” at an IEEE conference conducted at S.A. Engineering College.',
    conference: 'IEEE Conference',
    venue: 'S.A. Engineering College',
  },
];

export default function Publications() {
  const titleRef = useScrollReveal();

  return (
    <section id="publications" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-950/60">
      <div className="max-w-4xl mx-auto" ref={titleRef}>
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Publications</span>
          </h2>
        </div>

        <div className="grid gap-6">
          {publications.map((publication, index) => (
            <article
              key={index}
              className="group card card-hover relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <BookOpenText className="w-5 h-5 text-primary-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {publication.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-slate-200">
                      <BadgeCheck className="w-4 h-4 text-primary-400" />
                      <span>{publication.conference}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-slate-200">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span>{publication.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
