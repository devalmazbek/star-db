import React from "react";
import Header from '../header';
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './app.css';


const App = () => {
    return(
        <div className="container wrapper">
            <div className="row">
                <Header />
                <RandomPlanet />
            </div>

            <div className="row mt-5">
                <div className="col-lg-6">
                    <ItemList/>
                </div>
                <div className="col-lg-6">
                    <PersonDetails/>
                </div>
            </div>
        </div> 
    )
       
};

export default App;