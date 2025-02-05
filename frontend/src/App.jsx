import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  AuthContextProvider } from './context/AuthContext.js';

import Appoint from './components/prof/Appoint.js';
import About from './components/shared/About.js';
import Request from './components/prof/Request.jsx'
// import Editrequest from './components/prof/Editrequest.jsx';
import Home from './components/shared/Home.jsx'

import Missing from './components/shared/Missing.jsx';
// import Home from './components/shared/Home.jsx';


import ProfCards from './components/resident/ProfCards.jsx';
import NoticeCards from './components/resident/Notice.jsx';
import CreateNotice from './components/resident/CreateNotice.jsx';

import ResiHome from './components/resident/ResiHome.jsx'

import ResiLogin from './components/auth/ResiLogin.jsx' ;
import ProfLogin from './components/auth/ProfLogin.jsx'
import ResiSignup from './components/auth/ResiSignup.jsx';
import ProfSignup from './components/auth/ProfSignup.jsx';
import Form from './components/resident/Form.jsx';
import ProfHome from './components/prof/ProfHome.jsx';
import Services from './components/resident/Services.jsx';
// import Footer from './components/resident/Footer.jsx';

function App() {
  return (
    <>
    <AuthContextProvider>
      
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resi/signup" element={<ResiSignup />} />
        <Route path="/prof/signup" element={<ProfSignup/>}/>
        {/* <Route path="/prof/logout" element={<ProfLogout/>}/> */}

        <Route path="/resi/home" element={<ResiHome/>}/>
        <Route path="/prof/home" element={<ProfHome/>}/>
        

        <Route path="/resi/login" element={<ResiLogin/>}/>
        <Route path="/prof/login" element={<ProfLogin/>}/>


        <Route path="/prof/request" element={<Request />} />
        <Route path="/prof/appointments" element={<Appoint />} />
        {/* <Route exact path="/prof/request/editrequest" element={<Editrequest/>} /> */}

        
        <Route path="/data/professionals" element={<ProfCards/>}/>
        <Route path="/resi/notices" element={<NoticeCards/>}/>
        <Route path="/resi/services" element={<Services/>}/>
        <Route path="/resi/form" element={<Form/>}/>
        <Route path="/resi/notices/create" element={<CreateNotice/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<Missing/>} />
      </Routes>
      
    </div>
    </AuthContextProvider>
    </>
  );
}

export default App;


