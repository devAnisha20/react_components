import React from 'react'
import FuncBased from './components/FuncBased'
import ClassBasedComp from './components/ClassBasedComp'
import JavascriptHtml from './components/JavascriptHtml'
import Inlinecss from './components/Inlinecss'
import Internalcss from './components/Internalcss'
import ExternalCss from './components/ExternalCss'

function App() {
  return (
    <div>
      <FuncBased/>
      <ClassBasedComp/>
      <JavascriptHtml/>
      <Inlinecss/>
      <Internalcss/>
      <ExternalCss/>
    </div>
  )
}

export default App