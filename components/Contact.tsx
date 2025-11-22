import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Contacto
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Información de Contacto</h3>
            <p className="text-gray-400">
              Siempre estoy abierto a discutir nuevos proyectos, oportunidades creativas o visiones para ser parte de las mismas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">lainerdonet87@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Teléfono</h4>
                  <p className="text-gray-400">+52 55 4145 3124</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Ubicación</h4>
                  <p className="text-gray-400">Ciudad de México, México (Remoto)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-gray-800 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                  success 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : success ? (
                  "¡Mensaje Enviado!"
                ) : (
                  <>Enviar Mensaje <Send className="h-5 w-5" /></>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
