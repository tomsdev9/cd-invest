import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './AnimationCircle.css';  // Assurez-vous que le chemin d'accès est correct

const Circle = ({ onClick, style, className, title, children }) => (
    <animated.div style={style} onClick={onClick} className={`ac-circle ${className}`}>
        <h4 className="ac-circle-title">{title}</h4>
        <p className="ac-circle-content">{children}</p>
        {title === "ADMINISTRATION" && <div className="ac-click-here">Click here</div>}
    </animated.div>
);

const AnimatedCircles = () => {
    const [show, setShow] = useState(false);
    const fadeIn = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? 'scale(1)' : 'scale(0)',
        config: { tension: 150, friction: 10 },
    });

    const toggleCircles = () => {
        setShow(prev => !prev);
    };

    return (
        <div className="ac-app">
            <Circle onClick={toggleCircles} className="ac-admin" title="ADMINISTRATION"></Circle>
            {show && (
                <>
                    <Circle style={fadeIn} className="ac-consultatif" title="Consultatif">
                        C&D INVESTMENTS offre des conseils personnalisés et dévoués à ses clients, évaluant leurs relations bancaires et proposant des solutions sur mesure. Grâce à notre réseau mondial, nous ouvrons de nouvelles perspectives bancaires adaptées à leurs besoins.
                    </Circle>
                    <Circle style={fadeIn} className="ac-consolidation" title="Consolidation">
                        C&D INVESTMENTS prépare des états financiers consolidés sur mesure, offrant une vue d'ensemble claire des actifs du client. Ces relevés servent de base solide pour évaluer la répartition des actifs en termes de risque et de diversification.
                    </Circle>
                    <Circle style={fadeIn} className="ac-soutien admin" title="Soutien Administratif">
                        C&D INVESTMENTS fournit un soutien complet pour résoudre les problèmes administratifs liés à la gestion du patrimoine. Notre équipe professionnelle est là pour aider nos clients dans tous les aspects de leur vie quotidienne, qu'il s'agisse de questions administratives, fiscales, ou de logement.                    </Circle>
                    <Circle style={fadeIn} className="ac-admin-pat-priv" title="Admin Pat Privé">
                        C&D INVESTMENTS offre une expertise complète en gestion de patrimoine privé, accompagnant ses clients dans l'achat, la vente et la gestion d'actifs variés. Nous veillons à ce que les structures fiscales et juridiques les plus appropriées soient en place pour optimiser leurs investissements.                    </Circle>
                </>
            )}
        </div>
    );
};

export default AnimatedCircles;
