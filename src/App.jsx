import React from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import { HashRouter } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Nav />
        <Content />
      </HashRouter>
    </div>
  )
}

export default App