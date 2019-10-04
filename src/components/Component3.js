import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Component3 extends Component {
  state = {
    typeOfCard: '',
  };

  componentDidMount() {
    const { creditCardNumber } = this.props;

    const lastNums = creditCardNumber.slice(12, 16);
    const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card';

    this.setState({ typeOfCard });
  }

  componentDidUpdate = prevProps => {
    const { creditCardNumber, onTypeOfCard } = this.props;
    if (prevProps.creditCardNumber !== creditCardNumber) {
      const lastNums = creditCardNumber.slice(12, 16);
      const typeOfCard = lastNums < 2000 ? 'Visa' : 'Master Card';
      this.setState({
         typeOfCard, 
      })
      this.props.onTypeOfCard(typeOfCard);
    }
  }

  render() {
    if (!this.state.typeOfCard) return null;
    return <div></div>;
  }
}

Component3.defaultProps = {
  creditCardNumber: '0000000000000000',
};

Component3.propTypes = {
  creditCardNumber: PropTypes.string,
  onTypeOfCard: PropTypes.func,
};

export default Component3;
