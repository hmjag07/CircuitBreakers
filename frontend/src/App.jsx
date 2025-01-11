import React from 'react';
import Login from './components/auth/Login.jsx' ;
// import Signin from './components/auth/Signin.jsx';
import SignUp from './components/auth/Signup.jsx';
import { Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div></>
  );
}

export default App;


