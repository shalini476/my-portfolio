import { useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CoCurricularActivities from './components/CoCurricularActivities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useScrollReveal';

function App() {
  const sectionIds = useMemo(
    () => ['home', 'about', 'skills', 'projects', 'experience', 'publications', 'certifications', 'achievements', 'co-curricular-activities', 'contact'],
    []
  );

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Certifications />
        <Achievements />
        <CoCurricularActivities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
