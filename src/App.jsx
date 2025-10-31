// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import ThemeLanguageSwitcher from './components/ThemeLanguageSwitcher';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <LanguageProvider>
      <div className="App">
        <ThemeLanguageSwitcher />
        <Header />
        <Hero /> 
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;