// import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer.jsx";
import './../../index.css';
// import ProfCards from './ProfCards.jsx'
import { AuthContext } from "../../context/AuthContext.js";
import { useContext } from "react";
import Nav from "../shared/Nav";
import CreateNotice from "./CreateNotice.jsx";
import NoticeCards from "./Notice.jsx";

const ResiHome=()=>{
  const { user } = useContext(AuthContext)
  console.log(user, "in home");



  const token = localStorage.getItem('resiToken');
  if (token){console.log(token);
  } else{console.log("no token !!");
  }
  return(


<div className="h- flex flex-col">

    {user ? (
    <div><Nav/>
  <div className=" relative flex flex-col gap-4">
  <CreateNotice/>
  <div className="mt-28 w-full">
    <NoticeCards />
  </div>
</div>


  <Footer/>
  </div>) 
  : 
  (<div>hello plese log in</div>)
  }
</div>

  )};

  export default ResiHome;