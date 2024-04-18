// src/components/MyCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function MyCarousel() {
    const imageStyle = {
        maxHeight: '800px',
        width: '100%',
        objectFit: 'cover'
    };

    return (
        <Carousel touch={false}>
            <Carousel.Item>
                <img
                    style={imageStyle}
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="aboutus"
                />
                <Carousel.Caption>
                    <h3>A PROPOS DE NOUS</h3>
                    <p>À la base de la société se trouve l'accent mis sur l'alignement stratégique de C&D
                        INVESTMENTS, de ses gestionnaires d'actifs et de ses investisseurs institutionnels.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={imageStyle}
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaGoptby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="investement"
                />
                <Carousel.Caption>
                    <h3>NVESTISSEURS INSTITUTIONNELS</h3>
                    <p>C&D INVESTMENTS offre aux investisseurs la possibilité d'investir à travers ses filiales, qui maintiennent des investissements et/ou des participations dans les gestionnaires d'actifs.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={imageStyle}
                    src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="contact"
                />
                <Carousel.Caption>
                    <h3>GÉRANT D'ACTIFS AFFILIES</h3>
                    <p>C&D INVESTMENTS offre à ses gestionnaires d'actifs affiliés un accès à un capital stable à long terme, une infrastructure opérationnelle robuste ainsi qu'une distribution mondiale..</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
