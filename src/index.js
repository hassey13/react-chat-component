import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducers'

import {addMessage} from './actions/index'

import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware) )

ReactDOM.render( <Provider store={store}>
  <App  />
</Provider>, document.getElementById('container'));
