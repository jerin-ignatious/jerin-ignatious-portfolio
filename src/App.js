import React from 'react'
import Header from './Components/header/Header'
import Body from './Components/body/Body'
import Footer from './Components/footer/Footer'
import './app.css'

export default function App() {
  return (
    <div className='home'>
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
