import React, { Component } from "react";

import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details d-flex align-items-center">
                <div className="person-details-img">
                    <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" />
                </div>
                <div className="person-details-info">
                    <h4>R2-D2</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Gender: 
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            Birth year: 
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            Eye Color: 
                            <span>male</span>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
};