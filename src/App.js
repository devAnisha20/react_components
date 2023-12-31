import React from 'react'
import FuncBased from './components/FuncBased'
import ClassBasedComp from './components/ClassBasedComp'
import JavascriptHtml from './components/JavascriptHtml'
import Inlinecss from './components/Inlinecss'
import Internalcss from './components/Internalcss'
import ExternalCss from './components/ExternalCss'
// import FirstPortal from './components/portal/FirstPortal'
// import SecondPortal from './components/portal/SecondPortal'

function App() {
  return (
    <div>
      <FuncBased/>
      <ClassBasedComp/>
      <JavascriptHtml/>
      <Inlinecss/>
      <Internalcss/>
      <ExternalCss/>
      {/* <FirstPortal/> */}
      {/* <SecondPortal/> */}
    </div>
  )
}

export default App