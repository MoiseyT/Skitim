import React from 'react';
import { Prices, About, Navbar, Training, Contacts, Footer } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Training />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

