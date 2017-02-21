export default function(state=[], action){
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload]
    case 'ADD_SERVER_CONNECTION':
      return action.payload
    default:
      return state
  }
}
