import React from 'react'
import { connect } from 'react-redux'
import { addConnection } from '../actions/index'

class ConnectForm extends React.Component {

  constructor(){
    super()
    this.state = {name: '', connected: false}
  }

  componentDidMount() {
    this.props.socket.on('userOnline', function() {
      console.log('connected')
    })

    this.props.socket.on('userOffline', function() {
      console.log('disconnected')
    })
  }

  componentWillUnmount() {
    if ( this.state.connected) {
      this.props.socket.emit('userOffline', { name: this.state.name } )
      this.setState( { connected: false } )
    }
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
  }

  handleClick(){
    this.props.socket.emit('userOffline', this.state )
    this.setState( { connected: false } )
  }

  render() {

    if (this.state.connected) {
      return (
        <div>
          <h2>Connected as { this.state.name }</h2>
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

function mapStateToProps (state){
  return {
    connection: state.connection
  }
}

function mapDispatchToProps(dispatch){
  return {
    addConnection: function(message){
      let action = addConnection(message)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ConnectForm )
