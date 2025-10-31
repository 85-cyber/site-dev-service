import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { t } = useTranslation();
  useScrollAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title', 'Готовы обсудить ваш проект?')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle', 'Свяжитесь с нами для бесплатной консультации')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Форма */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.form.title', 'Оставить заявку')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.name', 'Ваше имя')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder={t('contact.form.namePlaceholder', 'Иван Иванов')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.phone', 'Номер телефона')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder={t('contact.form.phonePlaceholder', '+7 (999) 123-45-67')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.email', 'Электронная почта')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder={t('contact.form.emailPlaceholder', 'hello@example.com')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message', 'О проекте')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder={t('contact.form.messagePlaceholder', 'Расскажите о вашем проекте...')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('contact.form.send', 'Отправить заявку')}
              </button>
            </form>
          </div>

          {/* Информация */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.process.title', 'Как мы работаем?')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      {t('contact.process.step1.title', 'Заявка на сайте')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.process.step1.description', 'Свяжемся с вами в течение 2-3 рабочих дней')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      {t('contact.process.step2.title', 'Консультация (1 день)')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.process.step2.description', 'Обсуждаем детали и требования к проекту')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      {t('contact.process.step3.title', 'Дизайн и разработка (1-2 месяца)')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.process.step3.description', 'Сопровождаем вас на каждом этапе разработки')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Контактная информация */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.info.title', 'Контакты')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>{t('contact.info.phone', 'Телефон')}:</strong> +7 (702) 123-45-67
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>{t('contact.info.email', 'Email')}:</strong> hello@webcraft.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>{t('contact.info.hours', 'Время работы')}:</strong> {t('contact.info.hoursValue', 'Пн-Вс: 9:00 - 21:00')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;