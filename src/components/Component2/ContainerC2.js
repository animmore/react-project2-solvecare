/*eslint-disable*/
import React, {Component} from 'react'
import Component2 from './Component2';
import { connect } from 'react-redux';

export class ContainerC2 extends Component {
  render() {
    return (
      <Component2
        creditCardNumber={this.props.creditCardNumber}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
  }
}

export default connect(mapStateToProps)(ContainerC2);

