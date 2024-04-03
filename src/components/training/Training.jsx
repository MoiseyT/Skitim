import React from 'react';
import './training.css';
import Training_img from '../../assets/Training_img.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Устанавливаем позицию прокрутки в верхнее положение при монтировании компонента
  }, []);

  return (
    <div class="container_training" id="container_training" >
      <div className="image-container" id="image-container">
        <img src={Training_img} alt="About_img" id="training" />
        <div className="button-container">
            <button className='training_button'>
            <Link to="/Training_page">К тренировкам</Link>
            </button>
        </div>
      </div>
    </div>
  );
}
export default Training

