import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Plan, Contacts, Slider_training, Prices } from '../components';

export function Training_page() {
  return (
    <div className='Training_page'>
      <Navbar />
      <Slider_training />
      <Prices />
      <Plan />
      <Contacts />
      <Link to={"/"}>Домой</Link>

    </div>
  );
}