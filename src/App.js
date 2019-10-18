//@flow
/*eslint-disable*/

import React from 'react'
import './App.css'

import ContainerC1 from './components/Component1/ContainerC1'
import ContainerC2 from './components/Component2/ContainerC2'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './configs/rootReducer'
const store = createStore(rootReducer)

type Props = {
  onSubmit: (
    creditCardNumber: string,
    firstName: string,
    lastName: string,
    typeOfCard: string,
  ) => void,
}

type State = {|
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  typeOfCard: string,
|}

export class App extends React.Component<Props, State> {
  render() {
    console.log('(render) App___0')

    return (
      <Provider store={store}>
        <div className="App">
          <ContainerC1 />
          <ContainerC2 />
        </div>
      </Provider>
    )
  }
}

export default App
