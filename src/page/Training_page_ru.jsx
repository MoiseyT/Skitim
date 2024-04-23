import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar_ru, Plan, Contacts_ru, Slider_training, Prices_ru } from '../components';

export function Training_page_ru() {
  return (
    <div className='Training_page'>
      <Navbar_ru />
      <div class="name_level">
      <h1>Тренировки в красивейших уголках Швейцарии</h1>
      </div>
      <Slider_training />
      <h1>Цены на тренировки</h1>
      <Prices_ru />
      <Plan />
      <div class="name_level">
      <h1>Добро пожаловать в Ski Tim!</h1>
      </div>
      <Contacts_ru />
      <Link to={"/"}>Домой</Link>

    </div>
  );
}