import React, { useEffect } from 'react';
import {Mobile_navbar, Mobile_Prices, Mobile_ScrollToTopButton, Footer, Mobile_training, Mobile_Slider_training, Mobile_Contacts } from '../components';
import './App.css';
import './mobile_home.css';
import Preview from '../assets/Preview.mp4';

export function Mobile_home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mobile_home'>
      <title>Уникальный заголовок страницы</title>
      <Mobile_ScrollToTopButton />
      <Mobile_navbar />
      <video className="video-mobile" width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
      </video>
      <h2 className='mobile_page_title'>Тренировки в Ski Tim: энергия и сила в каждом движении!</h2>
      <div className='about_me_description'>
      <p>Увлекательные тренировки в красивейших местах Швейцарии на немецком, английском или русском языках</p>
        <p>Выбирайте то, что вам нравится: лыжные гонки, хайкинг, силовой тренинг, трейлраннинг, а я принесу вам хорошее настроение, энергию, швейцарское качество тренировок и результат в любое время года </p>
        <p>Присоединяйся!</p>
      </div>
      <Mobile_training />
      <h2 className='mobile_page_title'>Тренировки в любое время года</h2>
      <Mobile_Slider_training />
      <h2 className='mobile_page_title'>Цены</h2>
      <Mobile_Prices />
      <Mobile_Contacts />
      <Footer />
    </div>
  )
}
