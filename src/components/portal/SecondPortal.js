import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'

export class SecondPortal extends Component {
  render() {
    return (
        ReactDOM.createPortal(
      <div>
        I am rendered in the second portal!
      </div>,
      document.getElementById('other-root')
        )
    )
  }
}

export default SecondPortal