import { Link } from "react-router-dom";
import React from "react";
import './../../index.css';
import ProfCards from './ProfCards.jsx'


import Nav from "../shared/Nav";
const Landing=()=>{
  return(


<div className="h-screen flex flex-col">
    <Nav/>

    {/* all the notices */}

  <div className=" flex flex-col md:flex-row pt-16 bg-[#E8ECD7]">

  {/* <ProfCards/> */}

  </div>
</div>

  )};

  export default Landing;