import React from 'react'
import { connect } from 'react-redux'
import {addMessage} from '../actions/index'

class ChatForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {content: '', sender: 'message-self'}
  }

  handleInputChange(event){
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.socket.emit('chat message', this.state )
    this.setState({content: '', sender: 'name-here'})
  }

  render() {
    return (
      <div className="input-box">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleInputChange.bind(this)} value={this.state.content} />
          <button type='submit'>Send</button>
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
