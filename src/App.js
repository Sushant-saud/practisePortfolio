import React, { useState } from 'react'
import Contact from './component/contact/contact';
import Portfolio from './component/portfolio/portfolio';
import Testomonials from './component/Testimonials/Testimonials';
import Topbar from './component/tobar/Topbar';
import Work from './component/works/Work';
import Intro from './component/Intro/intro';
import Menu from './component/Menu/Menu';
import './App.scss'

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
  <div className='app'>
  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <div className='sections'>
   <Intro/>
   <Portfolio/>
   <Work/>
   <Testomonials/>
   <Contact/>
  </div>
  </div>
  )
}

export default App;