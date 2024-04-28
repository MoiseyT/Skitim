import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Используем состояние для отслеживания выбранного языка
    const { i18n } = useTranslation();

    const navItems = [
        { text: "Домой", to: "/", type: "page" },
        { text: "Тренировки", to: "/Training_page", type: "page" },
        { text: "Цены", href: "#price_en", type: "container" },
        { text: "Связаться", href: "#contacts_en", type: "container" }
    ];

    const scrollToComponent = (href) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className="navbar">
            <div className="center-logo">
                <img src={logo} alt="Logo" />
            </div>
            {navItems.map((item, index) => (
                <div key={index} className="nav-item">
                    {item.type === "page" ? (
                        <Link to={item.to} className="nav-button">
                            {item.text}
                        </Link>
                    ) : (
                        <button
                            className="nav-button"
                            onClick={() => scrollToComponent(item.href)}
                        >
                            {item.text}
                        </button>
                    )}
                </div>
            ))
            }
            <div className="languages">
                <button className={`button_language_en ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
                <button className={`button_language_de ${selectedLanguage === 'de' ? 'selected' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
                <button className={`button_language_ru ${selectedLanguage === 'ru' ? 'selected' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
            </div>
        </div>
    );
}

export default Navbar;