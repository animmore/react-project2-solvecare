//@flow
import React from 'react'
import './App.css'
import Component1 from './components/Component1'
import { Component2 } from './components/Component2'

type Props = {
  onSubmit: (
    creditCardNumber: string,
    firstName: string,
    lastName: string,
    typeOfCard: string,
  ) => void,

}

type State = {|
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  typeOfCard: string,
  |}

export class App extends React.Component<Props, State> {
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

  onSubmit = (firstName : string, lastName : string, creditCardNumber : string, typeOfCard : string) => {
    
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