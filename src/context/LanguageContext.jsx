// src/context/LanguageContext.jsx
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
      // Header
      services: 'Услуги',
      technologies: 'Технологии',
      portfolio: 'Кейсы',
      process: 'Процесс',
      reviews: 'Отзывы',
      contact: 'Контакты',
      
      // Services
      ourServices: 'Наши услуги',
      servicesDescription: 'Полный цикл разработки - от идеи до запуска и поддержки',
      webDevelopment: 'Веб-разработка',
      webDescription: 'Современные сайты и веб-приложения на React, Next.js',
      uiuxDesign: 'UI/UX Дизайн',
      uiuxDescription: 'Интуитивные интерфейсы с продуманным пользовательским опытом',
      chatbots: 'Чат-боты AI',
      chatbotsDescription: 'Умные виртуальные помощники для автоматизации бизнеса',
      mobileDevelopment: 'Мобильная разработка',
      mobileDescription: 'Кроссплатформенные приложения для iOS и Android',
      learnMore: 'Узнать больше',
      
      // Portfolio
      ourWorks: 'Наши работы',
      portfolioDescription: 'Реализуемые проекты, которые помогают бизнесу расти',
      
      // Contact
      readyToDiscuss: 'Готовы обсудить ваш проект?',
      contactDescription: 'Свяжитесь с нами для бесплатной консультации',
      submitApplication: 'Оставить заявку',
      yourName: 'Ваше имя',
      phoneNumber: 'Номер телефона',
      email: 'Электронная почта',
      aboutProject: 'О проекте',
      sendApplication: 'Отправить заявку',
      howWeWork: 'Как мы работаем?',
      contacts: 'Контакты',
      workHours: 'Время работы',
      
      // Footer
      rightsReserved: 'Все права защищены'
    },
    en: {
      // Header
      services: 'Services',
      technologies: 'Technologies',
      portfolio: 'Portfolio',
      process: 'Process',
      reviews: 'Reviews',
      contact: 'Contact',
      
      // Services
      ourServices: 'Our Services',
      servicesDescription: 'Full development cycle - from idea to launch and support',
      webDevelopment: 'Web Development',
      webDescription: 'Modern websites and web applications on React, Next.js',
      uiuxDesign: 'UI/UX Design',
      uiuxDescription: 'Intuitive interfaces with thoughtful user experience',
      chatbots: 'AI Chatbots',
      chatbotsDescription: 'Smart virtual assistants for business automation',
      mobileDevelopment: 'Mobile Development',
      mobileDescription: 'Cross-platform applications for iOS and Android',
      learnMore: 'Learn More',
      
      // Portfolio
      ourWorks: 'Our Works',
      portfolioDescription: 'Implemented projects that help business grow',
      
      // Contact
      readyToDiscuss: 'Ready to discuss your project?',
      contactDescription: 'Contact us for a free consultation',
      submitApplication: 'Submit Application',
      yourName: 'Your Name',
      phoneNumber: 'Phone Number',
      email: 'Email',
      aboutProject: 'About Project',
      sendApplication: 'Send Application',
      howWeWork: 'How We Work?',
      contacts: 'Contacts',
      workHours: 'Working Hours',
      
      // Footer
      rightsReserved: 'All rights reserved'
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