export default function socketReducer(state=[], action){

  switch (action.type) {

    case 'ADD_SOCKET_CONNECTION':
      return action.payload

    default:
      return state
  }
}
