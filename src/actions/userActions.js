const ADD_CURRENT_USER = 'ADD_CURRENT_USER'
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'


export const addCurrentUser = ( params ) => {
  return {
    type: ADD_CURRENT_USER,
    payload: params
  }
}

export const removeCurrentUser = ( params ) => {
  return {
    type: REMOVE_CURRENT_USER,
    payload: params
  }
}
