
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const FormationConsulting = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
            Formation et Consulting
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              IAFOURCHETTE vous accompagne dans votre transformation digitale avec des services de formation et consulting adaptés à vos besoins.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Notre Offre</h2>
              <p className="mb-4">
                Nos experts vous accompagnent à chaque étape de votre parcours d'adoption de l'IA, du conseil stratégique à la formation des équipes.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Audit et conseil en transformation digitale</li>
                <li>Formation sur l'IA pour les équipes</li>
                <li>Accompagnement dans l'adoption des nouvelles technologies</li>
                <li>Développement de compétences internes</li>
                <li>Ateliers pratiques et workshops</li>
                <li>Stratégie d'implémentation de l'IA dans votre entreprise</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="#contact" className="inline-block px-8 py-3 bg-iafourchette-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                Demander un accompagnement
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FormationConsulting;
