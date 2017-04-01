const ADD_SOCKET_CONNECTION = 'ADD_SOCKET_CONNECTION'

export const addSocketConnection = (socket) => {
  return {
    type: ADD_SOCKET_CONNECTION,
    payload: socket
  }
}
