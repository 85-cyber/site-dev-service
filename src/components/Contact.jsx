import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContacts } from '../hooks/useContexts';

const Contact = () => {
  const { language } = useLanguage();
  const contacts = useContacts();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const translations = {
    ru: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение дня.',
      name: 'Ваше имя',
      phone: 'Номер телефона',
      email: 'Электронная почта',
      message: 'Опишите ваш проект',
      submit: 'Отправить заявку',
      success: 'Спасибо! Мы свяжемся с вами скоро.'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Ready to discuss your project? Leave a request and we will contact you within a day.',
      name: 'Your name',
      phone: 'Phone number',
      email: 'Email',
      message: 'Describe your project',
      submit: 'Submit Application',
      success: 'Thank you! We will contact you soon.'
    }
  };

  const t = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(contacts.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.success}
            </h2>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'ru' ? 'Отправить еще' : 'Send Another'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            action={contacts.formspreeEndpoint} 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={language === 'ru' ? 'Иван Иванов' : 'John Doe'}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder={language === 'ru' ? 'Расскажите о вашем проекте...' : 'Tell us about your project...'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;