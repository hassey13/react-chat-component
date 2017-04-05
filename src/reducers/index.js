import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import socketReducer from './socketReducer'
import activeChatsReducer from './activeChatsReducer'
import usersReducer from './usersReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  socket: socketReducer,
  user: userReducer,
  users: usersReducer,
  activeChats: activeChatsReducer
})

export default rootReducer
