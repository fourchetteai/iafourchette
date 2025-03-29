
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="rounded-full px-3 py-1 text-xs font-medium border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
      onClick={toggleLanguage}
    >
      <Globe className="mr-1 h-3 w-3" />
      {language === 'fr' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
