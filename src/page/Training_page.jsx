import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Plan, Contacts, Slider_training, Sport_level } from '../components';

export function Training_page() {
  return (
    <div className='Training_page'>
      <Navbar />
      <div class="name_level">
      <h1>Тренировки для любого уровня в красивейших уголках Швейцарии</h1>
      </div>
      <Sport_level />
      <Slider_training />
      <Plan />
      <div class="name_level">
      <h1>Добро пожаловать в Ski Tim!</h1>
      </div>
      <Contacts />
      <Link to={"/"}>Домой</Link>

    </div>
  );
}