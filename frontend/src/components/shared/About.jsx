import React from 'react';
import Layout from './Layout';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div 
        className='about' 
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          
          

        }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          style={{
            width: '250px', 
            height: 'auto', 
            marginBottom:'10px',
            marginLeft:'30px'
          }} 
        />

        <div className='aboutContainer'
         style={{
          flex: 1, 
          textAlign: 'center', 
          color: 'white',
          padding: '20px', 
        }}>
  
        <h1>KNOW MORE</h1>
        <h2>SERVICES WE OFFER</h2>
        <ol>
          <li>Booking professional home services like plumber,electrician,painters and much more.</li>
          <li>Providing society residents with an online notice board.</li>
          <li>Keeping users updated on upcoming and ongoing society events.</li>
          <li>Verification of deliveries and so much more...</li>
        </ol>
        <h3>
          BECAUSE YOUR WISH IS OUR COMMAND!
        </h3>
        <Link to="/signup">
        <button 
        style={{
          width: '200px', 
          padding: '12px', 
          backgroundColor: '#85A947', 
          border: 'none',
          borderRadius: '5px', 
          color: 'white', 
          fontSize: '16px', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s ease', 
          marginRight:'1px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#6C8D37'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#85A947'}
      >
        CREATE YOUR ACCOUNT NOW
      </button>
</Link>
        </div>
      </div>
    </Layout>
  );
}

export default About;

