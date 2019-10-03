import React from 'react';
import './App.css';
import { SubmitForm } from './components/SubmitForm'
import FormUserDetails from './components/FormUserDetails';

export class App extends React.Component {

  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '', 
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
}

  onSubmit = () => {
    const values = this.form.getValues()
    const { firstName, lastName, creditCardNumber } = values
    this.setState({
      firstName,
      lastName,
      creditCardNumber,
    })
  }

  render() {
      return (
        
        <div className="App">
            <FormUserDetails ref={ form => this.form = form } onClick={ this.onSubmit }/>
            <SubmitForm  
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            creditCardNumber={this.state.creditCardNumber}/>
        </div>
    )
  }
}
export default App;