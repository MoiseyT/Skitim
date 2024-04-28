import React, { useState } from 'react';
import './mobile_navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './mobile_navbar.css';

function Mobile_navbar({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Главная</li>
        <li>О нас</li>
        <li>Услуги</li>
        <li>Контакты</li>
      </ul>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default Mobile_navbar;
