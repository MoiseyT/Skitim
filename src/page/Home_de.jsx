import React from 'react';
import { About, Navbar_de, Training_de, Prices_de, Contacts_de, Footer } from '../components';
import './App.css';


export function Home_de () {
    return (
        <div className='home'>
          <Navbar_de />
          <About />
          <Training_de />
          <h1>Preise</h1>
          <Prices_de />
          <Contacts_de />
          <Footer />
        </div>
      )
}
