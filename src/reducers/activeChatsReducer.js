export default function activeChatsReducer(state=[], action){

  switch (action.type) {

    case 'ADD_ACTIVE_CHAT':
      return [ ...state , action.payload]

    case 'REMOVE_ACTIVE_CHAT':
      let new_state = state.filter( key => ( key.name !== action.payload.name ))
      return new_state

    default:
      return state
  }
}
