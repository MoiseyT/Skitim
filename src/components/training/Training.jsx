import React from 'react';
import './training.css';
import Training_img from '../../assets/Training_img.png';
import { Link } from 'react-router-dom';
import plus_icon1 from '../../assets/Snowflake.png';


const Training = () => {

  return (
    <div class="container_training" id="container_training" >
      <div className="image-container" id="image-container">
        <img src={Training_img} alt="About_img" />
        <div className="button-container">
          <button className='training_button'>
            <Link to="/Training_page">
              More</Link>
          </button>
        </div>
      </div>
      <div className="training-row">
        <div className="training-item">
          <img src={plus_icon1} alt="Icon1" className="training-icon" />
          <div className="text">Текст 1</div>
        </div>
        <div className="training-item">
          <img src={plus_icon1} alt="Icon1" className="training-icon" />
          <div className="text">Текст 1</div>
        </div>
        <div className="training-item">
          <img src={plus_icon1} alt="Icon1" className="training-icon" />
          <div className="text">Текст 1</div>
        </div>
        <div className="training-item">
          <img src={plus_icon1} alt="Icon1" className="training-icon" />
          <div className="text">Текст 1</div>
        </div>
      </div>
    </div>
  );
}
export default Training

