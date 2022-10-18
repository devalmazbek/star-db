import React, { Component } from "react";
import SwapiResources from "../../services/swapi-services";
import Spinner from "../spinner";
import './item-list.css';



export default class ItemList extends Component {
    SwapiResources = new SwapiResources();
    state = {
        allPeople: null
    };

    componentDidMount() {
        this.upDatePeople();
    };    

    upDatePeople() {
        this.SwapiResources.getAllPeople().then((people) => {
            this.setState({
                allPeople: people
            });
        })
        
    }



    renderPeople(people) {
       
        return people.map(({id, name}) => {
            return(<li 
                    className="list-group-item" 
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}>
                    {name}
                    </li>
                );
        });
    }

    render() {
        const {allPeople} = this.state;
        if(!allPeople) return <Spinner />;

        const getPersonItem = this.renderPeople(allPeople);



        return(
            <div className="item-list">
                <ul className="list-group">
                    {getPersonItem}
                </ul>
            </div>
        );
    }
}