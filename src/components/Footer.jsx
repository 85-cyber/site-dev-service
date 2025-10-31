import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContacts } from '../hooks/useContexts';

const Footer = () => {
  const { language } = useLanguage();
  const contacts = useContacts();

  // Переводы для Footer
  const translations = {
    ru: {
      description: 'Разработка современных сайтов и приложений для бизнеса',
      services: 'Услуги',
      servicesList: {
        web: 'Веб-разработка',
        design: 'UI/UX Дизайн',
        mobile: 'Мобильные приложения',
        support: 'Поддержка'
      },
      contact: 'Контакты',
      workingHours: 'Пн-Вс: 9:00 - 21:00',
      social: 'Соцсети',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования'
    },
    en: {
      description: 'Development of modern websites and applications for business',
      services: 'Services',
      servicesList: {
        web: 'Web Development',
        design: 'UI/UX Design',
        mobile: 'Mobile Applications',
        support: 'Support'
      },
      contact: 'Contacts',
      workingHours: 'Mon-Sun: 9:00 - 21:00',
      social: 'Social Media',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <div className="mb-4">
              <div className="text-sm font-light tracking-wider opacity-90 text-blue-300">studio</div>
              <div className="text-2xl font-bold -mt-1">WebCraft</div>
            </div>
            <p className="text-gray-400">
              {t.description}
            </p>
          </div>
          
          {/* Услуги */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.services}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">
                  {t.servicesList.web}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">
                  {t.servicesList.design}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">
                  {t.servicesList.mobile}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">
                  {t.servicesList.support}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.contact}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (702) 581-84-46</li>
              <li>hello@webcraft.com</li>
              <li>{t.workingHours}</li>
            </ul>
          </div>
          
          {/* Соцсети */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.social}
            </h4>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a 
                href="http://wa.me/77025818446" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a 
                href="https://t.me/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                title="Telegram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.197c.172.003.346.032.513.094.515.191.858.619.927 1.118.08.578-.146 1.154-.605 1.515-.165.129-.371.224-.523.35-.294.245-.52.553-.772.846-1.188 1.38-2.385 2.756-3.564 4.148-.174.204-.363.398-.583.551-.285.199-.611.212-.905.055-.259-.139-.424-.389-.511-.669-.064-.207-.172-.404-.26-.606-.348-.802-.691-1.606-1.03-2.412-.116-.276-.232-.553-.338-.834-.114-.298-.097-.576.083-.843.179-.266.464-.417.774-.473.189-.034.384-.028.575-.013.472.038.943.085 1.414.133.179.018.358.034.537.05.062.006.125.012.187.018zm-6.57 5.492l.792 2.238c.087.246.173.492.262.736.058.16.159.306.293.411.143.112.322.173.504.172.182-.001.36-.065.5-.180.117-.097.208-.222.264-.362.109-.27.195-.547.29-.82l.415-1.17-2.32-1.045zm6.538-3.711c-.143.005-.285.021-.425.047-.096.018-.19.045-.284.072-.161.046-.242.146-.268.307-.023.144.019.278.122.377.102.098.235.154.373.168.391.04.784.064 1.176.095.147.012.295.022.442.034.21.017.366-.056.456-.243.089-.186.06-.382-.076-.535-.136-.152-.333-.223-.546-.226-.267-.004-.533-.003-.8-.003-.037 0-.074 0-.114 0z"/>
                </svg>
              </a>
              
              {/* Meta (Facebook) */}
              <a 
                href="https://facebook.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* VK */}
              <a 
                href="https://vk.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                title="VK"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14c0 5.6 1.33 6.93 6.93 6.93h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m2.84 12.75h-1.21c-.46 0-.61-.34-.85-1.16-.32-1.14-1.12-2.36-1.92-2.36-.18 0-.28.1-.28.33v1.06c0 .25-.1.33-.41.33-.76 0-2.11-2.2-2.11-4.65 0-.35.1-.5.35-.5h1.24c.26 0 .36.15.36.5 0 .5.76 2.41 1.62 2.41.18 0 .28-.1.28-.33v-1.9c0-.6.28-.88.74-.88h1.92c.33 0 .45.18.36.53-.22.86-2.29 2.37-2.29 3.34 0 .19.1.29.26.29.5 0 1.41-1.47 1.96-2.47.26-.46.36-.55.84-.55h1.24c.43 0 .52.23.43.58-.21 1.07-2.51 3.07-2.51 3.07-.2.2-.28.3-.28.61 0 .41.12.5.69.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 WebCraft. {t.rights}
            {' '}
            <a href="#" className="hover:text-white transition-colors duration-300">
              {t.privacy}
            </a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors duration-300">
              {t.terms}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;