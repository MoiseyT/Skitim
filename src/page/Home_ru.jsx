import React from 'react';
import { About, Navbar_ru, Prices_ru, Contacts_ru, Footer } from '../components';
import './App.css';


export function Home_ru () {
    return (
        <div className='home'>
          <Navbar_ru />
          <About />
          <h1>Цены на тренировки</h1>
          <Prices_ru />
          <Contacts_ru />
          <Footer />
        </div>
      )
}
