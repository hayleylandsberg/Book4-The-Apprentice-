import React, { Component } from 'react';
import DogList from './DogList';
import "./styles/Location.css"

class Location extends Component {

    render() {
        return (
            <article className="kennelLocation">
                <h2>{this.props.name}</h2>
                <h3>{this.props.address}</h3>
                <DogList locationId={this.props.locationId}/>
            </article>
        );
    }
}

export default Location