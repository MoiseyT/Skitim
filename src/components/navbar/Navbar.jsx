import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    const navItems = [
        { text: "Über mich", href: "#about" },
        { text: "Тренировки", href: "#training" },
        { text: "Price", href: "#price" },
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
            {navItems.map((item, index) => (
                <div key={index} className="nav-item">
                    <button
                        className="nav-button"
                        onClick={() => scrollToComponent(item.href)}
                    >
                        {item.text}
                    </button>
                </div>
            ))}
            <div className="center-logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Navbar;