import React, { useState } from 'react'
import './sass/App.scss'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import { HashRouter } from 'react-router-dom'
import sharingan from './sounds/MangekyoSharingan Sound.mp3'

import Fundo from './images/fundo2.png'
import Foto from './images/react-js.png'

function App() {
  const sharinganSound = new Audio(sharingan)
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const animation = active ? 'active' : ''

  function infiniteTsukuyomi() {
    setActive(true)

    sharinganSound.play()

    console.log('s')
    setTimeout(() => {
      setLoading(false)
    }, 4700)
  }
  return (
    <main className='App'>
      <HashRouter>
        {!loading && <Nav />}
        {loading && <div className='fundo'>
          <img className='sharin ' src={Fundo} alt="" />
          <div className='eye'></div>
          <img className={`mange ${animation}`} src={Foto} alt="foto" />
          <img className={`kyo ${animation}`} src={Foto} alt="foto" />
          <button onClick={infiniteTsukuyomi}>hehe</button>
        </div>}
        {!loading && <Content />}
      </HashRouter>
    </main>
  )
}

export default App