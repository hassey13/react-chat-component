import React from 'react'

export default class MessageHeader extends React.Component {

  render() {

    return (
      <div className='message-header active'>
        { this.props.recipient.name }
      </div>
    )
  }
}
