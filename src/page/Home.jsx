import React from 'react';
import { About, Navbar, Training, Prices, Contacts, Footer } from '../components';
import './App.css';


export function Home () {
    return (
        <div className='home'>
          <Navbar />
          <About />
          <Training />
          <Contacts />
          <Footer />
        </div>
      )
}
