import React from 'react';
import './about.css';
import About_img from '../../assets/About.jpg';
import Preview from '../../assets/Preview.mp4';
const About = () => {
  return (
    <div class="container" id="about">
      <img src={About_img} alt="About_training" />
      <video className="video-container" width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <h1>Тренировки в Ski Tim: грация и сила в каждом движении!</h1>
      <div className='my_info'>
        <li> Чемпион по поеданию пельменей</li>
        <li> Участник чемпионата по лежанию</li>
        <li> Варите пельмени правильно!</li>
        <li> Уделите внимание тесту!</li>
        <li> Уделите внимание тесту!</li>
      </div>
      <div className='my_info_more'>
      <p>Чемпион по поеданию пельменей. Этот титул не приходит легко. На пути к вершинам этого невероятного искусства, каждый кусок теста и каждый грамм начинки имеют значение.</p>
        <p>Участник чемпионата по лежанию. Да, вы не ослышались. Есть искусство лежания, и это не просто для фотографий в социальных сетях. Это дисциплина, требующая высокой концентрации и мастерства.</p>
          </div>
    </div>

  )
}

export default About
