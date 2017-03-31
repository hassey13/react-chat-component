import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import socketReducer from './socketReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  socket: socketReducer
})

export default rootReducer
