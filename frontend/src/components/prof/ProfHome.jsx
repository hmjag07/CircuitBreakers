import React from 'react';
import {Link} from 'react-router-dom';
import bgi from './images/bg.jpg';
import Layoutt from './Layoutt';
import Navbar from './Navbar';
// import ishikaa from './images/charac.jpg'


const Home = () => {
  return (
    
    <Layoutt>
      <Navbar/>
    <div className='home' style={{ 
            backgroundImage: `url(${bgi})`,
           
            backgroundPosition: 'center',
            minHeight: '30vh',
            display:'flex',
            justifyContent: 'center',
           
           
          }}>
      
            
    <h1>WELCOME TO ALL AT HOME</h1>
   <p className='homeContainer'>
   We’re excited to have you join our community of skilled professionals dedicated to making homes better. Whether you’re a plumber, electrician, or handyman, this is the perfect platform to connect with clients who value quality and reliability. Let’s work together to simplify household chores and build trust, one service at a time!
   </p>
   <Link to="/request">
<button className='button' style={{

width: '200px',
padding: '10px',
backgroundColor: '#89CFF0',
border: 'none',
borderRadius: '15px',
color: 'black',
fontSize: '17px',
cursor: 'pointer',
marginRight: '600px',
fontWeight:'bold'


              }}>
  CHECK OUT THE REQUESTS MADE
</button>

</Link>
    </div>

</Layoutt>
  );
}

export default ProfHome;
