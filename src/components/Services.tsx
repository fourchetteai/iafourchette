
import React from 'react';
import { Code, Bot, GraduationCap } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="service-card">
      <div className="p-4 mb-4 bg-iafourchette-blue/10 rounded-full w-16 h-16 flex items-center justify-center text-iafourchette-blue">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Création de sites/apps",
      description: "Développement clé en main de sites web et applications mobiles par nos assistants IA",
      icon: Code
    },
    {
      title: "Automatisation intelligente",
      description: "Optimisation complète de vos processus métiers grâce à nos agents IA spécialisés",
      icon: Bot
    },
    {
      title: "Formation & Consulting",
      description: "Maîtrise des outils digitaux grâce à nos formations personnalisées et audit stratégique",
      icon: GraduationCap
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">Nos Services</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          IAFOURCHETTE transforme votre entreprise grâce à l'intelligence artificielle. Découvrez nos solutions sur mesure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
