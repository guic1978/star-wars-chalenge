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
                    backgroundImage: "url('" + CardBackground + "')"
                }}
            >
                <div className={classes.planetImg}>
                    <img
                        src={require(`../../../assets/images/planets/${props.planet.name}.png`)} alt="{props.planet.name}" />
                </div>
                <p className={classes.planetTitle}>{props.planet.name}</p>
                <div className={classes.planetDescription}>
                    <p><span className={classes.descriptionItem}>POPULATION</span><br /> {population}</p>
                    <p><span className={classes.descriptionItem}>CLIMATE</span><br /> {props.planet.climate}</p>
                    <p><span className={classes.descriptionItem}>TERRAIN</span><br /> {props.planet.terrain}</p>
                    <p className={classes.descriptionFilms}>FEATURED IN {props.planet.films.length} FILMS</p>
                </div>
            </div>

            <div className={["mt-3", "text-center", classes.buttonNext].join(' ')} ><button onClick={props.clicked}>NEXT</button></div>
        </Aux>
    )
}

export default planetCard;