import React, { Component } from "react";

import './item-list.css';

export default class ItemList extends Component {
    render() {
        return(
            <div className="item-list">
                <ul className="list-group">
                    <li className="list-group-item">first person</li>
                    <li className="list-group-item">second person</li>
                    <li className="list-group-item">third person</li>
                    <li className="list-group-item">fourth person</li>
                </ul>
            </div>
        );
    }
}