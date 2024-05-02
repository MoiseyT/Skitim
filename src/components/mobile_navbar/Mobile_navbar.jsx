import React, { useState, useEffect, useRef } from 'react';
import './mobile_navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';

function Mobile_navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); 
  const { i18n } = useTranslation();

  const navItems = [
    { text: <Trans i18nKey="nav_bar_home" />, href: "#m_home_en", type: "container" },
    { text: <Trans i18nKey="nav_bar_training" />, href: "m_price_en", type: "container" },
    { text: <Trans i18nKey="nav_bar_price" />,href: "#m_price_en", type: "container" },
    { text: <Trans i18nKey="nav_bar_contact" />, href: "#m_contacts_en", type: "container" }
  ];

  const targetRef = useRef(null);

  const scrollToComponent = (href) => {
    const element = document.getElementById(href.substring(1));
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
    setIsOpen(false);
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
          <FaBars size={32} />
        </button>
      )}
      <div className='mobile_title'>Ski Tim
        <div className='personal_coach'><Trans i18nKey="personal_coach" /></div>
      </div>

      <img src={logo} className='mobile_logo' alt="SkiTim_logo" />
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          <FaTimes size={25} /> 
        </button>
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
