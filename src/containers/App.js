import React, { Component } from 'react'
import { connect } from 'react-redux'

import Heading from '../components/Heading'
import MessagesContainer from '../components/Messaging/MessagesContainer'
import ConnectForm from '../components/Connection/ConnectForm'
import WhosOnline from '../components/Connection/WhosOnline'

import { addUsers } from '../actions/usersActions'
import { addSocketConnection } from '../actions/socketActions'

import '../../public/stylesheets/style.css'

const io = require('socket.io-client')

class App extends Component {

  componentDidMount(){
    const socket = io.connect('http://localhost:4000')
    const token = Math.floor(Math.random() * 1000000000) + 1

    socket.emit('sync', {token: token})

    socket.on('sync', (msg) => {
      if ( msg.token === token ) {
        this.props.addUsers(msg.users)
      }
    })

    this.props.addSocketConnection(socket)
  }

  render() {
    const socket = this.props.socket

    if ( socket === undefined || socket.length === 0 ) {
      return (<div>Connecting...</div>)
    }

    return (
      <div className='App'>
        <Heading />

        < ConnectForm socket={ socket } />

        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>
        <div className="padding"></div>

        <WhosOnline socket={ socket } />

        <MessagesContainer socket={ socket } />

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
    },
    addUsers: function(users) {
      let action = addUsers(users)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App )
