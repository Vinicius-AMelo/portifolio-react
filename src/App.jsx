import React, { useState } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import { HashRouter } from 'react-router-dom'

import Fundo from './images/fundo.png'
import Foto from './images/react-js.png'

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 4000)
  return (
    <div className='App'>
      <HashRouter>
        {!loading && <Nav />}
        {loading && <div className='fundo'>
          <img className='sharin' src={Fundo} alt="" />
          <div className='eye'></div>
          <img className='mange' src={Foto} alt="foto" />
          <img className='kyo' src={Foto} alt="foto" />
        </div>}
        {!loading && <Content />}
      </HashRouter>
    </div>
  )
}

export default App