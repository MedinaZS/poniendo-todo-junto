import React, { Component } from 'react'; 

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            // age : this.props.age
            ...props
        };
    }

    render(){

        return (
            <div>
                <h1> {this.state.lastName}, {this.state.firstName} </h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {this.state.hairColor} </p>
                <button className='btn-birthday' onClick={this.birthday}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        );
    }

    birthday = () => {
        this.setState({age: this.state.age + 1 })
    }
}

export default PersonCard;