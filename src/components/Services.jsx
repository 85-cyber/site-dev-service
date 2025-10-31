import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  useScrollAnimation();
  const { t, language } = useLanguage();

  const services = [
    {
      id: 1,
      title: language === 'ru' ? "Веб-разработка" : "Web Development",
      description: language === 'ru' 
        ? "Современные сайты и веб-приложения на React, Next.js" 
        : "Modern websites and web applications on React, Next.js",
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

  return (
    <section id="services" className="py-2 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        
        {/* Заголовок с анимацией */}
        <div className="scroll-animate opacity-0 text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('ourServices')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`scroll-animate opacity-0 relative group cursor-pointer transform transition-all duration-300 ${
                activeService === service.id 
                  ? 'scale-102 -translate-y-1' 
                  : 'hover:scale-101'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={scrollToContact}
            >
              {/* Основная карточка */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden h-full ${
                activeService === service.id ? 'ring-1 ring-opacity-50' : ''
              } ring-${service.gradient.split('-')[1]}-500`}>
                
                {/* Градиентный фон */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} dark:opacity-10 opacity-30 rounded-xl`}></div>
                
                {/* Фотография */}
                <div className="relative mb-2 overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-32 object-cover transform transition-all duration-300 ${
                      activeService === service.id ? 'scale-105' : 'group-hover:scale-102'
                    }`}
                  />
                  {/* Градиентный оверлей */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 rounded-lg`}></div>
                  
                  {/* Иконка поверх фото */}
                  <div className={`absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transform transition-all duration-200 ${
                    activeService === service.id ? 'scale-105 rotate-6' : 'group-hover:scale-105'
                  }`}>
                    <span className="text-lg">
                      {service.id === 1 && "🌐"}
                      {service.id === 2 && "🎨"}
                      {service.id === 3 && "🤖"}
                      {service.id === 4 && "📱"}
                    </span>
                  </div>
                </div>

                {/* Заголовок */}
                <h3 className={`text-base font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                  {service.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed text-xs">
                  {service.description}
                </p>

                {/* Список фич */}
                <ul className="space-y-1 mb-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 text-xs">
                      <span className={`w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full mr-1`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Кнопка */}
                <div 
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-1 px-2 rounded-lg font-semibold hover:shadow-md transform hover:scale-102 transition-all duration-200 border border-transparent hover:border-white/20 text-center cursor-pointer text-xs`}
                >
                  {t('learnMore')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;