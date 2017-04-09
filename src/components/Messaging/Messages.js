import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'

class Messages extends React.Component {

  render() {
    const user = this.props.user
    const recipient = this.props.recipient
    const messages = this.props.messages

    return (
      <div >
        <ul className='message-box'>
          { messages.map(( message, i ) => <Message key={ i } user={ user } recipient={ recipient } message={ message } /> ) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    messages: state.messages
  }
}

export default connect( mapStateToProps, null )( Messages )
