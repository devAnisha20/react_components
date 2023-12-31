import React from 'react'
import {createPortal} from 'react-dom'

function FirstPortal() {
  return (
    createPortal(
    <div>
        <h1>This is the Portal Page</h1>
    </div>,
    document.getElementById('footer')
    )
  )
}

export default FirstPortal