export default function socketReducer(state=[], action){

  switch (action.type) {

    case 'ADD_SERVER_CONNECTION':
      return action.payload

    default:
      return state
  }
}
