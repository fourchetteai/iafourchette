
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-iafourchette-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">IAFOURCHETTE</h2>
            <p className="text-sm text-white/80">
              Transformez votre entreprise avec notre expertise en IA
            </p>
          </div>
          
          <div className="text-sm text-white/80">
            &copy; {currentYear} IAFOURCHETTE. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
