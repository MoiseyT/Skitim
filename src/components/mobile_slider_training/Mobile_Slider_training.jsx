import React, { useEffect, useState } from 'react';
import './mobile_slider_training.css';

import Winter from '../../assets/Winter.png';
import Spring from '../../assets/Spring.png';
import Summer from '../../assets/Summer.png';
import Autumn from '../../assets/Autumn.png';

import Winter_icon from '../../assets/Icons/Snowflake.png';
import Spring_icon from '../../assets/Icons/flower.png';
import Summer_icon from '../../assets/Icons/Sun.png';
import Autumn_icon from '../../assets/Icons/Blat.png';

import { Trans, useTranslation } from 'react-i18next';

const Thumbnail = ({ arr, image, index }) => {

  const { t } = useTranslation();

  return (<div className="m_tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'm_active thumbnail-img' : 'm_thumbnail-img'}
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
    <div className="m_slideshow">
      <img className="m_mainImg" src={imgs[index]} alt={`Image ${index}`} />
      <span style={{ whiteSpace: 'pre-line' }} className="m_image-text">{texts[index]}</span>
      <div className="m_actions">
        <button onClick={prev}>&#10094;</button>
        <button onClick={next}>&#10095;</button>
      </div >
      <Thumbnail arr={Icones} image={setIndex} index={index} />
    </div>

  )
}


function Mobile_Slider_training() {
  return (
    <div>
      <Slideshow
        imgs={[Winter, Spring, Summer, Autumn]}
        Icones={[Winter_icon, Spring_icon, Summer_icon, Autumn_icon]}
        texts={[<Trans i18nKey="slider1"/>,
        <Trans i18nKey="slider2"/>,
        <Trans i18nKey="slider3"/>,
        <Trans i18nKey="slider4"/>,]}
      />
    </div>
  );
};
export default Mobile_Slider_training