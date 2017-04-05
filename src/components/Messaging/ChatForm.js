import React from 'react'
import { connect } from 'react-redux'

import { addMessage } from '../actions/messageActions'

class ChatForm extends React.Component {
  constructor(){
    super()

    this.state = {
      content: '',
    }
  }

  handleInputChange( event ){
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit( event ){
    event.preventDefault()
    this.props.socket.emit( 'chat message' , { sender: this.props.user.name, recipient: this.props.recipient.name, content: this.state.content } )
    this.props.addMessage( { sender: this.props.user.name, recipient: this.props.recipient.name, content: this.state.content } )
    this.setState( { content: '' } )
  }

  render() {
    return (
      <div className="input-box">
        <form onSubmit={ this.handleSubmit.bind( this ) }>
          <input type='text' onChange={ this.handleInputChange.bind( this ) } placeholder={ 'Type a message...' } value={ this.state.content } />
        </form>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return {
    addMessage: function(message){
      let action = addMessage(message)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ChatForm )
