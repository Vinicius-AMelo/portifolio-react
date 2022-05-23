import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../../Routes/Home/Home'
import About from '../../Routes/About/About'
import Projects from '../../Routes/Projects/Projects'
import Technologies from '../../Routes/Technologies/Technologies'

import './Content.scss'


function Content() {
  return (
    <div className='main--Content'>
      <Routes>
        <Route path="/portifolio-react/" element={<Home />} />
        <Route path="/portifolio-react/Technologies" element={<Technologies />} />
        <Route path="/portifolio-react/About" element={<About />} />
        <Route path="/portifolio-react/Projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default Content
