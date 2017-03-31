import React, { Component } from 'react'
import { connect } from 'react-redux'

import Messages from './Messages'
import ChatForm from './ChatForm'

import { addServerConnection } from '../actions/socketActions'

import '../../public/stylesheets/style.css'

const io = require('socket.io-client')

class ChatApp extends Component {

  componentWillMount(){
    const socket = io.connect('http://localhost:4000')
    this.props.addServerConnection(socket)
  }

  render() {
    const socket = this.props.socket

    if ( socket === undefined || socket.length === 0 ) {
      return (<div>Connecting...</div>)
    }

    this.props.socket.emit('link', "Ehass" )

    return (
      <div>
        <h1>Chat App!</h1>

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
    addServerConnection: function(socket) {
      let action = addServerConnection(socket)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ChatApp )
