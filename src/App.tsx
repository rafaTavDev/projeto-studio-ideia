import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Slide } from './components/Slide'
import { Servicos } from "./components/Servicos"
import { Depoimentos } from './components/Depoimentos'
import { Nos } from './components/Nos'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='containerTodos'>
      <Banner/>
      <Slide/>
      <Servicos/>
      <Depoimentos/>
      <Nos/>
      <Footer/>
    </div>
  )
}

export default App
