import React, { Component } from "react";
import Header from '../header';
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './app.css';


export default class App extends Component {

    state = {
        selectedPerson: 2
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id, 
        });
        console.log(this.state.selectedPerson);
    };

    render() {
        return(
            <div className="container wrapper">
                <div className="row">
                    <Header />
                    <RandomPlanet />
                </div>
    
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <ItemList onPersonSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-lg-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div> 
        );
    };
    
}   