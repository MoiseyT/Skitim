import React from 'react';
import './training.css';

import About_img from '../../assets/About.jpg';


const Training = () => {
  return (
    <div class="container" id="training">
      <div className="image-container">
        <img src={About_img} alt="About_img" />
        <div className="button-container">
          <a href="src/components/page/Page_training.js">
            <button className='training_button'>Не нажимать!</button>
          </a>
        </div>
      </div>
      <div class="text">Обо мне: здесь я напишу немного о себе и будет моя фотография</div>
    </div>
  );
}
export default Training

