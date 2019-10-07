
//@flow

import React, {Component} from 'react'
import PropTypes, {number, any} from 'prop-types'
import {List, ListItem} from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

type Props = {
  creditCardNumber: any,
  onTypeOfCard: (v1: string) => void,
}

type State = {
  typeOfCard: string,
}

export class Component3 extends React.PureComponent<Props, State> {

  static whyDidYouRender = true

  state = {
    typeOfCard: '',
  }

  componentDidMount() {
    const {creditCardNumber} = this.props

    const lastNums = creditCardNumber.slice(12, 16)
    const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card'

    this.setState({typeOfCard})
  }

  componentDidUpdate = (prevProps: Props) => {
    const {creditCardNumber, onTypeOfCard} = this.props
    if (prevProps.creditCardNumber !== creditCardNumber) {
      const lastNums = creditCardNumber.slice(12, 16)
      const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card'

      this.setState({
        typeOfCard,
      })

      this.props.onTypeOfCard(typeOfCard)
    }
  }

  render() {
    console.log('(render) Component3')
    if (!this.state.typeOfCard) {
      return null
    }

    return <div />
  }
}

Component3.propTypes = {
  creditCardNumber: PropTypes.string,
  onTypeOfCard: PropTypes.func,
}

export default Component3
