const ADD_CONNECTION = 'ADD_CONNECTION'

export const addConnection = (socket) => {
  return {
    type: ADD_CONNECTION,
    payload: socket
  }
}
