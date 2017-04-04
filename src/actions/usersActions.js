const ADD_USERS = 'ADD_USERS'

const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'

export const addUsers = ( params ) => {
  return {
    type: ADD_USERS,
    payload: params
  }
}

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
