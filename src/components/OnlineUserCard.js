import React from 'react'

export default class OnlineUserCard extends React.Component {

  render() {
    const user = this.props.user
    return (
      <div className='user-card'>
        <span className='font'>{ user }</span>
      </div>
    )
  }
}
