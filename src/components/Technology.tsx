
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Technology = () => {
  const { t } = useLanguage();
  
  const technologies = [
    "Next.js 15", 
    "GPT-5", 
    "AutoML", 
    "RPA", 
    "Figma AI"
  ];

  return (
    <section className="py-12 bg-iafourchette-blue/5 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">{t('tech.subtitle')}</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-iafourchette-blue font-medium border border-iafourchette-blue/10 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Connecting lines animation (simulated with dots) */}
        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-iafourchette-blue/0 via-iafourchette-blue/30 to-iafourchette-blue/0"
              style={{
                width: `${Math.random() * 30 + 20}%`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 70}%`,
                transform: `rotate(${Math.random() * 180}deg)`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
