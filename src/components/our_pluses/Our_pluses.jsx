import React from 'react';
import './our_pluses.css';
import Planning from '../../assets/Icons/Planning.png';
import Connection from '../../assets/Icons/Connection.png';
import Longpartnership from '../../assets/Icons/Longpartnership.png';
import Variability from '../../assets/Icons/Variability.png';
import Smile from '../../assets/Icons/Smile.png';
import World_map from '../../assets/Icons/World_map.png';
import { Trans, useTranslation } from 'react-i18next';

function Our_pluses() {
    const { t } = useTranslation();
    return (
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-item">
                    <img src={Longpartnership} alt="Icon1" className="icon" />
                    <div className="text">{t("adv_block1")}</div>
                </div>
                <div className="grid-item">
                    <img src={Planning} alt="Icon1" className="icon" />
                    <div className="text">
                    {t("adv_block2")}
                    </div>
                </div>
                <div className="grid-item">
                    <img src={Connection} alt="Icon1" className="icon" />
                    <div className="text">{t("adv_block3")}</div>
                </div>
            </div>
            <div className="grid-row">
                <div className="grid-item">
                    <img src={Variability} alt="Icon1" className="icon" />
                    <div className="text">{t("adv_block4")}</div>
                </div>
                <div className="grid-item">
                    <img src={Smile} alt="Icon1" className="icon" />
                    <div className="text">{t("adv_block5")}</div>
                </div>
                <div className="grid-item">
                    <img src={World_map} alt="Icon1" className="icon" />
                    <div className="text">{t("adv_block6")}</div>
                </div>
            </div>
        </div>
    );
}
export default Our_pluses;