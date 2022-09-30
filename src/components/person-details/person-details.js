import React, { Component } from "react";
import SwapiResources from "../../services/swapi-services";
import Spinner from "../spinner";

import './person-details.css';

export default class PersonDetails extends Component {

    SwapiResources = new SwapiResources();

    state = {
        person: null
    };
    
    componentDidMount() {
        this.onUpDatePersonDetail();
    }



    onUpDatePersonDetail() {
        const {personIndex} = this.props;
        if(!personIndex) {
            return;
        }

        this.SwapiResources.getPerson(6).then((person) => {
           this.setState({
                person: person
           });

           
        });
    };

    render() {
        
        // console.log(id, name, gender, birthYear, eyeColor);
        // console.log(this.state.person);
        // console.log(this.state);

        if(!this.state.person) {
            return <Spinner/>
        }

        const {id, name, gender, birthYear, eyeColor} = this.props.person;

        console.log(this.state);
        return (
            <div className="person-details d-flex align-items-center">
                <div className="person-details-img">
                    <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" />
                </div>
                <div className="person-details-info">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Gender: 
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            Birth year: 
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            Eye Color: 
                            <span>{eyeColor}</span>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
};