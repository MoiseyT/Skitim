import React from 'react';
import './about.css';
import About_img from '../../assets/About.jpg';
import Preview from '../../assets/Preview.mp4';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div class="container" id="about">
      <img src={About_img} alt="Video_personal_training" />
      <video className="video-container" width='350' height='500' controls autoPlay >
        <source src={Preview} type="video/mp4" />
      </video>
      <h1><Trans i18nKey="Home_welcome" /></h1>
      <div className='my_info'>
        <li><Trans i18nKey="about_1line" /></li>
        <li><Trans i18nKey="about_2line" /></li>
        <li><Trans i18nKey="about_3line" /></li>
        <li><Trans i18nKey="about_4line" /></li>
      </div>
      <div className='my_info_more'>
      <p><Trans i18nKey="about_description1" /></p>
        <p><Trans i18nKey="about_description2"/> </p>
        <p><Trans i18nKey="about_description3" /></p>
          </div>
    </div>

  )
}

export default About
