import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Sociallinks from './component/Sociallinks'
import About from './component/About'
import Portfoli from './component/Portfoli'
import Experience from './component/Experience'

import Contact from './component/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfoli />
      <Sociallinks />
      <Experience />
      <Contact />
    </>
  )
}

export default App
