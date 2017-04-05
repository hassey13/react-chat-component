const ADD_ACTIVE_CHAT = 'ADD_ACTIVE_CHAT'
const REMOVE_ACTIVE_CHAT = 'REMOVE_ACTIVE_CHAT'

export const addActiveChat = ( recipient ) => {
  return {
    type: ADD_ACTIVE_CHAT,
    payload: recipient
  }
}

export const removeActiveChat = ( recipient ) => {
  return {
    type: REMOVE_ACTIVE_CHAT,
    payload: recipient
  }
}
