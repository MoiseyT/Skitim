import React from 'react';
import './navbar_de.css';
import logo_ru from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar_de() {
    const navItems = [
        { text: "Über mich", href: "#about" },
        { text: "Infos", href: "#training" },
        { text: "Preis", href: "#price" },
        { text: "Kontakt", href: "#contacts" }
    ];


    const scrollToComponent = (href) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar_de">
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
                <button className="de_button_language_en"><Link to="/">EN</Link></button>
                <button className="de_button_language_de"><Link to="/Home_de">DE</Link></button>
                <button className="de_button_language_ru"><Link to="/Home_ru">RU</Link></button>
            </div>
        </div>
    );
}

export default Navbar_de;