import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Contacts, Slider_training, Prices, Our_pluses, ScrollToTopButton } from '../components';




export function Training_page() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='top_training_page' className='Training_page'>
      <Navbar />
      <Slider_training />
      <h2 className='homepage_price'>Преимущества</h2>
      <Our_pluses />
      <h2 className='homepage_price'>Цены</h2>
      <Prices />
      <Contacts />
      <ScrollToTopButton />
    </div>
  );
}