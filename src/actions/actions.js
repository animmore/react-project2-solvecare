/*eslint-disable*/

export const SET_CREDIT_CARD_NUMBER = 'SET_CREDIT_CARD_NUMBER'
export const SET_EXPIRATION_DATE = 'SET_EXPIRATION_DATE'
export const SET_EXPIRATION_CVV = 'SET_EXPIRATION_CVV'
export const SET_FIRST_NAME = 'SET_FIRST_NAME'
export const SET_LAST_NAME = 'SET_LAST_NAME'
export const SET_SECRET_QUESTION = 'SET_SECRET_QUESTION'
export const SET_SECRET_ANSWER = 'SET_SECRET_ANSWER'

export const setCreditCardNumber = (creditCardNumber) => ({
  type: SET_CREDIT_CARD_NUMBER,
  payload: creditCardNumber,
})

export const setExpirationDate = (expirationDate) => ({
  type: SET_EXPIRATION_DATE,
  payload: expirationDate,
})

export const setCvv = (cvv) => ({
  type: SET_EXPIRATION_CVV,
  payload: cvv,
})

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
})

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
})

export const setSecretQuestion = (secretQuestion) => ({
  type: SET_SECRET_QUESTION,
  payload: secretQuestion,
})

export const setSecretAnswer= (secretAnswer) => ({
  type: SET_SECRET_ANSWER,
  payload: secretAnswer,
})

//validation

// payload, err(or), meta
