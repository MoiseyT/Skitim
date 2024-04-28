import React from 'react';
import './about.css';
import About_img from '../../assets/About.jpg';
import Preview from '../../assets/Preview.mp4';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div class="container" id="about">
      <img src={About_img} alt="About_training" />
      <video className="video-container" width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
      </video>
      <h1><Trans i18nKey="Home_welcome" /></h1>
      <div className='my_info'>
        <li> Персональный тренер по лыжным гонкам, силовому треннингу, лыжероллерам и трейлраннингу</li>
        <li> Более 20 лет опыта в лыжных гонках</li>
        <li> Более 30 марафонов по всей Европе. Бронзовый призер La Diagonela 2024 среди любителей. Топ 10 в марафонах Euroloppet и Visma Ski Classics Challengers</li>
        <li> Подготовка с нуля до марафона</li>
      </div>
      <div className='my_info_more'>
      <p>Увлекательные тренировки в красивейших местах Швейцарии на немецком, английском или русском языках.</p>
        <p>Выбирайте то, что вам нравится: лыжные гонки, хайкинг, силовой тренинг, трейлраннинг, а я принесу вам хорошее настроение, энергию, швейцарское качество тренировок и результат в любое время года. </p>
        <p>Присоединяйся!</p>
          </div>
    </div>

  )
}

export default About
