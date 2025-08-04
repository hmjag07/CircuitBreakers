import React from 'react';
import ProfLayout from './ProfLayout';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
const Request = () => {
  return (
    <ProfLayout>
    <div className='requests'>
        <Navbar/>
        <h2>Here,</h2>
      <h1>FIND THE REQUESTS MADE BY THE CUSTOMERS</h1>
     
    <h2>  You can easily update customer requests and send your revisions directly to them. Ensure all changes meet customer expectations before submission. Your expertise makes a difference!</h2>
    <Link to="/prof/request/editrequest">
<button style={{

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
    </ProfLayout>
  );
}

export default Request;
