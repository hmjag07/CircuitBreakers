import React from 'react';
import Login from './components/auth/Login.jsx' ;
//  import Signin from './components/auth/Signin.jsx';
import SignUp from './components/auth/Signup.jsx';
import {Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/shared/Home.js';
import About from './components/shared/About.js';

 import Homee from './components/prof/Homee.js';
 import Request from './components/prof/Request.js';
import Appoint from './components/prof/Appoint.js';
import Editrequest from './components/prof/Editrequest.js';

 function App() {
  return (
    <>
     
     
    {/* <Request/> */}
      {/* <Navbar />
      <Homee/> */}
      
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/landing" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeproff" element={<Homee />} />
        <Route path="/request" element={<Request />} />
        <Route path="/appointments" element={<Appoint />} />
        <Route path="/editrequest" element={<Editrequest/>} />
        {/* <Route path="/navbar" element={<Navbar/>} /> */}
      </Routes>
      {/* <BrowserRouter> */}
      {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter> */}
    </div></>
  );
}

export default App;


