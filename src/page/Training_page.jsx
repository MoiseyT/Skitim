import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Contacts, Slider_training, Prices, Our_pluses, ScrollToTopButton } from '../components';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';



export function Training_page() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='top_training_page' className='Training_page'>
      <Helmet>
      <title>{t("title_home")}</title>
        <meta name="description" content={t( "description_home")} />
        <meta name="keywords" content={t( "key_words_home")} />
      </Helmet>
      <Navbar />
      <Slider_training />
      <h2 className='homepage_price'>{t("advantages")}</h2>
      <Our_pluses />
      <h2 className='homepage_price'>{t("container_price")}</h2>
      <Prices />
      <Contacts />
      <ScrollToTopButton />
    </div>
  );
}