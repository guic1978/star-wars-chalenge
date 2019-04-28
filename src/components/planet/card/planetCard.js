import React from 'react';

import { Card, Button } from 'react-bootstrap';
import classes from './planetCard.module.css';

const planetCard = props => (
    <Card className={classes.planet}>
        <Card.Body>
            <Card.Title>Planet</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
            <Card.Text>
                <p>{props.planet.name}</p>
                <p>{props.planet.population}</p>
                <p>{props.planet.climate}</p>
                <p>{props.planet.terrain}</p>
                <p>{props.planet.films.length}</p>
            </Card.Text>
            <Button onClick={props.clicked}>NEXT</Button>
        </Card.Body>
    </Card>
)

export default planetCard;