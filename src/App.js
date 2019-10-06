import React from 'react'
import './App.css'
import Component1 from './components/Component1'
import { Component2 } from './components/Component2'

export class App extends React.Component {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    typeOfCard: '',
  };

  onSubmit = (firstName, lastName, creditCardNumber, typeOfCard) => {
    
    this.setState({
      firstName,
      lastName,
      creditCardNumber,
      typeOfCard, 
    })
  };

  render() {
    console.log('(render) App')

    return (
      
      <div className="App">
        <Component1 onSubmit={this.onSubmit} />
        <Component2
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          creditCardNumber={this.state.creditCardNumber}
          typeOfCard={this.state.typeOfCard}
        />
      </div>
    )
  }
}

export default App