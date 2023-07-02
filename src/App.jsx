import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compo/Header/Header'
import Proudct from './compo/Product/Proudct'

function App() {

  return (
    <div className='main'>
     <Header></Header>
     <Proudct></Proudct>
    </div>
  )
}

export default App
