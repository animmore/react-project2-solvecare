import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { FormErrors } from '../FormErrors'
import PropTypes from 'prop-types';
import '../App.css';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);

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
                submitFormVisible: false,

                formErrors: {
                    creditCardNumber: '',
                    cvv: '',
                    expirationDate: '',
                    firstName: '', 
                    lastName: '',
                    secretQuestion: '',
                    secretAnswer: '',
                },
                    creditCardNumberValid: false,
                    cvvValid: false,
                    expirationDateValid: false,
                    firstNameValid: false, 
                    lastNameValid: false,
                    secretQuestionValid: false,
                    secretAnswerValid: false,
            }
         }
            
         validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let creditCardNumberValid = this.state.creditCardNumberValid;
            let cvvValid = this.state.cvvValid;
            let expirationDateValid = this.state.expirationDateValid;
            let firstNameValid = this.state.firstNameValid;
            let lastNameValid = this.state.lastNameValid;
            let secretQuestionValid = this.state.secretQuestionValid;
            let secretAnswerValid = this.state.secretAnswerValid;

            switch (fieldName) {

                case "creditCardNumber":
                    fieldValidationErrors.creditCardNumberValid = value.match(cardRegex)
                       ? ""
                       : "invalid card number";
                     break;

                  case "cvv":
                    fieldValidationErrors.cvvValid = value.match(cvvRegex)
                      ? ""
                      : "invalid CVV/CVC";
                    break;
                  case "expirationDate":
                    fieldValidationErrors.expirationDateValid =  value.match(expRegex)
                      ? ""
                      : "invalid MM/YY";
                    break;
                case "firstName":
                    fieldValidationErrors.firstNameValid =
                    value.length < 2 ? "minimum 3 characaters required" : "";
                  break;
                case "lastName":
                    fieldValidationErrors.lastNameValid =
                    value.length < 2 ? "minimum 3 characaters required" : "";
                  break;
                case "secretQuestion":
                    fieldValidationErrors.secretQuestionValid =
                    value.length < 9 ? "minimum 10 characaters required" : "";
                  break;
                case "secretAnswer":
                    fieldValidationErrors.secretAnswerValid =
                    value.length < 3 ? "minimum 4 characaters required" : "";
                  break;
               
                default:
                  break;
              }

              this.setState({ fieldValidationErrors, [fieldName]: value }, () => console.log(this.state));
        }
        
        validateForm() {
            this.setState({formValid: this.state.creditCardNumberValid && this.state.cvvValid 
            && this.state.expirationDateValid && this.state.firstNameValid 
            && this.state.lastNameValid && this.state.secretQuestionValid 
            && this.state.secretAnswerValid });
            }
        
          errorClass(error) {
            return(error.length === 0 ? '' : 'has-error');
          }
        
        getValues = () => {
        const { firstName, lastName, creditCardNumber } = this.state
        return {
            firstName, 
            lastName,
            creditCardNumber
        }
    }

    onSubmit = () => {
        const { firstName, lastName, creditCardNumber } = this.state
        const { enteredData } = this.props
        enteredData(firstName, lastName, creditCardNumber)
    }

    onInputChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
        
    }    
        
    render() {
        const { fieldValidationErrors } = this.state;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter Yours Data" />
                   <div>
                    <FormErrors formErrors={this.state.formErrors} />
                   </div>
                   
                    <TextField className={`${this.state.formErrors.creditCardNumber}`} 
                        hintText = {this.props.creditCardNumber}             
                        floatingLabelText = 'Enter your credit card number'     
                        defaultValue = {this.state.creditCardNumber}
                        name={ 'creditCardNumber' }
                        onChange={ this.onInputChange }
                    />
                        <br/>

                    <div className='container'>
                        <TextField  className={`field ${this.state.formErrors.cvv}`}
                            hintText =  {this.props.cvv}           
                            floatingLabelText = 'Enter your cvv'           
                            defaultValue = {this.state.cvv}
                            name={ 'cvv' }
                            onChange={ this.onInputChange }
                        />  
                        <br/>

                        <TextField className={`field ${this.state.formErrors.expirationDate}`}
                            hintText =  {this.props.expirationDate}          
                            floatingLabelText = 'Enter your Expiration Date'                   
                            defaultValue = {this.state.expirationDate}
                            name={ 'expirationDate' }
                            onChange={ this.onInputChange }
                        />
                    </div>
                        <br/>

                    <div className='container'>
                        <TextField className={`field ${this.state.formErrors.firstName}`}
                            hintText =  {this.props.firstName}       
                            floatingLabelText = 'Enter your First Name'                   
                            defaultValue = {this.state.firstName}
                            name={ 'firstName' }
                            onChange={ this.onInputChange }                            
                        />       
                        <br/> 

                        <TextField className={`field ${this.state.formErrors.lastName}`}
                            hintText =  {this.props.lastName}       
                            floatingLabelText = 'Enter your Last Name'                    
                            defaultValue = {this.state.lastName}
                            name={ 'lastName' }
                            onChange={ this.onInputChange }
                        /> 
                    </div>
                        <br/>

                    <TextField className={`${this.state.formErrors.secretQuestion}`}
                        hintText =  {this.props.secretQuestion}       
                        floatingLabelText = 'Enter your Secret Question'                    
                        defaultValue = {this.state.secretQuestion}
                        name={ 'secretQuestion' }
                        onChange={ this.onInputChange }
                    />
                        <br/>
                    
                    <TextField className={`${this.state.formErrors.secretAnswer}`}
                        hintText =  {this.props.secretAnswer}  
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
FormUserDetails.propTypes = {
    creditCardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
    cvv: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    secretQuestion: PropTypes.string,
    secretAnswer: PropTypes.string,
  }

   FormUserDetails.defaultProps = {
    creditCardNumber: '0000 0000 0000 0000',
    expirationDate: 'MM/YY',
    cvv: 'CVV/CVC',
    firstName: 'Your Name',
    lastName: 'Your Surname',
    secretQuestion: 'Your secret question',
    secretAnswer: 'Your secret answer',
  }

export default FormUserDetails;
