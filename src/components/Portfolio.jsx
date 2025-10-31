import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  useScrollAnimation();
  const { language } = useLanguage();

  // Переводы для Portfolio
  const translations = {
    ru: {
      sectionTitle: 'Портфолио',
      title: 'Наши кейсы',
      subtitle: 'Реализованные проекты, которые помогают бизнесу расти и достигают поставленных целей',
      projects: {
        ecommerce: {
          title: 'Интернет-магазин',
          description: 'Полнофункциональный онлайн-магазин с системой управления заказами'
        },
        portal: {
          title: 'Корпоративный портал',
          description: 'Внутренняя система для управления бизнес-процессами компании'
        },
        mobile: {
          title: 'Мобильное приложение',
          description: 'Кроссплатформенное приложение для iOS и Android'
        },
        booking: {
          title: 'Система бронирования',
          description: 'Онлайн-платформа для бронирования авиабилетов и отелей'
        }
      },
      viewCase: 'Смотреть кейс',
      completed: 'Завершен',
      details: 'Подробнее',
      showAll: 'Показать все проекты'
    },
    en: {
      sectionTitle: 'Portfolio',
      title: 'Our Cases',
      subtitle: 'Completed projects that help businesses grow and achieve their goals',
      projects: {
        ecommerce: {
          title: 'E-commerce Store',
          description: 'Full-featured online store with order management system'
        },
        portal: {
          title: 'Corporate Portal',
          description: 'Internal system for managing company business processes'
        },
        mobile: {
          title: 'Mobile Application',
          description: 'Cross-platform application for iOS and Android'
        },
        booking: {
          title: 'Booking System',
          description: 'Online platform for booking flights and hotels'
        }
      },
      viewCase: 'View Case',
      completed: 'Completed',
      details: 'Details',
      showAll: 'Show All Projects'
    }
  };

  const t = translations[language];

  const projects = [
    {
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.description,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['E-commerce', 'React', 'Node.js']
    },
    {
      title: t.projects.portal.title,
      description: t.projects.portal.description,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['Dashboard', 'Vue', 'MongoDB']
    },
    {
      title: t.projects.mobile.title,
      description: t.projects.mobile.description,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React Native', 'Firebase']
    },
    {
      title: t.projects.booking.title,
      description: t.projects.booking.description,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['Booking', 'Payment', 'API']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden relative">
      
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-30 animate-pulse delay-75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок с анимацией */}
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            {t.sectionTitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        
        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Верхний декор */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
              
              {/* Изображение с эффектом */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Наложение при hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
                    {t.viewCase}
                  </button>
                </div>
              </div>
              
              {/* Контент */}
              <div className="p-6 relative">
                {/* Теги */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Ссылка на проект */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t.completed}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-colors duration-300 flex items-center gap-1">
                    {t.details}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;