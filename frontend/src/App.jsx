import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './index.css';


import Appoint from './components/prof/Appoint.js';
import About from './components/shared/About.js';

import ProfSignup from './components/auth/ProfSignup.jsx';

import ResiHome from './components/resident/ResiHome.jsx';
import ProfHome from './components/prof/ProfHome.jsx';
import Missing from './components/shared/Missing.jsx';
import Home from './components/shared/Home.jsx';
import Editrequest from './components/prof/Editrequest.js';
import './index.css'
// import Landing from './components/shared/Landing.jsx';
function App() {
  return (
    <>
     
     
    {/* <Request/> */}
      {/* <Navbar />
      <Homee/> */}
    
      
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/resi/login" element={<ResiLogin/>}/>
        <Route path="/prof/login" element={<ProfLogin/>}/>
        <Route path="/resi/signup" element={<ResiSignup />} />

        <Route path="/resi/home" element={<ResiHome/>}/>
        <Route path="/prof/home" element={<ProfHome/>}/>
        <Route path="/prof/signup" element={<ProfSignup/>}/>

        <Route path="/request" element={<Request />} />
        <Route path="/appointments" element={<Appoint />} />
        <Route path="/editrequest" element={<Editrequest/>} />
        
        <Route path="*" element={<Missing/>} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;


