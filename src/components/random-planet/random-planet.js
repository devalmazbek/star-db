import React, { Component } from "react";
import SwapiResources from '../../services/swapi-services';

// style
import './random-planet.css';


export default class RandomPlanet extends Component{

    
    SwapiResources= new SwapiResources();
    constructor() {
        super();

        this.state = {
            planet: {}
        };

        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }


    updatePlanet() {
        const id = Math.floor(Math.random() * 10) + 2;
        this.SwapiResources.getPlanet(id).then(this.onPlanetLoaded);   
    };


    render() {

        const {planet: {id, name, population, rotationPeriod, diameter} } = this.state;
        console.log(id);
        return(
            <div className="random__planet">
                <div className="random__planet__container d-flex ">
                    <div className="random__planet__image">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
                    </div>
                    <div className="random__planet__info">
                        <h3 className="mb-3">{name}</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Population: 
                                <span>{population}</span>
                            </li>
                            <li className="list-group-item">
                                Raotation period: 
                                <span>{rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                Diameter: 
                                <span>{diameter}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}
