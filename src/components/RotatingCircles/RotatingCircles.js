import React from 'react';
import './RotatingCircles.css';

function RotatingCircles() {
    return (
        <div className="rc-circle-container">
            <div className="rc-circle-wrapper">
                <div className="rc-circle"></div>
                <div className="rc-text">
                    <h4>BOUTIQUES AFFILIÉES</h4>
                    <h1>21*</h1>
                    <p>Nombre de boutiques de gestion d’actifs leaders</p>
                </div>
            </div>
            <div className="rc-circle-wrapper">
                <div className="rc-circle"></div>
                <div className="rc-text">
                    <h4>CAPITAL</h4>
                    <h1>17MCHF**</h1>
                    <p>Capital Permanent de la Société Mère</p>
                </div>
            </div>
            <div className="rc-circle-wrapper">
                <div className="rc-circle"></div>
                <div className="rc-text">
                    <h4>ACTIFS</h4>
                    <h1>120MCHF***</h1>
                    <p>Actifs sous gestion (à partir de 2023)</p>
                </div>
            </div>
        </div>
    );
}

export default RotatingCircles;
