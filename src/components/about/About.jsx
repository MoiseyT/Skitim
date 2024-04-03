import React from 'react';
import './about.css';
import About_img from '../../assets/About.jpg';
const About = () => {
  return (
    <div class="container" id="about">
      <img src={About_img} alt="About_img" />
        <div class="text">Обо мне: здесь я напишу немного о себе и будет моя фотография</div>
    </div>
  )
}

export default About
