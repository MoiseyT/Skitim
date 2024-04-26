import React, { useEffect, useState } from 'react';
import './slider_training.css';

import Winter from '../../assets/Winter.png';
import Spring from '../../assets/Spring.png';
import Summer from '../../assets/Summer.png';
import Autumn from '../../assets/Autumn.png';

import Winter_icon from '../../assets/Icons/Snowflake.png';
import Spring_icon from '../../assets/Icons/flower.png';
import Summer_icon from '../../assets/Icons/Sun.png';
import Autumn_icon from '../../assets/Icons/Blat.png';

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active thumbnail-img' : 'thumbnail-img'}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs, Icones, texts }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} alt={`Image ${index}`} />
      <span style={{ whiteSpace: 'pre-line' }} className="image-text">{texts[index]}</span>
      <div className="actions">
        <button onClick={prev}>&#10094;</button>
        <button onClick={next}>&#10095;</button>
      </div >
      <Thumbnail arr={Icones} image={setIndex} index={index} />
    </div>

  )
}


function Slider_training() {
  return (
    <div>
      <Slideshow
        imgs={[Winter, Spring, Summer, Autumn]}
        Icones={[Winter_icon, Spring_icon, Summer_icon, Autumn_icon]}
        texts={[

          `Зима

      ✔ Тренировки на лучших лыжных трассах Швейцарии. Совершенствование техники

      ✔ Скоростно-силовые тренировки для повышения уверенности на трассе

      ✔ Подготовка к марафонам LaDiagonela, Engadin, серии Swiss Loppet, к локальным гонками и др.

      ✔ Советы по экипировке и тактике прохождения дистанций
    `,
          `Весна

      ✔ Восстановление функций организма после лыжного сезона
    
      ✔ Подготовка к трейлам и хайкинги
  
      ✔ Укрепление связок и мышц стабилизаторов
  
      ✔ Долгосрочное планирование спортивных целей на весь сезон
  `,
          `Лето

        ✔ Интервальные тренировки. Скоростной треннинг в различных условиях
  
      ✔ Тренировки на лыжероллерах
  
  ✔ Наращивание тренировочных объемов при сохранении скорости и техники
  
  ✔ Раскрытие спортивного потенциала
`,
          `Осень

✔ Точечная подготовка к лыжному сезону - увеличение количества скоростных тренировок

✔ Упражнения на координацию, развитие скоростно-силовых качеств

✔ Силовые и кроссовые тренировки на свежем воздухе

✔ Моральная поддержка во время сезона туманов и дождей. Время активизации внутренних ресурсов
`]}
      />
    </div>
  );
};
export default Slider_training