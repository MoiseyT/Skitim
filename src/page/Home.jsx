import React, { useEffect } from 'react';
import { About, Navbar, Training, Prices, Contacts, ScrollToTopButton, Footer } from '../components';
import './App.css';


export function Home() {

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
        <h2 className='homepage_price'>Цены</h2>
        <Prices />
        <Contacts />
        <Footer />
      </div>
  )
}
