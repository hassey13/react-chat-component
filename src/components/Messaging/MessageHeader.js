import React from 'react'

export default class MessageHeader extends React.Component {

  render() {

    return (
      <div className='message-header active'>
        <div className='message-header-text'>
          { this.props.recipient.name }
        </div>
        <div className='message-header-min hover'>
          -
        </div>
        <div className='message-header-close hover'>
          x
        </div>

      </div>
    )
  }
}
