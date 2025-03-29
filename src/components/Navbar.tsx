
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-white/10 backdrop-blur-lg shadow-lg' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-xl font-space font-bold gradient-text">IAFOURCHETTE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-iafourchette-blue transition-colors">Accueil</a>
          <a href="#services" className="text-foreground hover:text-iafourchette-blue transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-iafourchette-blue transition-colors">Contact</a>
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <Button variant="ghost" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-iafourchette-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#services" className="text-foreground hover:text-iafourchette-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="text-foreground hover:text-iafourchette-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
