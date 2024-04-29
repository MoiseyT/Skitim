import React from 'react';
import './mobile_prices.css';

const Mobile_Prices = () => {

  const navContacts = [{ text: "Связаться", href: "#m_contacts_en" }];

  const scrollToContacts = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTrainingBlock = ({ name, description, price }) => {
    return (
      <div className="m_block" >
        <div className="m_training_name">{name}</div>
        <div className='m_description_button_block'>
          <div className="m_training_description">{description}</div>
          <div className="m_block_button">
            <div className="m_price_size">{price}</div>
            <div>
              {navContacts.map((item, index) => (
                <div key={index} className="nav-item">
                  <button className="m_bottom-right-button" onClick={() => scrollToContacts(item.href)}>
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
      description: 'Вы получите доступ к еженедельному расписанию тренировок, которое включает разнообразные виды физической активности в зависимости от ваших целей. После каждой тренировки, я могу дать вам обратную связь в чате. Каждую неделю я готов провести онлайн встречу на 30 минут, где мы сможем обсудить дальнейшие шаги в тренировочном процессе.',
      price: (
        <>
          300 CHF в месяц
          <br />
        </>
      ),
    },
    {
      name: 'Хайкинг',
      description: 'Отправляйтесь вместе со мной на приключения по Швейцарским Альпам. Спортивный маршрут на несколько часов позволит насладиться умопомрачительными видами гор, долин и деревень. Для продвинутых спортсменов есть вариант длительного кросс-похода. Я сам подберу идеальный маршрут согласно вашим пожеланиям и сопровожу вас по маршруту. Локация - вся территория Швейцарии. (Цена по договоренности)',
      price: (
        <>
          от 150 CHF
          <br />
        </>
      ),
    },
    {
      name: 'Абонемент на 5 или 10 тренировок',
      description: 'Для настоящих энтузиастов, спортсменов и любителей здорового образа жизни. После этого комплекса тренировок вы сможете по-другому взглянуть на ваши спортивные возможности. Вы получите новые комплексные знания о тренировочном процессе. Локация - Тун, Берн или Цюрих по договоренности.',
      price: (
        <>
          5 занятий - 450 CHF
          <br />
          10 занятий - 850 CHF
        </>
      ),
    },
  ];

  return (
    <div className="m_container_price">
      {trainingData.map((data, index) => (
        <div key={index}>
          {renderTrainingBlock(data)}
        </div>
      ))}
    </div>
  );
}

export default Mobile_Prices