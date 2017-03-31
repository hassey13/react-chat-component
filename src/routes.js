import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './App'

import ChatApp from './components/ChatApp'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ ChatApp } />
  </Route>
)
