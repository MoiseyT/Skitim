import React from 'react';
import { About, Navbar_ru, Training_ru, Prices, Contacts, Footer } from '../components';
import './App.css';


export function Home_ru () {
    return (
        <div className='home'>
          <Navbar_ru />
          <About />
          <Training_ru />
          <h1>Цены на тренировки</h1>
          <Prices />
          <Contacts />
          <Footer />
        </div>
      )
}
