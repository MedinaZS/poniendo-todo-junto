import React, { Component } from 'react'; 

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //Establecer como estado la edad para poder modificarlo
            age : this.props.age
            // ...props
        };
    }

    render(){

        //Desestructuracion de las propiedades
        const {firstName, lastName, hairColor} = this.props;

        return (
            <div>
                <h1> {lastName}, {firstName} </h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {hairColor} </p>
                <button className='btn-birthday' onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }

    birthday = () => {
        this.setState({age: this.state.age + 1 })
    }
}

export default PersonCard;