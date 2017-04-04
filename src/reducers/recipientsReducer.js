export default function recipientReducer(state=[], action){

  switch (action.type) {

    case 'ADD_RECIPIENT':
      return [ ...state , action.payload]

    case 'REMOVE_RECIPIENT':
      let new_state = state.filter( key => ( key.name !== action.payload.name ))
      return new_state

    default:
      return state
  }
}
