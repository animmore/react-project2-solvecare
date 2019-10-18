/*eslint-disable*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Component1 from './Component1'
import {
  setCreditCardNumber,
  setExpirationDate,
  setCvv,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
} from '../../actions/actions'

export class ContainerC1 extends Component {
  render() {
    return (
      <Component1
        creditCardNumber={this.props.creditCardNumber}
        setCreditCardNumber={this.props.setCreditCardNumber}
        expirationDate={this.props.expirationDate}
        setExpirationDate={this.props.setExpirationDate}
        cvv={this.props.cvv}
        setCvv={this.props.setCvv}
        firstName={this.props.firstName}
        setFirstName={this.props.setFirstName}
        lastName={this.props.lastName}
        setLastName={this.props.setLastName}
        secretQuestion={this.props.secretQuestion}
        setSecretQuestion={this.props.setSecretQuestion}
        secretAnswer={this.props.secretAnswer}
        setSecretAnswer={this.props.setSecretAnswer}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    expirationDate: state.form.expirationDate,
    cvv: state.form.cvv,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    secretQuestion: state.form.secretQuestion,
    secretAnswer: state.form.secretAnswer,
  }
}
const mapDispatchToProps = {
  setCreditCardNumber,
  setExpirationDate,
  setCvv,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerC1)
