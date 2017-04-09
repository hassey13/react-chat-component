import React from 'react'

const Message = ({
  message,
  recipient,
  user
}) => {
    if (  message.recipient === recipient.name && message.sender === user.name ) {
      return ( <li className='message message-self'> { message.content }</li> )
    }
    else if ( message.sender === recipient.name && message.recipient === user.name ) {
      return ( <li className='message message-other'> { message.content }</li> )
    }
  }


export default Message
