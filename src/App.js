import React from 'react'
import FuncBased from './components/FuncBased'
import ClassBasedComp from './components/ClassBasedComp'
import JavascriptHtml from './components/JavascriptHtml'
import Inlinecss from './components/Inlinecss'

function App() {
  return (
    <div>
      <FuncBased/>
      <ClassBasedComp/>
      <JavascriptHtml/>
      <Inlinecss/>
    </div>
  )
}

export default App