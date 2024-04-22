import React from 'react';
import './navbar_ru.css';
import logo_ru from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar_ru() {
    const navItems = [
        { text: "Обо мне", href: "#about" },
        { text: "Тренировки", href: "#training" },
        { text: "Цены", href: "#price" },
        { text: "Контактные данные", href: "#contacts" }
    ];


    const scrollToComponent = (href) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <div className="center-logo">
                <img src={logo_ru} alt="Logo" />
            </div>
            {navItems.map((item, index) => (
                <div key={index} className="nav-item">
                    <button
                        className="nav-button"
                        onClick={() => scrollToComponent(item.href)}
                    >
                        {item.text}
                    </button>
                </div>
            ))
            }
            <div className="languages">
                <button className="button_language_en">EN</button>
                <button className="button_language_de">DE</button>
                <button className="button_language_ru"><Link to="/Training_page_ru">RU</Link></button>
            </div>
        </div>
    );
}

export default Navbar_ru;