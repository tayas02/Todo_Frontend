import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterWrapper from './components/Wrapper/RegisterWrapper'
import './App.css'
import LoginWrapper from './components/Wrapper/LoginWrapper'

const App = () => {
  return (
    // <div className='mainapp'>
    //   <RegisterWrapper/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper/>}/>
        <Route path="/register" element={<RegisterWrapper/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
