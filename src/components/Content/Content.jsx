import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../../Routes/Home/Home'
import About from '../../Routes/About/About'
import Projects from '../../Routes/Projects/Projects'
import Technologies from '../../Routes/Technologies/Technologies'

import '../../sass/Content.scss'


function Content() {
  return (
    <div className='main--Content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default Content
