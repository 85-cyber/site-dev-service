// context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ru';
    setLanguage(savedLanguage);
  }, []);

  const translations = {
    ru: {
      services: 'Наши услуги',
      portfolio: 'Наши работы',
      contact: 'Контакты',
      // Добавь все остальные тексты
    },
    en: {
      services: 'Our Services',
      portfolio: 'Our Works', 
      contact: 'Contact',
      // Английские версии
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};