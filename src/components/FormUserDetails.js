import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export class FormUserDetails extends Component {

         constructor(props){
            super(props); 

            this.state = {
                creditCardNumber: '',
                cvv: '',
                expirationDate: '',
                firstName: '', 
                lastName: '',
                secretQuestion: '',
                secretAnswer: '',
            }
         }

    getValues = () => {
        const { firstName, lastName, creditCardNumber } = this.state

        return {
            firstName, 
            lastName,
            creditCardNumber
        }
    }

    onInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    onSubmit = () => {
        const { firstName, lastName, creditCardNumber } = this.state
        const { enteredData } = this.props
        enteredData(firstName, lastName, creditCardNumber)
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter Yours Data" />
                   
                    <TextField 
                        hintText =  'Number of credit card'
                        floatingLabelText = 'Enter your Credit Card Number'                   
                        defaultValue = {this.state.creditCardNumber}
                        name={ 'creditCardNumber' }
                        onChange={ this.onInputChange }
                    />
                        <br/>
                      <div className='container'>
                    <TextField className='field'
                        hintText =  'Cvv code'
                        floatingLabelText = 'Enter your Cvv'                    
                        defaultValue = {this.state.cvv}
                        name={ 'cvv' }
                        onChange={ this.onInputChange }
                    />         
                    <br/>
                    <TextField 
                        hintText =  'Expiration Date'
                        floatingLabelText = 'Enter your Expiration Date'                   
                        defaultValue = {this.state.expirationDate}
                        name={ 'expirationDate' }
                        onChange={ this.onInputChange }
                    />
                    </div>
                    <br/>
                    <div className='container'>
                    <TextField className='field'
                        hintText =  'First Name'
                        floatingLabelText = 'Enter your First Name'                   
                        defaultValue = {this.state.firstName}
                        name={ 'firstName' }
                        onChange={ this.onInputChange }
                    />
                    <br/>
                    <TextField 
                        hintText =  'Last Name'
                        floatingLabelText = 'Enter your Last Name'                    
                        defaultValue = {this.state.lastName}
                        name={ 'lastName' }
                        onChange={ this.onInputChange }
                    /> 
                    </div>
                    <br/>
                    <TextField 
                        hintText =  'Secret Question'
                        floatingLabelText = 'Enter your Secret Question'                    
                        defaultValue = {this.state.secretQuestion}
                        name={ 'secretQuestion' }
                        onChange={ this.onInputChange }
                    />
                    <br/>
                    <TextField 
                        hintText =  'Secret Answer'
                        floatingLabelText = 'Enter your Secret Answer'
                        defaultValue = {this.state.secretAnswer}
                        name={ 'secretAnswer' }
                        onChange={ this.onInputChange }
                    />
                    <br/> 
                    <RaisedButton 
                        label='Submit'
                        primary={true}
                        onClick={ this.props.onClick }     
                    />        
                    <br/> 
                </React.Fragment>
            </MuiThemeProvider>
        )

    }
}

export default FormUserDetails;
