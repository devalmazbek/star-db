import React, { Component } from "react";
import SwapiResources from "../../services/swapi-services";
import Spinner from "../spinner";

import './person-details.css';

export default class PersonDetails extends Component {

    SwapiResources = new SwapiResources();

    state = {
        person: null,
        loading: true
    };
    
    componentDidMount() {
        this.onUpDatePersonDetail();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId) {
            this.onUpDatePersonDetail();
        }
    };

    onUpDatePersonDetail() {
        const {personId} = this.props;
        if(!personId) {
            return;
        }

        this.SwapiResources.getPerson(personId).then((person) => {
           this.setState({
                person: person
           });

           console.log(person);
        });
        
    };

    render() {
        
        if(!this.state.person) {
            return <Spinner/>
        }


        return (
            <div className="person-details d-flex align-items-center">
                <PersonDetail person={this.state.person}/>
            </div>
        );
    }
};

const PersonDetail = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;
    return(
        <React.Fragment>
            <div className="person-details-img">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
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
        </React.Fragment>
    );
}