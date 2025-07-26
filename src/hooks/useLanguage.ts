import { useState, useEffect } from 'react';
import { Language, Translation } from '@/types/language';
import { translations } from '@/data/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ua')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t: Translation = translations[language];

  return {
    language,
    changeLanguage,
    t
  };
};