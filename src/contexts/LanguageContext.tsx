
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";

// Define the type for our language context
type LanguageContextType = {
  language: 'fr' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  'fr': {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Transformez votre entreprise avec l\'Intelligence Artificielle',
    'hero.subtitle': 'Création digitale • Automatisation intelligente • Expertise sur mesure',
    'hero.cta': 'Démarrer votre projet IA →',
    
    // Services section
    'services.title': 'Nos Services',
    'services.creation.title': 'Création de sites/apps',
    'services.creation.description': 'Développement clé en main de sites web et applications mobiles par nos assistants IA',
    'services.automation.title': 'Automatisation intelligente',
    'services.automation.description': 'Optimisation complète de vos processus métiers grâce à nos agents IA spécialisés',
    'services.training.title': 'Formation & Consulting',
    'services.training.description': 'Maîtrise des outils digitaux grâce à nos formations personnalisées et audit stratégique',
    
    // Technology section
    'tech.title': 'Nos Technologies',
    'tech.subtitle': 'Nous maîtrisons :',
    'tech.list': 'Next.js 15 • GPT-5 • AutoML • RPA • Figma AI',
    
    // Contact section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.phone': '06 58 62 71 67',
    
    // Footer
    'footer.rights': 'Tous droits réservés.'
  },
  'en': {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Transform Your Business with Artificial Intelligence',
    'hero.subtitle': 'Digital Creation • Intelligent Automation • Tailored Expertise',
    'hero.cta': 'Start Your AI Project →',
    
    // Services section
    'services.title': 'Our Services',
    'services.creation.title': 'Website/App Creation',
    'services.creation.description': 'Turnkey development of websites and mobile applications by our AI assistants',
    'services.automation.title': 'Intelligent Automation',
    'services.automation.description': 'Complete optimization of your business processes thanks to our specialized AI agents',
    'services.training.title': 'Training & Consulting',
    'services.training.description': 'Master digital tools with our personalized training and strategic auditing',
    
    // Technology section
    'tech.title': 'Our Technologies',
    'tech.subtitle': 'We master:',
    'tech.list': 'Next.js 15 • GPT-5 • AutoML • RPA • Figma AI',
    
    // Contact section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s discuss your project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.phone': '06 58 62 71 67',
    
    // Footer
    'footer.rights': 'All rights reserved.'
  }
};

// Provider component to wrap the app
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<'fr' | 'en'>('language', 'fr');
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  // Toggle language function
  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };
  
  // Make the context value
  const contextValue = {
    language,
    toggleLanguage,
    t
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
