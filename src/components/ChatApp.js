import React, { Component } from 'react'
import { connect } from 'react-redux'

import Messages from './Messages'
import ChatForm from './ChatForm'
import ConnectForm from './ConnectForm'

import { addSocketConnection } from '../actions/socketActions'

import '../../public/stylesheets/style.css'

const io = require('socket.io-client')

class ChatApp extends Component {

  componentWillMount(){
    const socket = io.connect('http://localhost:4000')
    this.props.addSocketConnection(socket)
  }

  render() {
    const socket = this.props.socket

    if ( socket === undefined || socket.length === 0 ) {
      return (<div>Connecting...</div>)
    }

    return (
      <div>
        <h1>Welcome to Chat App!</h1>
        <br/>
        < ConnectForm socket={ socket } />

        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>

        <div className="chat-box">
          < Messages socket={ socket } />
          < ChatForm socket={ socket } />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    socket: state.socket
  }
}

function mapDispatchToProps(dispatch){
  return {
    addSocketConnection: function(socket) {
      let action = addSocketConnection(socket)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ChatApp )
