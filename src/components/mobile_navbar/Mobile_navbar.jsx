import React, { useState, useEffect, useRef } from 'react';
import './mobile_navbar.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';


function Mobile_navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Используем состояние для отслеживания выбранного языка
  const { i18n } = useTranslation();

  const navItems = [
    { text: "Домой", to: "/", type: "page" },
    { text: "Тренировки", to: "/Training_page", type: "page" },
    { text: "Цены", href: "#price_en", type: "container" },
    { text: "Связаться", href: "#contacts_en", type: "container" }
  ];

  const targetRef = useRef(null);

  const scrollToComponent = () => {
    const element = document.getElementById("price_en");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickMenuItem = () => {
    setIsOpen(false); // Закрыть меню при нажатии на пункт меню
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);


  return (
    <div className="dropdown-menu" ref={menuRef}>
      {!isOpen && (
        <button className="dropdown-button" onClick={toggleMenu}>
          <FaBars size={32}/>
        </button>
      )}
      <div className='mobile_title'>Ski Tim
      <div className='personal_coach'>персональный тренер</div>
      </div>
      
      <img src={logo} className='mobile_logo' alt="Логотип" />
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <ul className="vertical-menu">
          {navItems.map((item, index) => (
            <li key={index} className="menu-item" onClick={handleClickMenuItem}>
              {item.type === "page" ? (
                <Link to={item.to} className="menu-button">
                  {item.text}
                </Link>
              ) : (
                <button className="menu-button" onClick={() => scrollToComponent(item.href)}>
                  {item.text}
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile_languages">
          <button className={`mobile_button_language_en ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
          <button className={`mobile_button_language_de ${selectedLanguage === 'de' ? 'selected' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
          <button className={`mobile_button_language_ru ${selectedLanguage === 'ru' ? 'selected' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
        </div>
      </div>
    </div>
  );
}

export default Mobile_navbar;
