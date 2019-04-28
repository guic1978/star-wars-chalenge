import React, { Component } from 'react';
import axios from '../../axios-starwars-api';

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
            const num = Math.floor(Math.random() * planets.length - 5);
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
            planet = this.state.planets[this.state.planets.length - 1];
            planet = (
                <div>
                    <p>{planet.name}</p>
                    <p>{planet.population}</p>
                    <p>{planet.climate}</p>
                    <p>{planet.terrain}</p>
                    <p>{planet.films.length}</p>
                </div>
            );
        }

        return (
            <div>
                <button onClick={this.setRandomOrderPlanets}></button>
                {planet}
            </div>
        );
    }
}

export default Home;