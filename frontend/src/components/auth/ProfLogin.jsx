import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import SignUp from './components/auth/Signup.jsx';
import { Link } from 'react-router-dom'
import './../../index.css'
import Error from './Error';

function ResiLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError]= useState('');
  const [severity, setSeverity]= useState('error');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    if(!email || !password){
      setError('Please fill in all fields !');
      setSeverity('warning');return;
    }
    try {
      const response = await fetch('http://localhost:3001/api/prof/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); 

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setSeverity('error');
        return;
      }

      
      localStorage.setItem('authToken', data.token);
      setError('Login Successful!'); setSeverity('success');
      navigate('/home'); //to Home page
    } catch (error) {
      setError(`Login failed: ${error.message}`);
      setSeverity('error');
    }
  };


  return (
    <section className="bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
       <h1 className="text-6xl font-extrabold text-center mb-10 -mt-11 text-neutral paddin">Welcome Back !!
      </h1>
      <h3 className="text-5xl font-extrabold text-center mb-10 -mt-1 text-neutral">
        All At Home
      </h3>

      <div className="w-full max-w-md bg-[#E8ECD7] rounded-lg shadow p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#3A3960]">
          Sign in to your Professional account
        </h2>

        <form className="space-y-4"
        onSubmit={handleLogin}>
          {/* conditional error */}
          <Error error={error}
          severity={severity}
          setError={setError}/>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#3A3960]">Your email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="bg-[#E8ECD7] border border-[#3A3960] text-[#3A3960] rounded-lg focus:ring-[#85A947] focus:border-[#85A947] block w-full p-2.5" 
              placeholder="xyz@gmail.com" 
              
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#3A3960]">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="••••••••" 
              className="custom-input" 
              
              onChange={(e)=> setPassword(e.target.value)}

            />
          </div>
          {/* <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-[#85A947] hover:underline">Forgot password?</a>
          </div> */}
          <button 
            type="submit" 
            className="custom-button !w-full"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-[#3A3960]">
            Don’t have an account yet? 
            <Link to="/prof/signup" className="font-medium text-[#85A947] hover:underline">Sign up</Link>
          </p>
        </form >
      </div>
    </section>
  );
}

export default ResiLogin;