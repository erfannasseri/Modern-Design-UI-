import React from 'react'
import { CTA , Brand , Navbar } from './Components'
import { Footer , Header , Possibility , Features , WhatGPT3, Blog  } from './Containers'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App