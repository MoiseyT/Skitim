import React from 'react';
import { About, Navbar_ru, Training_ru, Prices_ru, Contacts_ru, Footer } from '../components';
import './App.css';


export function Home_ru () {
    return (
        <div className='home'>
          <Navbar_ru />
          <About />
          <Training_ru />
          <h1>Цены на тренировки</h1>
          <Prices_ru />
          <Contacts_ru />
          <Footer />
        </div>
      )
}
