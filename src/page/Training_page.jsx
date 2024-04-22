import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Plan, Contacts, Slider_training, Prices } from '../components';

export function Training_page() {
  return (
    <div className='Training_page'>
      <Navbar />
      <div class="name_level">
      <h1>Training in the beauteful</h1>
      </div>
      <Slider_training />
      <h1>Price</h1>
          <Prices />
      <Plan />
      <div class="name_level">
      <h1>Welocme to Ski Tim!</h1>
      </div>
      <Contacts />
      <Link to={"/"}>Домой</Link>

    </div>
  );
}