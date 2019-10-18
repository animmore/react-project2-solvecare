/*eslint-disable*/

import React, {Component} from 'react'
import Component3 from '../Component3/Component3'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {FormErrors} from '../../FormErrors'

type Props = {}

type State = {}

const cardRegex = RegExp(/^[0-9]{16}$/)
const cvvRegex = RegExp(/^[0-9]{3,4}$/)
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)

import {
  setCreditCardNumber,
  setExpirationDate,
  setCvv,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
} from '../../actions/actions'

export class Component1 extends React.Component<Props, State> {
  static whyDidYouRender = true

  constructor() {
    super()

    this.onChangeCreditCardNumber = this.onChangeCreditCardNumber.bind(this)
    this.onChangeCvv = this.onChangeCvv.bind(this)
    this.onChangeExpirationDate = this.onChangeExpirationDate.bind(this)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeSecretQuestion = this.onChangeSecretQuestion.bind(this)
    this.onChangeSecretAnswer = this.onChangeSecretAnswer.bind(this)
  }

  onChangeCreditCardNumber(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setCreditCardNumber(event.currentTarget.value)
  }
  onChangeCvv(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setCvv(event.currentTarget.value)
  }
  onChangeExpirationDate(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setExpirationDate(event.currentTarget.value)
  }
  onChangeFirstName(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setFirstName(event.currentTarget.value)
  }
  onChangeLastName(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setLastName(event.currentTarget.value)
  }

  onChangeSecretQuestion(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretQuestion(event.currentTarget.value)
  }
  onChangeSecretAnswer(event: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretAnswer(event.currentTarget.value)
  }

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value})
  }

  handleTypeOfCardChange = (typeOfCard: string) => {
    this.setState({typeOfCard})
  }

  render() {
    console.log('(render) Component1')

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Yours Data" />

          <TextField
            hintText={'0000 0000 0000 0000'}
            floatingLabelText="Enter your credit card number"
            name="creditCardNumber"
            onChange={this.onChangeCreditCardNumber}
            value={this.props.creditCardNumber}
          />
          <br />

          <div className="container">
            <TextField
              hintText={'CVV/CVC'}
              floatingLabelText="Enter your cvv"
              name="cvv"
              onChange={this.onChangeCvv}
              value={this.props.cvv}
            />
            <br />

            <TextField
              hintText={'MM/YY'}
              floatingLabelText="Enter your Expiration Date"
              name="expirationDate"
              onChange={this.onChangeExpirationDate}
              value={this.props.expirationDate}
            />
          </div>
          <br />

          <div className="container">
            <TextField
              hintText={'Your Name'}
              floatingLabelText="Enter your First Name"
              name={'firstName'}
              onChange={this.onChangeFirstName}
              value={this.props.firstName}
            />
            <br />

            <TextField
              hintText={'Your Surname'}
              floatingLabelText="Enter your Last Name"
              name="lastName"
              onChange={this.onChangeLastName}
              value={this.props.lastName}
            />
          </div>
          <br />

          <TextField
            hintText={'Your secret question'}
            floatingLabelText="Enter your Secret Question"
            name="secretQuestion"
            onChange={this.onChangeSecretQuestion}
            value={this.props.secretQuestion}
          />
          <br />

          <TextField
            hintText={'Your secret answer'}
            floatingLabelText="Enter your Secret Answer"
            name="secretAnswer"
            onChange={this.onChangeSecretAnswer}
            value={this.props.secretAnswer}
          />

          <br />
          <RaisedButton label="Submit" primary />
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Component1
