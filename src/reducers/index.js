import { combineReducers } from 'redux'

import connectionReducer from './connectionReducer'
import messagesReducer from './messagesReducer'
import socketReducer from './socketReducer'

const rootReducer = combineReducers({
  connection: connectionReducer,
  messages: messagesReducer,
  socket: socketReducer
})

export default rootReducer
