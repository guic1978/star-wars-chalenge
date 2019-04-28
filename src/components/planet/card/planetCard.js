import React from 'react';

import { Button } from 'react-bootstrap';
import classes from './planetCard.module.css';
import CardBackground from '../../../assets/images/planets/card-background.png'

import Aux from '../../../hoc/Auxiliar';

const planetCard = props => {

    const population = /^\d+$/.test(props.planet.population) ? parseInt(props.planet.population, 10).toLocaleString('pt-br') : props.planet.population;

    return (
        <Aux>
            <div
                className={classes.planetCard}
                style={{
                    backgroundImage: "url('" + CardBackground + "')",
                    backgroundPosition: "center center"
                }}
            >
                <div className={classes.planetImg}>
                    <img
                        src={require(`../../../assets/images/planets/${props.planet.name}.png`)} alt="{props.planet.name}" />
                </div>
                <p className={classes.planetTitle}>{props.planet.name}</p>
                <div className={classes.planetDescription}>
                    <p>POPULATION: {population}</p>
                    <p>CLIMATE: {props.planet.climate}</p>
                    <p>TERRAIN: {props.planet.terrain}</p>
                    <p>FEATURE IN {props.planet.films.length} FILMS</p>
                </div>
            </div>

            <div className="mt-3 text-center"><Button onClick={props.clicked}>NEXT</Button></div>
        </Aux>
    )
}

export default planetCard;