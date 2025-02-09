import React, { useState} from 'react';
import Layout from './Layout';
import {Link} from "react-router-dom";
import Banner from "./images/Banner.png";
import '../../../src/index.css';
import UserTypeToggle from './UserTypeToggle';

// import { role } from './UserTypeToggle';
const Home = () => {
const [role, setRole]= useState('resi');

  return (
  <Layout>
  <div className='home' style={{ 
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
      }}>
    <div className='headerContainer' style={{
          backgroundColor: 'rgba(232, 236, 215, 0.67)',
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
  
{/* title */}
    <h3 className='text-5xl font-extrabold text-[#3A3960] font'>ALL AT HOME</h3>

{/* description and buttons */}
      <p className="mt-2 mb-2 !font-bold">
        All At Home is your one-stop solution for managing household needs effortlessly. From booking skilled professionals like electricians, plumbers, and more, to accessing convenient community features like an online notice board, we make daily living simpler and more organized. With All At Home, you can save time, streamline tasks, and focus on what truly matters.<br/><br/>
        <Link className='!text-2xl text-[#3A3960] font-semibold font-sans hover:text-[#a82633]'to="/about">
        Want to Know more?
      </Link></p>
      <div className="">
      <UserTypeToggle 
        role={role}
        setRole={setRole}
        /></div><br />
<div className="flex-grow flex justify-center space-x-4">
  <Link to={`/${role}/login`}>
    <button className="custom-button">Login</button>
  </Link>

  <Link to={`/${role}/signup`}>
    <button className="custom-button">Signup</button>
  </Link>
</div>


    </div>
  </div>
    </Layout>

  );
}

export default Home;
