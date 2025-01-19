import React from 'react';
import Login from './components/auth/Login.jsx' ;
import ResiSignup from './components/auth/ResiSignup.jsx';

import About from './components/shared/About.jsx'
import ChooseUser from './components/shared/Landing.jsx';
import ResiHome from './components/resident/ResiHome.jsx';
import ProfHome from './components/prof/ProfHome.jsx';
import ProfSignup from './components/auth/ProfSignup.jsx';
import Missing from './components/shared/Missing.jsx';
import Home from './components/shared/Home.jsx'
import { Routes, Route } from 'react-router-dom';
import './index.css'
// import Landing from './components/shared/Landing.jsx';
function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resi/signup" element={<ResiSignup />} />
        <Route path="/user" element= {<ChooseUser/>}/>
        <Route path="/resi/home" element={<ResiHome/>}/>
        <Route path="/prof/home" element={<ProfHome/>}/>
        <Route path="/prof/signup" element={<ProfSignup/>}/>


        <Route path="*" element={<Missing/>} />

      </Routes>
    </div></>
  );
}

export default App;


