import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const navItems = [
        { text: "About", href: "#about", type: "container" },
        { text: "Training", to: "/Training_page", type: "page" },
        { text: "Price", href: "#price_en", type: "container"},
        { text: "Contact", href: "#contacts_en", type: "container"}
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
                <button className="en_button_language_en"><Link to="/">EN</Link></button>
                <button className="en_button_language_de"><Link to="/Home_de">DE</Link></button>
                <button className="en_button_language_ru"><Link to="/Home_ru">RU</Link></button>
            </div>
        </div>
    );
}

export default Navbar;