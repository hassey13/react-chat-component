import React from 'react'
import { connect } from 'react-redux'

import IndividualMessageContainer from './IndividualMessageContainer'

import { addMessage } from '../actions/messageActions'

class MessagesContainer extends React.Component {

  constructor() {
    super()
    this.messageRecieve = this.messageRecieve.bind(this)
  }

  componentDidMount(){
    this.props.socket.on('chat message', this.messageRecieve )
  }

  messageRecieve( message ) {
    if ( message.recipient === this.props.user.name ) {
      this.props.addMessage( message )
    }
  }

  render() {
    const socket = this.props.socket
    const user = this.props.user
    const recipients = this.props.recipients

    return (
      <div className="all-message-container">
        { recipients.map(( recipient, i ) => <IndividualMessageContainer key={ i } recipient={ recipient } user={ user } socket={ socket } /> ) }
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    users: state.users,
    recipients: state.recipients,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    addMessage: function(message){
      let action = addMessage(message)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( MessagesContainer )
