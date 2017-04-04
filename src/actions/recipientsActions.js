const ADD_RECIPIENT = 'ADD_RECIPIENT'
const REMOVE_RECIPIENT = 'REMOVE_RECIPIENT'

export const addRecipient = ( recipient ) => {
  return {
    type: ADD_RECIPIENT,
    payload: recipient
  }
}

export const removeRecipient = ( recipient ) => {
  return {
    type: REMOVE_RECIPIENT,
    payload: recipient
  }
}
