import React, { Component } from 'react';
import Dog from './Dog'

class DogList extends Component {

    state = {
        dogs: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/dogs")
            // Must be explicit on how to parse the response
            .then(response => response.json())

            // JSON parsed data comes to this then()
            .then(apiDog => {
                this.setState({"dogs": apiDog})
            })
    }

    render() {
        return (
            <div>
            {
                this.state.dogs.filter(dog =>
                {return dog.locationId === this.props.locationId 
                })
                .map(dog => (
                    <Dog name={dog.name} key={dog.id}/>
                ))
                }
            </div>
        );
    }
}

export default DogList