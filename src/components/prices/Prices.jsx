import React from 'react';
import './prices.css';

const Prices = () => {

  const navContacts = [{ text: "Contact me", href: "#contacts_en" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="block" id = 'price_en'>
        <div className="training_name">{name}</div>
        <div className='description_button_block'>
          <div className="training_description">{description}</div>
          <div className="block_button">
            <div className="price_size">{price}</div>
            <div className="bob">
              {navContacts.map((item, index) => (
                <div key={index} className="nav-item">
                  <button className="bottom-right-button" onClick={() => scrollToContacts(item.href)}>
                    {item.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const trainingData = [
    {
      name: 'Individual training',
      description: 'The trainer will create a training program, taking into account your parameters and supports motivation, controls technique',
      price: (
        <>
          60 min - 90 CHF
          <br />
          90 min - 120 CHF
        </>
      ),
    },
    {
      name: 'Family training',
      description: 'For donkeys, beavers, wild boars, etc. If you come with a bob, you will get a 100% discount!',
      price: (
        <>
          60 min - 150 CHF
          <br />
          90 min - 200 CHF
        </>
      ),
    },
  ];

  return (
    <div className="container_price">
      {trainingData.map((data, index) => (
        <div key={index}>
          {renderTrainingBlock(data)}
        </div>
      ))}
    </div>
  );
}

export default Prices