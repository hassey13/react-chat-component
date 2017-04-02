const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'

export const addUser = ( params ) => {
  return {
    type: ADD_USER,
    payload: params
  }
}

export const removeUser = ( params ) => {
  return {
    type: REMOVE_USER,
    payload: params 
  }
}
