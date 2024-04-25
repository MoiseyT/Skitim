import React from 'react';
import './our_pluses.css';
import plus_icon1 from '../../assets/Icons/Snowflake.png';
import Planning from '../../assets/Icons/Planning.png';
import Connection from '../../assets/Icons/Connection.png';
import Longpartnership from '../../assets/Icons/Longpartnership.png';
import Variability from '../../assets/Icons/Variability.png';
import Smile from '../../assets/Icons/Smile.png';
import World_map from '../../assets/Icons/World_map.png';

function Our_pluses() {
    return (
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-item">
                    <img src={Longpartnership} alt="Icon1" className="icon" />
                    <div className="text">Долгосрочное сотрудничество</div>
                </div>
                <div className="grid-item">
                    <img src={Planning} alt="Icon1" className="icon" />
                    <div className="text">
                    Персональный подход для каждого спортсмена
                    </div>
                </div>
                <div className="grid-item">
                    <img src={Connection} alt="Icon1" className="icon" />
                    <div className="text">Обратная связь от тренера, консультации</div>
                </div>
            </div>
            <div className="grid-row">
                <div className="grid-item">
                    <img src={Variability} alt="Icon1" className="icon" />
                    <div className="text">Вариативные тренировки</div>
                </div>
                <div className="grid-item">
                    <img src={Smile} alt="Icon1" className="icon" />
                    <div className="text">Хорошее настроение, мотивация</div>
                </div>
                <div className="grid-item">
                    <img src={World_map} alt="Icon1" className="icon" />
                    <div className="text">Международный опыт</div>
                </div>
            </div>
        </div>
    );
}
export default Our_pluses;