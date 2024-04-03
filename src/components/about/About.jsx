import React from 'react';
import './about.css';
import About_img from '../../assets/About.jpg';
import Preview from '../../assets/Preview.mp4';
const About = () => {
  return (
    <div class="container" id="about">
      <img src={About_img} alt="About_img" />
      <video className="video-container" width= '250' height='450' controls autoPlay >
        <source src={Preview} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
    </div>
  )
}

export default About
