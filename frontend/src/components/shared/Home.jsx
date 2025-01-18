import React from 'react';
import Layout from './Layout';
import {Link} from "react-router-dom";
import Banner from '../shared/images/Banner.jpg'
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
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
<h1>ALL AT HOME</h1>
<p style={{ margin: '20px 0 40px 0' }}>All At Home is your one-stop solution for managing household needs effortlessly. From booking skilled professionals like electricians, plumbers, and more, to accessing convenient community features like an online notice board, we make daily living simpler and more organized. With All At Home, you can save time, streamline tasks, and focus on what truly matters.</p>
<Link to="/about">
<button style={{

width: '150px',
padding: '10px',
backgroundColor: '#3A3960',
border: 'none',
borderRadius: '5px',
color: 'white',
fontSize: '16px',
cursor: 'pointer',
marginRight: '20px',

              }}>
  KNOW MORE
</button>

</Link>
<Link to="/signup">
<button style={{
                 
                 width: '150px',
                padding: '10px',
                backgroundColor: '#3A3960',
                border: 'none',
                borderRadius: '5px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s', 
               
              }}>
  SIGN UP
</button>
</Link>

    </div>
    </div>
    </Layout>

  );
}

export default Home;
