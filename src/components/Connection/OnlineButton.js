import React from 'react'

export default class OnlineButton extends React.Component {

  render() {
    const status = this.props.status

    return status ? <div className='online-button plus'>+</div> : <div className='online-button minus' >-</div>

  //   if ( status ) {
  //     return ( <div className='online-button'>+</div> )
  //   }
  //
  //   return ( <div className='online-button' >-</div> )

  }
}
