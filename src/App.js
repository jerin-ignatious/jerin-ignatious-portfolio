import React from 'react'
import Header from './Components/header/header'
import Body from './Components/body/body'
import Footer from './Components/footer/footer'
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
