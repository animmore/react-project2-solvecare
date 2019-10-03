import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List'
import '../App.css';

export class SubmitForm extends Component {
  
    constructor(props){
        super(props); 
        this.state = {
            isFormVisible: false,
            timerID: '',
            startAt: '',
        }
    }

    startTimer = () => {
        const timerID = setTimeout(() => {
          this.setState({
            isFormVisible: false,
            timerID: false,
            startAt: '',
          })
        }, 5000)
    
        this.setState({
          isFormVisible: true,
          timerID,
          startAt: Date.now(),
        })
      }

      componentDidUpdate(prevProps) {
        if (
          prevProps.firstName === this.props.firstName &&
          prevProps.lastName === this.props.lastName &&
          prevProps.creditCardNumber === this.props.creditCardNumber
        ) {
          return
        }
    
        if (!this.state.visible) {
          return this.startTimer()
        }
    
        const timerID = this.state.timerID
        clearTimeout(timerID)
        this.startTimer()
      }
  
     
    render() {
        const {firstName, lastName, creditCardNumber} = this.props;
        const {isFormVisible} = this.state;
        if (!isFormVisible || (!firstName && !lastName && !creditCardNumber)) {
            return null
            }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                   <List className='my-list'>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText= { this.props.firstName }
                        />
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText= { this.props.lastName }
                        />
                        <ListItem 
                        primaryText="Credit Card"
                        secondaryText= { this.props.creditCardNumber.slice(12,16) }
                         />
                    </List> 
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default SubmitForm;
 