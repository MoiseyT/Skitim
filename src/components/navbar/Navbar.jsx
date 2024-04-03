import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="about">
            <NavButton text="Обо мне" href="#about" />
            </div>
            <div className="training">
            <NavButton text="Тренировки" href="#training" />
            </div>
            <div className="center-logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="price">
            <NavButton text="Цены" href="#contacts" />
            </div>
            <div className="contacts">
            <NavButton text="Контактные данные" href="#contacts" />
            </div>
        </div>
    );
}

export default Navbar;

function NavButton({ text, href }) {
    return (
        <button onClick={() => scrollToComponent(href)}>
            {text}
        </button>
    );
}

function scrollToComponent(href) {
    const element = document.getElementById(href.substring(1));
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}