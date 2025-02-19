import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import {  AuthContextProvider } from './context/AuthContext.js';

import Appoint from './components/prof/Appoint.js';
import About from './components/shared/About.jsx';
import Request from './components/prof/Request.jsx'
import Editrequest from './components/prof/Editrequest.js';
import Home from './components/shared/Home.jsx'
import ProfLogout from './components/prof/Logout.js';
import Missing from './components/shared/Missing.jsx';
// import Home from './components/shared/Home.jsx';


import ProfCards from './components/resident/ProfCards.jsx';
import NoticeCards from './components/resident/Notice.jsx'
import CreateNotice from './components/resident/CreateNotice.jsx'

import ResiHome from './components/resident/ResiHome.jsx'
import Book from './components/resident/Book.jsx'

import ResiLogin from './components/auth/ResiLogin.jsx' ;
import ProfLogin from './components/auth/ProfLogin.jsx'
import ResiSignup from './components/auth/ResiSignup.jsx';
import ProfSignup from './components/auth/ProfSignup.jsx';

import ProfHome from './components/prof/ProfHome.jsx';

function App() {
  return (
    <>
    <AuthContextProvider>
      
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/resi/signup" element={<ResiSignup />} />
        <Route exact path="/prof/signup" element={<ProfSignup/>}/>
        <Route exact path="/prof/logout" element={<ProfLogout/>}/>
        <Route exact path="/resi/login" element={<ResiLogin/>}/>
        <Route exact path="/prof/login" element={<ProfLogin/>}/>
        <Route exact path="/resi/home" element={<ResiHome/>}/>
        <Route exact path="/prof/home" element={<ProfHome/>}/>

        <Route path="/resi/book" element={<Book/>}/>

        <Route path="/prof/request" element={<Request />} />
        <Route path="/prof/appointments" element={<Appoint />} />
        <Route exact path="/prof/request/editrequest" element={<Editrequest/>} />

        
        <Route path="/data/professionals" element={<ProfCards/>}/>
        <Route path="/resi/notices" element={<NoticeCards/>}/>
        <Route path="/resi/notices/create" element={<CreateNotice/>}/>

        <Route path="*" element={<Missing/>} />
      </Routes>
      
    </div>
    </AuthContextProvider>
    </>
  );
}

export default App;


