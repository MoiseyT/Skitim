import React, { useEffect }  from 'react';
import { About, Navbar, Training, Prices, Contacts, ScrollToTopButton } from '../components';
import './App.css';


export function Home () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className='home'>
          <Navbar />
          <About />
          <Training />
          <Prices />
          <Contacts />
          <ScrollToTopButton />
        </div>
      )
}
