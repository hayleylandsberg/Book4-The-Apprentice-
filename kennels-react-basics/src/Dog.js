import React, { Component } from 'react';

class Dog extends Component {


    render() {
        return (
            <article>
                <h3>{this.props.name}</h3>
            </article>
        );
    }
}

export default Dog