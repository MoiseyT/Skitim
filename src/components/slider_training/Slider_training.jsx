import React, { useEffect, useState } from 'react';
import './slider_training.css';

import Winter from '../../assets/Winter.png';
import Spring from '../../assets/Spring.png';
import Summer from '../../assets/Summer.png';
import Autumn from '../../assets/Autumn.png';

import Winter_icon from '../../assets/Snowflake.png';
import Spring_icon from '../../assets/flower.png';
import Summer_icon from '../../assets/Sun.png';
import Autumn_icon from '../../assets/Blat.png';

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
        texts={[`
      ✔ Покупайте самолепные пельмени!

      ✔ Это вкусно и сытно!

      ✔ Варите пельмени правильно!

      ✔ Уделите внимание тесту!
    `,
          `
    ✔ Покупайте качественные корма!
    
    ✔ Прогуливайтесь с собакой каждый день!
  
    ✔ Уделяйте внимание обучению и играм!
  
    ✔ Регулярно проверяйте здоровье!
  `, `
  ✔ Используйте свежемолотый кофе!
  
  ✔ Не переживайте кофе!
  
  ✔ Научитесь правильно варить кофе!
  
  ✔ Открывайте для себя новые сорта!
`,
          `
✔ Читайте разнообразные жанры!

✔ Находите время для чтения каждый день!

✔ Обменивайтесь книгами с друзьями!

✔ Посещайте литературные встречи!
`]}
      />
    </div>
  );
};
export default Slider_training