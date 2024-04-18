import React from 'react';
import RotatingCircles from '../../components/RotatingCircles/RotatingCircles'; // Assurez-vous que le chemin est correct
import Carousel from '../../components/Carousel/Carousel';

function Home() {
    return (
        <div>
            <Carousel />
            <RotatingCircles />
        </div>

    );
}

export default Home;
