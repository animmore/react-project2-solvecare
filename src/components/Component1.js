// @flow

import React, {Component} from 'react'
import Component3 from './Component3'

import PropTypes, {bool, object, number, any} from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {FormErrors} from '../FormErrors'
import '../App.css'

type Props = {|
  onSubmit: (
    creditCardNumber: string,
    firstName: string,
    lastName: string,
    typeOfCard: string,
  ) => void,
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

  fieldValidationErrors: object,

  formValid: any,
  formErrors: object,
|}

const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)

export class Component1 extends React.PureComponent<Props, State> {
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

    formValid: object,
    fieldValidationErrors: '',
    formErrors: {
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    },
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.formErrors.creditCardNumber &&
        this.state.formErrors.cvv &&
        this.state.formErrors.expirationDate &&
        this.state.formErrors.firstName &&
        this.state.formErrors.lastName &&
        this.state.formErrors.secretQuestion &&
        this.state.formErrors.secretAnswer,
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
    const {creditCardNumber} = this.state
    const {cvv} = this.state
    const {expirationDate} = this.state
    const {firstName} = this.state
    const {lastName} = this.state
    const {secretQuestion} = this.state
    const {secretAnswer} = this.state

    switch (fieldName) {
      case 'creditCardNumber':
        fieldValidationErrors.creditCardNumber = value.match(cardRegex) ? '' : 'invalid card number'
        break

      case 'cvv':
        fieldValidationErrors.cvv = value.match(cvvRegex) ? '' : 'invalid CVV/CVC'
        break
      case 'expirationDate':
        fieldValidationErrors.expirationDate = value.match(expRegex) ? '' : 'invalid MM/YY'
        break
      case 'firstName':
        fieldValidationErrors.firstName = value.length < 3 ? 'minimum 3 characaters required' : ''
        break
      case 'lastName':
        fieldValidationErrors.lastName = value.length < 2 ? 'minimum 3 characaters required' : ''
        break
      case 'secretQuestion':
        fieldValidationErrors.secretQuestion =
          value.length < 9 ? 'minimum 10 characaters required' : ''
        break
      case 'secretAnswer':
        fieldValidationErrors.secretAnswer =
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
