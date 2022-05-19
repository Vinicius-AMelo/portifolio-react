import React from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Content />
      </BrowserRouter>
    </div>
  )
}

export default App