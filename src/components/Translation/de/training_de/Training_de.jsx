import React from 'react';
import './training_de.css';
import Training_img from '../../../../assets/Training_img.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Training_de = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
export default Training_de

