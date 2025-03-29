
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const AutomatisationIntelligente = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
            Automatisation Intelligente
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Transformez votre entreprise grâce à l'automatisation intelligente propulsée par l'IA, développée par IAFOURCHETTE.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Nos Solutions d'Automatisation</h2>
              <p className="mb-4">
                Nous développons des solutions d'automatisation sur mesure qui permettent d'optimiser vos processus métier, de réduire les coûts opérationnels et d'améliorer l'efficacité globale de votre organisation.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chatbots et assistants virtuels</li>
                <li>Traitement automatisé des données</li>
                <li>Automatisation du service client</li>
                <li>Systèmes de recommandation personnalisés</li>
                <li>Intégration de workflows intelligents</li>
                <li>Solutions de RPA (Robotic Process Automation)</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="#contact" className="inline-block px-8 py-3 bg-iafourchette-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AutomatisationIntelligente;
