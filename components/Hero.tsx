import React from 'react';
import { ArrowRight, Github, Linkedin, Terminal } from 'lucide-react';
import { DEV_NAME, DEV_ROLE, DEV_BIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-700 text-sm text-primary font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible para proyectos
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight leading-tight">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {DEV_NAME}
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-400 font-light">
              {DEV_ROLE}
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {DEV_BIO}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                Ver Proyectos <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-surface hover:bg-gray-700 border border-gray-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2">
                Contáctame
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <a href="https://github.com/LainerDonet" className="text-gray-400 hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/in/lainerdonet/" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative hidden lg:block">
             <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-6 opacity-20 blur-lg"></div>
                <div className="absolute inset-0 bg-surface border border-gray-700 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                   <Terminal className="h-32 w-32 text-primary opacity-50" />
                   <div className="absolute bottom-0 left-0 right-0 bg-dark/80 backdrop-blur p-6 border-t border-gray-700">
                      <div className="flex gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-gray-400"><span className="text-secondary">const</span> developer = <span className="text-yellow-400">new</span> Developer();</div>
                        <div className="text-gray-400">developer.<span className="text-primary">code</span>(<span className="text-green-400">'React'</span>);</div>
                        <div className="text-gray-400">developer.<span className="text-primary">create</span>(<span className="text-green-400">'AwesomeWebsites'</span>);</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
