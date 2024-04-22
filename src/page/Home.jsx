import React from 'react';
import { About, Navbar, Training, Prices, Contacts, Footer } from '../components';
import './App.css';


export function Home () {
    return (
        <div className='home'>
          <Navbar />
          <About />
          <Training />
          <h1>Цены на тренировки</h1>
          <Prices />
          <Contacts />
          <Footer />
        </div>
      )
}
