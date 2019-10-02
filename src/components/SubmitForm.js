import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List'
import '../App.css';


export class SubmitForm extends Component {
  
    constructor(props){
        super(props); 
        this.state = {
            creditCardNumber: '',
            cvv: '',
            expirationDate: '',
           
            submitFormVisible: false,
        }
     }
     
    render() {
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
                        secondaryText= { this.props.creditCardNumber }
                         />
                    </List> 
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default SubmitForm;
 