import React from 'react';
import {Link} from 'react-router-dom'
import { IoHome } from 'react-icons/io5';
import ProfLayout from './ProfLayout';
const Navbar = () => {
  return (
    <ProfLayout>
    <div className='navbarP'>
      <h1> <IoHome/>  ALL AT HOME </h1>
    <ul>
     
      <Link to="/prof/appointments">
<li style={{

width: '150px',
padding: '15px',
backgroundColor: '#3A3960',
border: 'none',
borderRadius: '25px',
color: 'white',
fontSize: '16px',
cursor: 'pointer',
marginRight: '20px',

              }}>
  APPOINTMENTS
</li>

</Link>
       
      <li>
        <Link to="/prof/request">
        <button style={{
                         
                         width: '150px',
                        padding: '15px',
                        backgroundColor: '#3A3960',
                        border: 'none',
                        borderRadius: '25px',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s', 
                       
                      }}>
          YOUR REQUESTS
        </button>
        </Link>
      </li>
      <li>
        <Link to="/prof/logout">
        <button style={{
                         
                         width: '150px',
                        padding: '15px',
                        backgroundColor: '#3A3960',
                        border: 'none',
                        borderRadius: '25px',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s', 
                       
                      }}>
          LOG OUT
        </button>
        </Link>
      </li>
     </ul>
     {/* <div className='navbarContainer'>
       <h1>WELCOME TO ALL AT HOME</h1>
     </div> */}
    </div>
    </ProfLayout>
  );
}

export default Navbar;
