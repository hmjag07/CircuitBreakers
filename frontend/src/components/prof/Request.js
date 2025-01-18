import React from 'react';
import Layoutt from './Layoutt';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
const Request = () => {
  return (
    <Layoutt>
    <div className='requests'>
        <Navbar/>
      <h1>REQUESTS</h1>
      
      <h2>Here are the requests made by customers</h2>
    <h2>You can also edit the requests and send it back to the customer</h2>
    <Link to="/editrequest">
<button className='button'  style={{

width: '200px'  ,
padding: '10px',
backgroundColor: '#3A3960',
border: 'none',
borderRadius: '15px',
color: 'white',
fontSize: '16px',
cursor: 'pointer',
marginLeft: '350px',


              }}>
  EDIT REQUEST
</button>

</Link>
    </div>  
    </Layoutt>
  );
}

export default Request;
