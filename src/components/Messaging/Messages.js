import React from 'react'
import { connect } from 'react-redux'

class Messages extends React.Component {

  render() {
    const user = this.props.user
    const recipient = this.props.recipient
    const messages = this.props.messages

    return (
      <div >
        <ul className='message-box'>
          { messages.map(( message, i ) => {
              if ( message.recipient === recipient.name && message.sender === user.name ) {
                return <li key={ i } className='message message-self'> { message.content }</li>
              }
              else if ( message.sender === recipient.name && message.recipient === user.name ) {
                return <li key={ i } className='message message-other'> { message.content }</li>
              }
            })
          }
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
