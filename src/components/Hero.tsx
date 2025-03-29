
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 animated-bg -z-10"></div>
      
      {/* Animated particles/dots (simulation) */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-iafourchette-blue/20 animate-pulse-soft"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            {t('hero.subtitle')}
          </h2>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="button-primary flex items-center justify-center space-x-2 mx-auto w-fit">
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          {/* Floating shape decoration */}
          <div className="mt-16 relative h-40 md:h-60 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-32 md:h-32 bg-iafourchette-blue/10 rounded-full blur-md animate-float"></div>
            <div className="absolute top-10 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-iafourchette-purple/10 rounded-full blur-md animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-5 right-1/4 w-12 h-12 md:w-20 md:h-20 bg-iafourchette-lightBlue/10 rounded-full blur-md animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
