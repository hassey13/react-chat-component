export default function messagesReducer(state=[], action){

  switch (action.type) {

    case 'ADD_CONNECTION':
      return action.payload

    default:
      return state
  }
}
