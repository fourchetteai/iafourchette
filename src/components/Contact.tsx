
import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useLanguage } from '../contexts/LanguageContext';
import SocialWidgets from './SocialWidgets';

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    isSubmitting: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    // Simuler une soumission du formulaire
    setTimeout(() => {
      toast({
        title: t('contact.sendSuccess'),
        description: t('contact.sendSuccessDesc')
      });
      
      setFormState({
        name: '',
        email: '',
        message: '',
        isSubmitting: false
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-iafourchette-blue/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">{t('contact.title')}</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Phone number */}
          <div className="w-full md:w-1/2 lg:w-1/3 text-center">
            <div className="glass-panel p-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-iafourchette-blue/10 rounded-full">
                  <Phone className="h-8 w-8 text-iafourchette-blue" />
                </div>
              </div>
              <p className="text-lg mb-2">{t('contact.callUs')}</p>
              <a 
                href="tel:+33658627167" 
                className="text-2xl md:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                {t('contact.phone')}
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="w-full md:w-1/2 lg:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {t('contact.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {t('contact.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 min-h-[120px]"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className={cn(
                      "button-primary w-full",
                      formState.isSubmitting && "opacity-75 cursor-not-allowed"
                    )}
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? t('contact.sending') : (
                      <>
                        <span>{t('contact.subtitle')}</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Social Media Widgets */}
        <SocialWidgets />
      </div>
    </section>
  );
};

export default Contact;
