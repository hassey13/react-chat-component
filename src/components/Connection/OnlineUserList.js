import React from 'react'

import OnlineUserCard from './OnlineUserCard'

export default class OnlineUserList extends React.Component {

  render() {
    const users = this.props.users
    const status = this.props.status

    if ( status ) return (<div></div>)

    return (
      <div>
        { users.map( (user, i) => <OnlineUserCard key={ i } user={ user } /> )}
      </div>
    )
  }
}
