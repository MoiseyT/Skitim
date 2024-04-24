import React from 'react';
import './our_pluses.css';
import plus_icon1 from '../../assets/Snowflake.png';

function Our_pluses() {
    return (
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
            </div>
            <div className="grid-row">
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
                <div className="grid-item">
                    <img src={plus_icon1} alt="Icon1" className="icon" />
                    <div className="text">Текст 1</div>
                </div>
            </div>
        </div>
    );
}
export default Our_pluses;