import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'info', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Info />
        <Contact />
      </main>
      
      <footer className="bg-dark border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Alex Dev. Hecho con React & Tailwind.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
