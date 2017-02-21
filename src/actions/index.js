export function addMessage(message){
  return {
    type: 'ADD_MESSAGE',
    payload: {content: message.content, sender: message.sender}
  }
}

export function addServerConnection(socket){
  return {
    type: 'ADD_SERVER_CONNECTION',
    payload: socket
  }
}
