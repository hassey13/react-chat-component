export default function messagesReducer(state=[], action){
  switch (action.type) {

    case 'ADD_MESSAGE':
      return [...state, action.payload]

    default:
      return state
  }
}
