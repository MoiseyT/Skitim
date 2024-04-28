import React, { useEffect } from 'react';
import { About, Mobile_navbar, Training, Prices, Contacts, ScrollToTopButton, Footer } from '../components';
import './App.css';
import './mobile_home.css';
import Preview from '../assets/Preview.mp4';
export function Mobile_home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <title>Уникальный заголовок страницы</title>
      <ScrollToTopButton />
      <Mobile_navbar />
      <video className="video-mobile" width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
      </video>
      <h2 className='homepage_price'>Цены</h2>
      <Prices />
      <Contacts />
      <Footer />
    </div>
  )
}
