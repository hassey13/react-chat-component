export default function userReducer(state=[], action){

  switch (action.type) {

    case 'ADD_CURRENT_USER':
      return action.payload

    case 'REMOVE_CURRENT_USER':
      return []

    default:
      return state
  }
}
