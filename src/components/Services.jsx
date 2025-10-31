import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const [activeService, setActiveService] = useState(1); // По умолчанию открыта веб-разработка
  useScrollAnimation();
  const { language } = useLanguage();

  // Объект переводов для Services
  const translations = {
    ru: {
      ourServices: 'Наши услуги',
      servicesDescription: 'Комплексные решения для цифрового развития вашего бизнеса',
      learnMore: 'Узнать больше',
      webDevelopment: 'Веб-разработка',
      webDevelopmentDesc: 'Современные сайты и веб-приложения на React, Next.js'
    },
    en: {
      ourServices: 'Our Services',
      servicesDescription: 'Comprehensive solutions for your business digital development',
      learnMore: 'Learn More',
      webDevelopment: 'Web Development',
      webDevelopmentDesc: 'Modern websites and web applications on React, Next.js'
    }
  };

  const t = translations[language];

  const services = [
    {
      id: 1,
      title: t.webDevelopment,
      description: t.webDevelopmentDesc,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: language === 'ru' 
        ? ["SPA/SSR приложения", "API интеграция", "Оптимизация производительности", "PWA"]
        : ["SPA/SSR Applications", "API Integration", "Performance Optimization", "PWA"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      id: 2,
      title: language === 'ru' ? "UI/UX Дизайн" : "UI/UX Design",
      description: language === 'ru'
        ? "Интуитивные интерфейсы с продуманным пользовательским опытом"
        : "Intuitive interfaces with thoughtful user experience",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: language === 'ru'
        ? ["Прототипирование", "Адаптивный дизайн", "Дизайн-системы", "User Research"]
        : ["Prototyping", "Responsive Design", "Design Systems", "User Research"],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      id: 3,
      title: language === 'ru' ? "Чат-боты AI" : "AI Chatbots",
      description: language === 'ru'
        ? "Умные виртуальные помощники для автоматизации бизнеса"
        : "Smart virtual assistants for business automation",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: language === 'ru'
        ? ["Многоязычные боты", "Интеграция с мессенджерами", "AI-аналитика", "24/7 поддержка"]
        : ["Multilingual Bots", "Messenger Integration", "AI Analytics", "24/7 Support"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: 4,
      title: language === 'ru' ? "Мобильная разработка" : "Mobile Development",
      description: language === 'ru'
        ? "Кроссплатформенные приложения для iOS и Android"
        : "Cross-platform applications for iOS and Android",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: language === 'ru'
        ? ["React Native", "Нативные приложения", "Push-уведомления", "App Store публикация"]
        : ["React Native", "Native Applications", "Push Notifications", "App Store Publishing"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        
        {/* Заголовок раздела */}
        <div className="scroll-animate opacity-0 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.ourServices}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Левая колонка - список услуг */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`scroll-animate opacity-0 p-6 rounded-xl cursor-pointer transform transition-all duration-300 ${
                    activeService === service.id 
                      ? 'bg-white dark:bg-gray-800 shadow-lg border-l-4 scale-105' 
                      : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md'
                  } border-l-${service.gradient.split('-')[1]}-500`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    borderLeftColor: activeService === service.id ? `var(--color-${service.gradient.split('-')[1]}-500)` : 'transparent'
                  }}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3 className={`text-xl font-bold ${
                    activeService === service.id 
                      ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - детали выбранной услуги */}
          <div className="lg:col-span-2">
            {activeServiceData && (
              <div className="scroll-animate opacity-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                
                {/* Заголовок услуги */}
                <div className={`bg-gradient-to-r ${activeServiceData.gradient} p-8 text-white`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-xl opacity-90">
                    {activeServiceData.description}
                  </p>
                </div>

                {/* Контент услуги */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Особенности */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {language === 'ru' ? 'Что мы предлагаем:' : 'What we offer:'}
                      </h4>
                      <ul className="space-y-3">
                        {activeServiceData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className={`w-2 h-2 bg-gradient-to-r ${activeServiceData.gradient} rounded-full mr-3`}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Изображение */}
                    <div className="relative">
                      <img 
                        src={activeServiceData.image} 
                        alt={activeServiceData.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-${activeServiceData.gradient.split('-')[1]}-500/20 to-transparent rounded-lg`}></div>
                    </div>

                  </div>

                  {/* Кнопка */}
                  <div className="mt-8 text-center">
                    <button 
                      onClick={scrollToContact}
                      className={`bg-gradient-to-r ${activeServiceData.gradient} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg`}
                    >
                      {t.learnMore}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;