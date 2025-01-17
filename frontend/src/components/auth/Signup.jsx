import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import './../../index.css'
import Error from './Error';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const [error, setError]= useState('');
  const [severity, setSeverity]= useState('error');

  // to redirect after successful signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    // form validation
    if (!name || !email || !password) {
      setError('Please fill in all fields !'); 
      setSeverity('warning');
      return;
    }

  
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }), 
      });

      const data = await response.json(); 

      if (!response.ok) {
        setError(`Signup failed: ${data.error}`);
        setSeverity('error');
      }

      localStorage.setItem('authToken', data.token);

      if (response.ok)
        {
          setError('Sign Up successful!'); setSeverity('success');
      navigate('/login');
    }};


  return (
    <section className=" bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center mb-10 -mt-11 text-neutral paddin">Welcome !!
      </h1>
      <h3 className="text-5xl font-extrabold text-center mb-10 -mt-1 text-neutral">
        All At Home
      </h3>

      <div className="w-full max-w-md bg-base-100 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6  text-[#3A3960]">
          Create your account
        </h2>

{/* starting the form */}
        <form className="space-y-4" onSubmit={handleSubmit}>

{/* conditional error */}
          <Error error={error}
          severity={severity}
          setError={setError}/>
          
{/* Name */}
          <div className="form-control">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#3A3960]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="FirstName LastName"
              className="custom-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

{/* Email */}
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-neutral">Your email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="custom-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>

{/* Password */}
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text text-neutral">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>

{/* sign up button */}
          <button
            type="submit"
            className="custom-button !w-full"
          >
            Sign up
          </button>

          {/*Login page link */}
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-accent font-medium">
              Log in
            </Link>
          </p>

          
        </form>
        
      </div>
    </section>
  );
}

export default Signup;
