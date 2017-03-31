import React, { Component } from 'react';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className='ui container body-container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}
