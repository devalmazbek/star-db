import React, { Component } from "react";
import SwapiResources from '../../services/swapi-services';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

// style
import './random-planet.css';


export default class RandomPlanet extends Component{

    
    SwapiResources= new SwapiResources();
    constructor() {
        super();

        this.state = {
            planet: {},
            loading: true,
            error: false,
        };

    this.updatePlanet();

        
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet, 
            loading: false,
            error: false
        });
    }

    onError = (err) => {
       this.setState({
        error: true,
        loading: false
       }); 
    }
     
    updatePlanet() {
        const id = Math.floor(Math.random() * 10) + 2;
        this.SwapiResources.getPlanet(id).then(this.onPlanetLoaded)
        .catch(this.onError);   
    };


    render() {

        const {planet, loading, error} = this.state;

        const hasPlanet = !(planet && error);

        const errorComponent = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const planetBlock = hasPlanet ? <RandomPlanetBlock planet={planet}/> : null;

        return(
            <div className="random__planet">
                <div className="random__planet__container d-flex ">
                    {errorComponent}
                    {spinner}
                    {planetBlock}
                </div>
            </div>
        );
    }
    
}

const RandomPlanetBlock = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;
    return(
       <React.Fragment>
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
        </React.Fragment> 
    );
}
