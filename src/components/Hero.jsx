import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Переводы для Hero
  const translations = {
    ru: {
      imageAlt: 'Web Development',
      title: 'Помогаем запускать и развивать бизнес в цифровой среде',
      ctaPrimary: 'Оставить заявку',
      ctaSecondary: 'Наши работы',
      stats: {
        projects: 'Реализованных проектов',
        experience: 'Года опыта',
        clients: 'Довольных клиентов',
        support: 'Поддержка'
      },
      scrollHint: 'Листайте вниз'
    },
    en: {
      imageAlt: 'Web Development',
      title: 'We help launch and grow businesses in the digital environment',
      ctaPrimary: 'Submit Application',
      ctaSecondary: 'Our Works',
      stats: {
        projects: 'Completed Projects',
        experience: 'Years of Experience',
        clients: 'Satisfied Clients',
        support: 'Support'
      },
      scrollHint: 'Scroll Down'
    }
  };

  const t = translations[language];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
    <section className="pt-32 pb-20 relative min-h-screen flex items-center overflow-hidden">
      {/* Старый фон */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
          alt={t.imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Темный оверлей для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        {/* Дополнительный градиент */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Studio над WebCraft */}
        <div className="mb-2">
          <span className="text-xl md:text-2xl font-light text-blue-300 tracking-widest uppercase drop-shadow-lg">
            studio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          WebCraft
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {t.title}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-400 hover:shadow-xl"
          >
            {t.ctaPrimary}
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:shadow-lg"
          >
            {t.ctaSecondary}
          </button>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              50+
            </div>
            <div className="text-white/80 text-sm md:text-base drop-shadow-md">
              {t.stats.projects}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              3+
            </div>
            <div className="text-white/80 text-sm md:text-base drop-shadow-md">
              {t.stats.experience}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              95%
            </div>
            <div className="text-white/80 text-sm md:text-base drop-shadow-md">
              {t.stats.clients}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              24/7
            </div>
            <div className="text-white/80 text-sm md:text-base drop-shadow-md">
              {t.stats.support}
            </div>
          </div>
        </div>

        {/* Индикатор прокрутки */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 drop-shadow-md">
            {t.scrollHint}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;