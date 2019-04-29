import React, { Component } from 'react';
import axios from '../../axios-starwars-api';

import Intro from '../../components/intro/intro';
import Stars from '../../components/stars/Stars';
import PlanetCard from '../../components/planet/card/planetCard';
import Logo from '../../components/logo/logo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    state = {
        planets: null,
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/planets/')
            .then(result => {
                this.setState({
                    planets: result.data.results.map(
                        planet => (
                            {
                                name: planet.name,
                                population: planet.population,
                                climate: planet.climate,
                                terrain: planet.terrain,
                                films: planet.films
                            })
                    )
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    setRandomOrderPlanets = () => {
        if (this.state.planets) {
            let planets = [...this.state.planets];
            const num = Math.abs(Math.floor(Math.random() * planets.length - 5));
            const planet = planets.splice(num, 1);
            planets.push(...planet);

            this.setState({
                planets: [...planets]
            });
        }
    }

    render() {
        let planet = null;

        if (this.state.planets) {
            planet = <PlanetCard clicked={this.setRandomOrderPlanets} planet={this.state.planets[this.state.planets.length - 1]} />
        }

        return (
            <div>
                <Intro />
                <div className="logo">
                    <Logo />
                </div>
                <Stars />
                <div className="planetCard">
                    {planet}
                </div>
            </div>
        );
    }
}

export default Home;