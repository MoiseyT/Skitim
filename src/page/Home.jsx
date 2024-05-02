import React, { useEffect } from 'react';
import { About, Navbar, Training, Prices, Contacts, ScrollToTopButton, Footer } from '../components';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className='home'>
        <Helmet>
        <title>{t("title_home")}</title>
        <meta name="description" content={t( "description_home")} />
        <meta name="keywords" content={t( "key_words_home")} />
      </Helmet>
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
