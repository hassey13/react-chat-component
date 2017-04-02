import { combineReducers } from 'redux'

import connectionReducer from './connectionReducer'
import messagesReducer from './messagesReducer'
import socketReducer from './socketReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  connection: connectionReducer,
  messages: messagesReducer,
  socket: socketReducer,
  users: usersReducer
})

export default rootReducer
