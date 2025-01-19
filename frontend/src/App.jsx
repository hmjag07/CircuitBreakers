import React from 'react';
import Login from './components/auth/Login.jsx' ;
//  import Signin from './components/auth/Signin.jsx';
// import SignUp from './components/auth/Signup.jsx';
import {Routes, Route } from 'react-router-dom';
import './index.css';

// import About from './components/shared/About.js';
// import Signup from './components/auth/Signup.jsx';
 import Homee from './components/prof/Homee.js';
 import Request from './components/prof/Request.js';
import Appoint from './components/prof/Appoint.js';

import About from './components/shared/About.js';
import ChooseUser from './components/shared/Landing.jsx';
import ResiHome from './components/resident/ResiHome.jsx';

import ProfSignup from './components/auth/ProfSignup.jsx';
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
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/resi/signup" element={<ResiSignup />} /> */}
        <Route path="/user" element= {<ChooseUser/>}/>
        <Route path="/resi/home" element={<ResiHome/>}/>
        {/* <Route path="/prof/home" element={<ProfHome/>}/> */}
        <Route path="/prof/signup" element={<ProfSignup/>}/>


        <Route path="*" element={<Missing/>} />
      
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/homeproff" element={<Homee />} />
        <Route path="/request" element={<Request />} />
        <Route path="/appointments" element={<Appoint />} />
        <Route path="/editrequest" element={<Editrequest/>} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;


