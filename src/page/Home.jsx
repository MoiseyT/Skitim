import React, { useEffect } from 'react';
import { About, Navbar, Training, Prices, Contacts, ScrollToTopButton, Footer } from '../components';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className='home'>
        <title>Уникальный заголовок страницы</title>
        <ScrollToTopButton />
        <Navbar />
        <About />
        <Training />
        <h2 className='homepage_price'><Trans i18nKey="container_price"/></h2>
        <Prices />
        <Contacts />
        <Footer />
      </div>
  )
}
