
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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

  // Services navigation items
  const servicesItems = [
    { title: t('services.creation.title'), href: '/creation-sites-applications' },
    { title: t('services.automation.title'), href: '/automatisation-intelligente' },
    { title: t('services.training.title'), href: '/formation-consulting' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-white/10 backdrop-blur-lg shadow-lg' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-space font-bold gradient-text">IAFOURCHETTE</span>
        </Link>

        {/* Desktop Menu with Navigation Dropdown */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-iafourchette-blue transition-colors">
            {t('nav.home')}
          </Link>
          
          {/* Services Dropdown Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                    {servicesItems.map((service) => (
                      <li key={service.href} className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="#contact" className="text-foreground hover:text-iafourchette-blue transition-colors">
            {t('nav.contact')}
          </Link>
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
            <Link to="/" className="text-foreground hover:text-iafourchette-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            
            {/* Services submenu in mobile view */}
            <div className="py-2">
              <span className="font-medium">{t('nav.services')}</span>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                {servicesItems.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="text-sm text-foreground hover:text-iafourchette-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="#contact" className="text-foreground hover:text-iafourchette-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
