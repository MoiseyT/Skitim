import React, { useEffect } from 'react';
import { About, Mobile_navbar, Training, Prices, Contacts, ScrollToTopButton, Footer } from '../components';
import './App.css';
import logo from '../assets/logo.png';
import './mobile_home.css';

export function Mobile_home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div>
        <title>Уникальный заголовок страницы</title>
        <ScrollToTopButton />
        <Mobile_navbar />
        <img src={logo} className='mobile_logo' alt="Логотип" />
        <h2 className='homepage_price'>Цены</h2>
        <Prices />
        <Contacts />
        <Footer />
      </div>
  )
}
