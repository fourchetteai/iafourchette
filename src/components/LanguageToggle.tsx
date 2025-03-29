
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageToggle = () => {
  const [language, setLanguage] = useLocalStorage('language', 'fr');

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    // Dans une application réelle, vous pourriez utiliser i18n ici
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="rounded-full px-3 py-1 text-xs font-medium border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
      onClick={toggleLanguage}
    >
      {language === 'fr' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
