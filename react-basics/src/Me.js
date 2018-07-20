import React, { Component } from 'react'
import Home from "./Home"  // Import the Home component
import Cohort from "./Cohort"
import Car from "./Car"
import Name from "./Name"
import Dog from "./Dog"

class Me extends Component {
    render() {
        return (
            <div>
                <Name />
                <Cohort />
                <h5>Nashville Software School</h5>
                <Home />
                <Car />
                <Dog />
            </div>
        );
    }
}

export default Me