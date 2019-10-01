// import React from 'react';
// import UserForm from './components/UserForm';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

// class MyForm extends React.Component {
//     state = {
//         email: '',
//     }
 
//     handleChange = (event) => {
//         const email = event.target.value;
//         this.setState({ email });
//     }
 
//     handleSubmit = () => {
//         // your submit logic
//     }
 
//     render() {
//         const { email } = this.state;
//         return (
//             <ValidatorForm
//                 ref="form"
//                 onSubmit={this.handleSubmit}
//                 onError={errors => console.log(errors)}
//             >
//                 <TextValidator
//                     label="Email"
//                     onChange={this.handleChange}
//                     name="email"
//                     value={email}
//                     validators={['required', 'isEmail']}
//                     errorMessages={['this field is required', 'email is not valid']}
//                 />
//                 <Button type="submit">Submit</Button>
//             </ValidatorForm>
//         );
//     }
// }

