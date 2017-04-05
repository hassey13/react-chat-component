import React from 'react'
import { connect } from 'react-redux'

import { addCurrentUser, removeCurrentUser } from '../actions/userActions'

class ConnectForm extends React.Component {

  constructor(){
    super()
    this.state = { name: '', connected: false }
  }

  componentWillMount() {
    window.addEventListener("beforeunload", (event) => {
      if ( this.state.connected) {
        this.props.socket.emit('userOffline', this.state )
      }
    })
  }

  handleInputChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.socket.emit('userOnline', this.state )
    this.setState( { connected: true } )
    this.props.addCurrentUser( { name: this.state.name } )
  }

  handleClick(){
    this.props.socket.emit('userOffline', this.state )
    this.setState( { connected: false } )
    this.props.removeCurrentUser( { name: this.state.name } )
  }

  render() {

    if ( this.state.connected ) {
      return (
        <div className="connection-box">
          <h3>Connected as { this.state.name }</h3>
          <button onClick={ this.handleClick.bind( this ) }>Disconnect</button>
        </div>
      )
    }

    return (
      <div className="connection-box">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <label type='text'>Name: </label>
          <input type='text' onChange={ this.handleInputChange.bind(this) } value={ this.state.name } />
          <button type='submit'>Connect</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addCurrentUser: function(user){
      let action = addCurrentUser(user)
      dispatch( action )
    },
    removeCurrentUser: function(user){
      let action = removeCurrentUser(user)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( ConnectForm )
