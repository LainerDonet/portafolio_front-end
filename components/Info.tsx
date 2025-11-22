import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { Briefcase, Code, Award } from 'lucide-react';
import { SKILLS, EXPERIENCE } from '../constants';

const Info: React.FC = () => {
  const primaryColor = '#6366f1';
  const secondaryColor = '#ec4899';

  return (
    <section id="info" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Sobre Mí
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Skills Chart Column */}
          <div className="bg-surface rounded-3xl p-8 border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Code className="text-primary" /> Habilidades Técnicas
            </h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={SKILLS}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    width={100}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {SKILLS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? primaryColor : secondaryColor} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Experience & Bio Column */}
          <div className="space-y-8">
             {/* Bio Card */}
             <div className="bg-surface rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-secondary" /> Introducción
                </h3>
                <p className="text-gray-400 leading-relaxed">
                   Soy un desarrollador que cree firmemente en que el código limpio conduce a productos mejores. 
                   Mi enfoque combina la precisión técnica de la ingeniería de software con la sensibilidad estética del diseño moderno.
                   Me especializo en el ecosistema React, pero siempre estoy aprendiendo nuevas herramientas para resolver problemas de manera más eficiente.
                </p>
             </div>

             {/* Timeline */}
             <div>
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="text-green-400" /> Experiencia
               </h3>
               <div className="space-y-6 border-l-2 border-gray-800 ml-3 pl-8 relative">
                  {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative">
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-gray-600"></span>
                      <h4 className="text-xl font-bold text-white">{job.role}</h4>
                      <p className="text-primary text-sm mb-2">{job.company} | {job.period}</p>
                      <p className="text-gray-400 text-sm">{job.description}</p>
                    </div>
                  ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;
