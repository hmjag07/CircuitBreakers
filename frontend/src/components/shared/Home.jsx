import React from 'react';
import Layout from './Layout';
import {Link} from "react-router-dom";
import Banner from "./images/Banner.png";
import '../../../src/index.css';
const Home = () => {
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
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
  
{/* title */}
    <h3 className='text-5xl font-extrabold text-[#3A3960] font'>ALL AT HOME</h3>

{/* description and buttons */}
      <p style={{ margin: '20px 0 40px 0' }}>
        All At Home is your one-stop solution for managing household needs effortlessly. From booking skilled professionals like electricians, plumbers, and more, to accessing convenient community features like an online notice board, we make daily living simpler and more organized. With All At Home, you can save time, streamline tasks, and focus on what truly matters.</p>

      <p className="text-centre text-lg text-[#3A3960] font-semibold font-sans ">
        join us as a resident or a working proffesional !
        (to be edited)
      </p>
      <div className="flex-grow flex justify-evenly">
        
        <button className='custom-button'><Link to="/about">
        Know More
        </Link></button>
        
        <Link to="/login">
          <button className='custom-button'>
            Login 
          </button>
        </Link>

        <button className="custom-button">
          <Link to={'/resi/home'}>Resident
          </Link></button> 

        <button className="custom-button">
          <Link to={'/homeproff'}>Proffesional
          </Link></button>
      </div>
    </div>
  </div>
    </Layout>

  );
}

export default Home;
