import { combineReducers } from 'redux'

import connectionReducer from './connectionReducer'
import messagesReducer from './messagesReducer'
import socketReducer from './socketReducer'
import recipientsReducer from './recipientsReducer'
import usersReducer from './usersReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  connection: connectionReducer,
  messages: messagesReducer,
  socket: socketReducer,
  user: userReducer,
  users: usersReducer,
  recipients: recipientsReducer
})

export default rootReducer
