import React from 'react';
import Login from './components/auth/Login.jsx' ;
import Signup from './components/auth/Signup.jsx';
import Home from './components/shared/Home.jsx'
import About from './components/shared/About.jsx'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import Missing from './components/shared/Missing.jsx';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Missing/>} />
      </Routes>
    </div></>
  );
}

export default App;


