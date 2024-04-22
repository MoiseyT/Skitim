import React from 'react';
import './prices.css';

const Prices = () => {

  const navContacts = [{ text: "Записаться", href: "#contacts" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="block">
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
      name: 'Индивидуальная тренировка',
      description: 'Тренер составит программу занятий, учитывая ваши параметры и целиОн поддерживает мотивацию, контролирует технику',
      price: (
        <>
          60 min - 90 CHF
          <br />
          90 min - 120 CHF
        </>
      ),
    },
    {
      name: 'Семейная тренировка',
      description: 'Для ослов, бобров, кабанов и т.д. Если Вы придете с бобом, то Вам скидка - 100 %!',
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