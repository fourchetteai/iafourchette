
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const CreationSites = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
            Création de Sites et Applications
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Chez IAFOURCHETTE, nous développons des sites web et des applications sur mesure qui répondent parfaitement à vos besoins spécifiques.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Notre Approche</h2>
              <p className="mb-4">
                Nous travaillons en étroite collaboration avec vous pour comprendre votre vision et développer des solutions digitales qui représentent parfaitement votre marque et répondent aux besoins de vos utilisateurs.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sites web responsifs et optimisés</li>
                <li>Applications web progressives</li>
                <li>E-commerce et boutiques en ligne</li>
                <li>Intégration de l'IA dans vos plateformes existantes</li>
                <li>Design UX/UI centré utilisateur</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="#contact" className="inline-block px-8 py-3 bg-iafourchette-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                Discuter de votre projet
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CreationSites;
