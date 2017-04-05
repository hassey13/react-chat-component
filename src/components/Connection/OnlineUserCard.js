import React from 'react'
import { connect } from 'react-redux'

import { addActiveChat } from '../../actions/activeChatsActions'

class OnlineUserCard extends React.Component {

  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  handleClick( user ) {
    this.props.addActiveChat( { name: user.name } )
  }

  handleMouseEnter() {
    this.setState( { toggle: true } )
  }

  handleMouseLeave() {
    this.setState( { toggle: false } )
  }

  render() {
    const user = this.props.user
    let name = `${user.name[0]}${user.name[1]}`
    let customClass = 'online-button letters hover'
    let messageFont = 'message-font invisible'

    if ( this.state.toggle ) {
      name = user.name
      customClass = 'online-button name hover'
      messageFont = 'message-font'
    }

    return (
      <div className={ customClass }
            onMouseEnter={this.handleMouseEnter.bind( this ) }
            onMouseLeave={this.handleMouseLeave.bind( this ) }
            onClick={ this.handleClick.bind( this, user ) } >
        <span className={ messageFont }>Message</span>
        <span>{ name }</span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addActiveChat: function( recipient ){
      let action = addActiveChat( recipient )
      dispatch( action )
    }
  }
}

export default connect( null , mapDispatchToProps )( OnlineUserCard )
