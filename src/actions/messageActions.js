// import { searchAdapter } from '../adapters/searchAdapter'

const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: message
  }
}
