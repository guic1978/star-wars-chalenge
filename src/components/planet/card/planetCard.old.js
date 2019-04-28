import React from 'react';

import { Card, Button } from 'react-bootstrap';
import classes from './planetCard.module.css';

import Aux from '../../../hoc/Auxiliar';

const planetCard = props => {

    const population = /^\d+$/.test(props.planet.population) ? parseInt(props.planet.population, 10).toLocaleString('pt-br') : props.planet.population;

    return (
        <Aux>
            <Card className={classes.planet}>
                <Card.Body>
                    <Card.Title><h1>{props.planet.name}</h1></Card.Title>
                    <Card.Text>POPULATION: {population}</Card.Text>
                    <Card.Text>CLIMATE: {props.planet.climate}</Card.Text>
                    <Card.Text>TERRAIN: {props.planet.terrain}</Card.Text>
                    <Card.Text className="text-center">FEATURE IN {props.planet.films.length} FILMS</Card.Text>
                </Card.Body>
            </Card>
            <div className="mt-3 text-center"><Button onClick={props.clicked}>NEXT</Button></div>
        </Aux>
    )
}

export default planetCard;