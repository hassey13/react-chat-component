import React from 'react'
import { connect } from 'react-redux'

import MessageHeader from './MessageHeader'
import Messages from './Messages'
import ChatForm from './ChatForm'

class MessagesContainer extends React.Component {

  render() {
    const socket = this.props.socket
    const recipient = this.props.recipient
    const user = this.props.user

    if ( user === undefined || user.length === 0 ) {
      return (<div></div>)
    }

    return (
        <div className="message-container">
          <MessageHeader recipient={ recipient } />
          <Messages recipient={ recipient } user={ user } socket={ socket } />
          <ChatForm socket={ socket } user={ user } recipient={ recipient } />
        </div>
    )
  }
}

export default connect( null, null )( MessagesContainer )
