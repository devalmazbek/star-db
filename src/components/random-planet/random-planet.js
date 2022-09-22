import React, { Component } from "react";
import SwapiService from '../../services/swapi-services';

// style
import './random-planet.css';


export default class RandomPlanet extends Component{

    constructor() {
        super();

        this.state = {
            id: null,
            name: null,
            population: null,
            ratotionPeriod: null,
            diametr: null
        }
    };


    render() {
        return(
            <div className="random__planet">
                <div className="random__planet__container d-flex ">
                    <div className="random__planet__image">
                        <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="" />
                    </div>
                    <div className="random__planet__info">
                        <h3 className="mb-3">Random Planet</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Population: 
                                <span>21321</span>
                            </li>
                            <li className="list-group-item">
                                Raotation period: 
                                <span>21321</span>
                            </li>
                            <li className="list-group-item">
                                Diameter: 
                                <span>21321</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}
