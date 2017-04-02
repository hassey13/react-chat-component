import React from 'react'
import { connect } from 'react-redux'

import OnlineUserCard from './OnlineUserCard'
import { addUser, removeUser } from '../actions/usersActions'

class WhosOnline extends React.Component {

  componentDidMount() {
    this.props.socket.on('userOnline', this.props.addUser )
    this.props.socket.on('userOffline', this.props.removeUser )
  }

  render() {
    const users = ["Eric","Alanna"]

    return (
      <div className="whos-online-container">
        <h5>Online</h5>
        <div>
          { users.map( (user, i) => <OnlineUserCard key={ i } user={ user } /> )}
        </div>
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
