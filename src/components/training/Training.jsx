import React from 'react';
import './training.css';
import Training_img from '../../assets/Training_img.png';
import { Link } from 'react-router-dom';
import Snow_tree from '../../assets/Icons/Snow_tree.png';
import Trail_running from '../../assets/Icons/Trail_running.png';
import Gears from '../../assets/Icons/Gears.png';
import Stairs from '../../assets/Icons/Stairs.png';


const Training = () => {

  return (
    <div class="container_training" id="container_training" >
      <div className="image-container" id="image-container">
        <img src={Training_img} alt="About_img" />
        <div className="button-container">
          <button className='training_button'>
            <Link to="/Training_page">
              К тренировкам</Link>
          </button>
        </div>
      </div>
      <div className="training-row">
        <div className="training-item">
          <img src={Snow_tree} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <p>Освойте технику</p>
            <p>Классика, конек и Double Poling</p>
          </div>
        </div>
        <div className="training-item">
          <img src={Trail_running} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <p>Вариативность и комфорт</p>
            <p>Гибкие тренировочные программы</p>
          </div>
        </div>
        <div className="training-item">
          <img src={Gears} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <p>Современные методы</p>
            <p>Баланс между традициями и инновациями</p>
          </div>
        </div>
        <div className="training-item">
          <img src={Stairs} alt="Icon1" className="training-icon" />
          <div className="training_text">
            <p>Мотивация и поддержка</p>
            <p>Учет интересов спортсмена</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Training

