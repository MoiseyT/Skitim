import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom'; // Импортируем хук useLocation
import { Trans, useTranslation } from 'react-i18next';

function Navbar() {
    const { i18n } = useTranslation();
    const location = useLocation(); // Получаем текущее местоположение

    // Получаем язык из текущего пути
    const langFromPath = location.pathname.split('/')[1];

    // Получаем выбранный язык из i18n или из текущего пути
    const [selectedLanguage, setSelectedLanguage] = useState(langFromPath || i18n.language || 'en');

    useEffect(() => {
        // Обновляем выбранный язык при изменении языка
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        // Обновляем выбранный язык при изменении текущего пути
        const langFromPath = location.pathname.split('/')[1];
        if (['en', 'de', 'ru'].includes(langFromPath)) {
            setSelectedLanguage(langFromPath);
        }
    }, [location.pathname]);

    const navItems = [
        { text: <Trans i18nKey="nav_bar_home" />, to: "/", type: "page" },
        { text: <Trans i18nKey="nav_bar_training" />, to: "/Training_page", type: "page" },
        { text: <Trans i18nKey="nav_bar_price" />, href: "#price_en", type: "container" },
        { text: <Trans i18nKey="nav_bar_contact" />, href: "#contacts_en", type: "container" }
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
                <img src={logo} alt="Логотип" />
            </div>
            {navItems.map((item, index) => (
                <div key={index} className="nav-item">
                    {item.type === "page" ? (
                        <Link to={item.to} className={`nav-button ${location.pathname === item.to ? 'selected' : ''}`}>
                            {item.text}
                        </Link>
                    ) : (
                        <button
                            className="nav-button"
                            onClick={() => scrollToComponent(item.href)}>
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

