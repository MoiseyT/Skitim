import React, { useEffect } from 'react';
import {Mobile_navbar, Mobile_Prices, Mobile_ScrollToTopButton, Footer, Mobile_training, Mobile_Slider_training, Mobile_Contacts } from '../components';
import './App.css';
import './mobile_home.css';
import Preview from '../assets/Preview.mp4';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export function Mobile_home() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mobile_home'>
      <Helmet>
        <title>{t("title_home")}</title>
        <meta name="description" content={t( "description_home")} />
        <meta name="keywords" content={t( "key_words_home")} />
      </Helmet>
      <Mobile_ScrollToTopButton />
      <Mobile_navbar />
      <video className="video-mobile" id='m_home_en' width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
      </video>
      <h2 className='mobile_page_title'>{t("Home_welcome")}</h2>
      <div className='about_me_description'>
      <p><Trans i18nKey="about_description1" /></p>
        <p><Trans i18nKey="about_description2"/> </p>
        <p><Trans i18nKey="about_description3" /></p>
      </div>
      <Mobile_training />
      <h2 className='mobile_page_title' id='m_training_en'>{t("Training_season")}</h2>
      <Mobile_Slider_training />
      <h2 className='mobile_page_title' id='m_price_en'>{t("container_price")}</h2>
      <Mobile_Prices />
      <Mobile_Contacts />
      <Footer />
    </div>
  )
}
