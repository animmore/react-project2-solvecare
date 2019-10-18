import {
  SET_CREDIT_CARD_NUMBER,

  SET_EXPIRATION_CVV,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_SECRET_QUESTION,
  SET_SECRET_ANSWER,
} from '../actions/actions'

const initialValue = {
  creditCardNumber: '',
  expirationDate: '',
  cvv: '',
  firstName: '',
  lastName: '',
  secretQuestion: '',
  secretAnswer: '',
}

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_CREDIT_CARD_NUMBER':
      return {...state, creditCardNumber: action.payload}
    case 'SET_EXPIRATION_DATE':
      return {...state, expirationDate: action.payload}
    case 'SET_EXPIRATION_CVV':
      return {...state, cvv: action.payload}
    case 'SET_FIRST_NAME':
      return {...state, firstName: action.payload}
    case 'SET_LAST_NAME':
      return {...state, lastName: action.payload}
    case 'SET_SECRET_QUESTION':
      return {...state, secretQuestion: action.payload}
    case 'SET_SECRET_ANSWER':
      return {...state, secretAnswer: action.payload}
  }

  return state
}
