import React from 'react'
import { connect } from 'react-redux'
import { addMessage, addServerConnection } from '../actions'

const io = require('socket.io-client')
const socket = io()

class Messages extends React.Component {
  constructor() {
    super()
    this.messageRecieve = this.messageRecieve.bind(this)
  }

  componentDidMount(){
    this.props.addServerConnection(socket)

    socket.on('chat message', this.messageRecieve)

    // socket.on('user:left', this._userLeft);
    // socket.on('change:name', this._userChangedName);

  }

  messageRecieve( message ) {
    this.props.addMessage( message )
  }

  render() {
    const messages = this.props.messages
    return (
      <div className="message-box">
        <ul>
          { messages.map(( message, i ) => <li key={ i } className={ message.sender }>{ message.content }</li> ) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    messages: state.messages
    // socket: state.socket
  }
}

function mapDispatchToProps(dispatch){
  return {
    addMessage: function(message){
      let action = addMessage(message)
      dispatch( action )
    },
    addServerConnection: function(socket) {
      let action = addServerConnection(socket)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Messages )
