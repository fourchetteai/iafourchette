
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialWidgets = () => {
  const { t } = useLanguage();
  
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-blue-600',
      url: 'https://facebook.com/iafourchette'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-700',
      url: 'https://instagram.com/iafourchette'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-blue-700',
      url: 'https://linkedin.com/company/iafourchette'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      color: 'bg-blue-400',
      url: 'https://twitter.com/iafourchette'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.23 0 .45.03.67.08V9.4a6.17 6.17 0 0 0-5.5 9.11 6.17 6.17 0 0 0 10.13-4.73v-7a8.16 8.16 0 0 0 4.81 1.52V6.69z" 
            fill="currentColor" />
        </svg>
      ),
      color: 'bg-black',
      url: 'https://tiktok.com/@iafourchette'
    }
  ];

  return (
    <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
      <h3 className="text-xl font-medium text-center mb-6">{t('contact.followUs')}</h3>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {socialPlatforms.map((platform, index) => (
          <a 
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
            aria-label={platform.name}
          >
            <div 
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${platform.color} shadow-lg mb-2`}
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: `${index * 0.2}s`
              }}
            >
              {platform.icon}
            </div>
            <span className="text-xs font-medium">{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialWidgets;
