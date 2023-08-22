import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navbar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Slacks } from './component/slacks';


const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Slacks />
      <Skills /> 
    </div>
  )
}

export default App

