

import React, {Component} from 'react'
import Component3 from './Component3'

import PropTypes, {bool, object, number} from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {FormErrors} from '../FormErrors'
import '../App.css'

type Props = {|
  onClick: (
    creditCardNumber: string,
    expirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
    submitFormVisible: boolean,
  ) => void,

  handleTypeOfCardChange: (typeOfCard: string) => void,
  creditCardNumber: (creditCardNumber: string) => void,
|}

type State = {|
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  submitFormVisible: boolean,
  typeOfCard: string,

  fieldValidationErrors: string, 

  formValid: boolean,
  formErrors: any,
  creditCardNumberValid: boolean,
  cvvValid: boolean,
  expirationDateValid: boolean,
  firstNameValid: boolean,
  lastNameValid: boolean,
  secretQuestionValid: boolean,
  secretAnswerValid: boolean,
|}

const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)

export class Component1 extends Component<Props, State> {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    submitFormVisible: false,
    typeOfCard: '',
   
    formErrors: {
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    },
    fieldValidationErrors: '', 
    formValid: bool,
    creditCardNumberValid: false,
    cvvValid: false,
    expirationDateValid: false,
    firstNameValid: false,
    lastNameValid: false,
    secretQuestionValid: false,
    secretAnswerValid: false,
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.creditCardNumberValid &&
        this.state.cvvValid &&
        this.state.expirationDateValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.secretQuestionValid &&
        this.state.secretAnswerValid,
    })
  }

  handleSubmit = () => {
    const {firstName, lastName, creditCardNumber, typeOfCard} = this.state

    this.props.onSubmit(firstName, lastName, creditCardNumber, typeOfCard)
  
  }

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName: string, value: string) {
    const fieldValidationErrors = this.state.formErrors
    const {creditCardNumberValid} = this.state
    const {cvvValid} = this.state
    const {expirationDateValid} = this.state
    const {firstNameValid} = this.state
    const {lastNameValid} = this.state
    const {secretQuestionValid} = this.state
    const {secretAnswerValid} = this.state

    switch (fieldName) {
      case 'creditCardNumber':
        fieldValidationErrors.creditCardNumberValid = value.match(cardRegex)
          ? ''
          : 'invalid card number'
        break

      case 'cvv':
        fieldValidationErrors.cvvValid = value.match(cvvRegex) ? '' : 'invalid CVV/CVC'
        break
      case 'expirationDate':
        fieldValidationErrors.expirationDateValid = value.match(expRegex) ? '' : 'invalid MM/YY'
        break
      case 'firstName':
        fieldValidationErrors.firstNameValid =
          value.length < 3 ? 'minimum 3 characaters required' : ''
        break
      case 'lastName':
        fieldValidationErrors.lastNameValid =
          value.length < 2 ? 'minimum 3 characaters required' : ''
        break
      case 'secretQuestion':
        fieldValidationErrors.secretQuestionValid =
          value.length < 9 ? 'minimum 10 characaters required' : ''
        break
      case 'secretAnswer':
        fieldValidationErrors.secretAnswerValid =
          value.length < 3 ? 'minimum 4 characaters required' : ''
        break

      default:
        break
    }

    this.setState({fieldValidationErrors, [fieldName]: value}, () => console.log(this.state))
  }

  handleTypeOfCardChange = (typeOfCard: string) => {
    this.setState({typeOfCard})
  }

  render() {
    console.log('(render) Component1')
    const {fieldValidationErrors, creditCardNumber} = this.state

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Yours Data" />
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>

          <TextField
            className={`${this.state.formErrors.creditCardNumber}`}
            hintText={'0000 0000 0000 0000'}
            floatingLabelText="Enter your credit card number"
            defaultValue={this.state.creditCardNumber}
            name="creditCardNumber"
            onChange={this.handleInputChange}
          />
          <br />

          <div className="container">
            <TextField
              className={`field ${this.state.formErrors.cvv}`}
              hintText={'CVV/CVC'}
              floatingLabelText="Enter your cvv"
              defaultValue={this.state.cvv}
              name="cvv"
              onChange={this.handleInputChange}
            />
            <br />

            <TextField
              className={`field ${this.state.formErrors.expirationDate}`}
              hintText={'MM/YY'}
              floatingLabelText="Enter your Expiration Date"
              defaultValue={this.state.expirationDate}
              name="expirationDate"
              onChange={this.handleInputChange}
            />
          </div>
          <br />

          <div className="container">
            <TextField
              className={`field ${this.state.formErrors.firstName}`}
              hintText={'Your Name'}
              floatingLabelText="Enter your First Name"
              defaultValue={this.state.firstName}
              name={'firstName'}
              onChange={this.handleInputChange}
            />
            <br />

            <TextField
              className={`field ${this.state.formErrors.lastName}`}
              hintText={'Your Surname'}
              floatingLabelText="Enter your Last Name"
              defaultValue={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
            />
          </div>
          <br />

          <TextField
            className={`${this.state.formErrors.secretQuestion}`}
            hintText={'Your secret question'}
            floatingLabelText="Enter your Secret Question"
            defaultValue={this.state.secretQuestion}
            name="secretQuestion"
            onChange={this.handleInputChange}
          />
          <br />

          <TextField
            className={`${this.state.formErrors.secretAnswer}`}
            hintText={'Your secret answer'}
            floatingLabelText="Enter your Secret Answer"
            defaultValue={this.state.secretAnswer}
            name="secretAnswer"
            onChange={this.handleInputChange}
          />

          <br />
          <RaisedButton label="Submit" primary onClick={this.handleSubmit} />
          <br />

          <div>
            <Component3
              onTypeOfCard={this.handleTypeOfCardChange}
              creditCardNumber={this.state.creditCardNumber}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Component1
