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

const AnimatedCirclesTwo = () => {
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
            <Circle onClick={toggleCircles} className="ac-admin" title="JURIDIQUE & FISCAL"></Circle>
            {show && (
                <>
                    <Circle style={fadeIn} className="ac-consultatif" title="Planification successorale">
                        Nous encourageons nos clients à planifier leur succession. Nous aidons à clarifier leurs objectifs et leurs contraintes. En travaillant avec des spécialistes soigneusement sélectionnés, nous trouvons des réponses et créons des solutions.
                    </Circle>
                    <Circle style={fadeIn} className="ac-consolidation" title="Planification fiscale">
                        Nous accompagnons nos clients dans l’examen de leur situation fiscale. Dans un premier temps, nous évaluons leur situation et cherchons à identifier leurs points faibles. Nous les aidons ensuite à définir et mettre en œuvre les solutions adaptées en s'appuyant sur les conseils d'experts de chaque juridiction concernée.
                    </Circle>
                    <Circle style={fadeIn} className="ac-soutien admin" title="Administration de l'entreprise">
                        En collaboration avec des prestataires de services locaux, nous administrons pour nos clients des entreprises et des structures familiales telles que des trusts ou des fondations.</Circle>

                </>
            )}
        </div>
    );
};

export default AnimatedCirclesTwo;
