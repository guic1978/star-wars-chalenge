import React, { PureComponent } from 'react';
import './stars.css';

class Stars extends PureComponent {
    numStars = 100;
    stars = [];

    getRandomPosition = () => {
        const y = window.innerWidth;
        const x = window.innerHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    render() {
        for (let i = 0; i < this.numStars; i++) {

            const xy = this.getRandomPosition();

            this.stars.push(
                <div className="star" style={{ top: xy[0] + 'px', left: xy[1] + 'px' }}></div>
            )
        }

        return this.stars.reduce((prev, curr) => [prev, '', curr]);
    }

}

export default Stars;