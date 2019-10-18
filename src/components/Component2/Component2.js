//@flow

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'

import {number} from 'prop-types'

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  typeOfCard: string,
}

type State = {
  isFormVisible: boolean,
  timerID: boolean,
  startAt: number,
}

export class Component2 extends Component<Props, State> {
  state = {
    isFormVisible: false,
    timerID: false,
    startAt: number,
  }

  startTimer = () => {
    const timerID = setTimeout(() => {
      this.setState({
        isFormVisible: false,
        timerID: false,
        startAt: number,
      })
    }, 5000)

    this.setState({
      isFormVisible: true,
      timerID: true,
      startAt: Date.now(),
    })
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.creditCardNumber === this.props.creditCardNumber
    ) {
      return
    }

    if (!this.state.isFormVisible) {
      return this.startTimer()
    }

    const {timerID} = this.state
    this.startTimer()
  }

  render() {
    console.log('(render) Component2')
    const {firstName, lastName, creditCardNumber, typeOfCard} = this.props
    const {isFormVisible} = this.state
    if (!isFormVisible || (!firstName && !lastName && !creditCardNumber)) {
      return null
    }

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <List className="my-list">
            <ListItem primaryText="First Name" secondaryText={this.props.firstName} />
            <ListItem primaryText="Last Name" secondaryText={this.props.lastName} />
            <ListItem
              primaryText="Credit Card"
              secondaryText={this.props.creditCardNumber.slice(12, 16)}
            />
            <ListItem
              className="typeOfCard"
              primaryText="Type of Card"
              secondaryText={typeOfCard}
            />
          </List>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Component2
