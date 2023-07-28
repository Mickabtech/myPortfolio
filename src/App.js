import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/navbar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
    </div>
  )
}

export default App

