import React from 'react'
import { connect } from 'react-redux'

import OnlineUserList from './OnlineUserList'
import OnlineButton from './OnlineButton'

import { addUser, removeUser } from '../actions/usersActions'

class WhosOnline extends React.Component {

  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  componentDidMount() {
    this.props.socket.on('userOnline', this.props.addUser )
    this.props.socket.on('userOffline', this.props.removeUser )
  }

  handleClick() {
    this.setState( { toggle: !(this.state.toggle) } )
  }

  render() {
    const users = this.props.users
    const status = this.state.toggle

    return (
      <div className="whos-online-container">
        <div className='hover' onClick={ this.handleClick.bind( this ) }><OnlineButton status={status} /></div>
        <OnlineUserList  status={ status } users={ users } />
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    addUser: function( params ){
      let action = addUser( params )
      dispatch( action )
    },
    removeUser: function( params ){
      let action = removeUser( params )
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( WhosOnline )
