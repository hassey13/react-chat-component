// import { searchAdapter } from '../adapters/searchAdapter'

const ADD_SERVER_CONNECTION = 'ADD_SERVER_CONNECTION'

export const addServerConnection = (socket) => {
  return {
    type: ADD_SERVER_CONNECTION,
    payload: socket
  }
}
