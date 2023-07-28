import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navbar'
import { Banner } from './component/Banner'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
    </div>
  )
}

export default App

