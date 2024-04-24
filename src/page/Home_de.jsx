import React from 'react';
import { About, Navbar_de, Prices_de, Contacts_de, Footer } from '../components';
import './App.css';


export function Home_de () {
    return (
        <div className='home'>
          <Navbar_de />
          <About />
          <h1>Preise</h1>
          <Prices_de />
          <Contacts_de />
          <Footer />
        </div>
      )
}
