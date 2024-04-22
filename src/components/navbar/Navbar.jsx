import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const navItems = [
        { text: "About", href: "#about" },
        { text: "Training", href: "#training" },
        { text: "Price", href: "#price" },
        { text: "Contact", href: "#contacts" }
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
                <img src={logo} alt="Logo" />
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
                <button className="button_language_ru"><Link to="/Home_ru">RU</Link></button>
            </div>
        </div>
    );
}

export default Navbar;