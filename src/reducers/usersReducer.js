export default function usersReducer(state=[], action){

  switch (action.type) {

    case 'ADD_USER':
      return [ ...state , action.payload]

    case 'REMOVE_USER':
      let new_state = state.filter( key => ( key.name !== action.payload.name ))
      return new_state

    default:
      return state
  }
}
