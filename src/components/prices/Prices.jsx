import React from 'react';
import './prices.css';

const Prices = () => {

  const navContacts = [{ text: "Связаться", href: "#contacts_en" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="block" id='price_en'>
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
      name: 'Пробная тренировка',
      description: 'Рад познакомить вас с миром спорта на нашей первой пробной тренировке. Вы познакомитесь с основными принципами тренировочного процесса, узнаете больше о периодизации и специализации того или иного упражнения. Локация - Тун, Берн или Цюрих по договоренности. Предварительная консультация в мессенджерах - бесплатно!',
      price: (
        <>
          60 min - 60 CHF
          <br />
          90 min - 80 CHF
        </>
      ),
    },
    {
      name: 'Индивидуальная тренировка',
      description: 'Техническая, силовая, интервальная или равномерная тренировка. Поддержка и помощь на протяжении всей тренировочной сессии. В конце тренировки я дам вам рекомендации о дальнейших действиях для достижения максимального результата. Гибкая система - вы можете выбрать время и место тренировки. Локация - Тун, Берн или Цюрих по договоренности.',
      price: (
        <>
          60 min - 110 CHF
          <br />
          90 min - 140 CHF
        </>
      ),
    },
    {
      name: 'Семейная тренировка',
      description: 'Хотите приятно провести время вместе со своими близкими? Тогда этот вариант идеально подойдет для вас. Программа тренировки специально разработана с учетом интересов всех членов семьи, независимо от их возраста и физической подготовки. 2 взрослых + 2 ребенка (каждый дополнительный человек + 50 CHF)',
      price: (
        <>
          60 min - 150 CHF
          <br />
          90 min - 200 CHF
        </>
      ),
    },
    {
      name: 'Тренировочный план - Online',
      description: 'Техническая, силовая, интервальная или равномерная тренировка. Поддержка и помощь на протяжении всей тренировочной сессии. В конце тренировки я дам вам рекомендации о дальнейших действиях для достижения максимального результата. Гибкая система - вы можете выбрать время и место тренировки. Локация - Тун, Берн или Цюрих по договоренности. Предварительная консультация в мессенджерах - бесплатно!',
      price: (
        <>
          60 min - 110 CHF
          <br />
          90 min - 140 CHF
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