import React from 'react';
import './stars.css';

const stars = () => {
    const numStars = 100;
    let stars = [];

    for (let i = 0; i < numStars; i++) {

        const xy = getRandomPosition();

        stars.push(
            <div className="star" style={{ top: xy[0] + 'px', left: xy[1] + 'px' }}></div>
        )
    }

    return stars.reduce((prev, curr) => [prev, '', curr]);
}

const getRandomPosition = () => {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

export default stars;