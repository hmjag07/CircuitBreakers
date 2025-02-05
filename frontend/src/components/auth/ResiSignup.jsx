import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import './../../index.css'
import Error from './Error';
function ResiSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [flat, setFlat] = useState('');
  const [wing, setWing] = useState('');
  
  const [error, setError]= useState('');
  const [severity, setSeverity]= useState('warning');

  const navigate = useNavigate(); 

  // To redirect after successful signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, phone, flat, wing, password });

    // form validation
    if (!name || !email || !password || !flat || !wing || !phone) {
      setError('Please fill in all fields !'); 
      setSeverity('warning');
      return;
    }
    // checking validity of phn number
    if(phone.length !== 10){
      setError('Enter VALID Phone Number!'); setSeverity('warning');
      return;
    }
      const response = await fetch('http://localhost:3001/api/resi/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, flat, wing, password}), 
      });

      const data = await response.json(); 

      if (!response.ok) {
        setError(`Signup failed: ${data.error}`);
        setSeverity('error');
        return;
      }

      localStorage.setItem('resiToken', data.token);

      if (response.ok)
        {
          setError('Sign Up successful!'); setSeverity('success');
      navigate('/resi/login');
    }};


  return (
    <section className=" bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-5xl font-extrabold text-center mb-10 -mt-1 text-neutral">
     <h3 className='text-[#e8ecd7]'> Welcome to</h3>
      All At Home !
      </h3>

      <div className="w-full max-w-lg bg-[#e8ecd7a0] rounded-lg shadow-lg p-8">

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

{/* phone number */}
<div className="form-control">
            <label htmlFor="number" className="label">
              <span className="label-text text-neutral">Phone number</span>
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="your phone no."
              className="custom-input"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}

            />
          </div>
{/* flat no.  */}
          <div className="form-control">
            <label htmlFor="flat" className="block mb-2 text-sm font-medium text-[#3A3960]">
              Flat no.
            </label>
            <input
              type="number"
              name="flat"
              id="flat"
              placeholder="your flat no."
              className="custom-input"
              value={flat}
              onChange={(e) => setFlat(e.target.value)}
            />
          </div>
{/* wing */}
<div className="form-control">
            <label htmlFor="wing" className="block mb-2 text-sm font-medium text-[#3A3960]">
              Wing
            </label>
            <input
              type="text"
              name="wing"
              id="wing"
              placeholder="your wing eg: B"
              className="custom-input"
              value={wing}
              onChange={(e) => setWing(e.target.value)}
              /></div>
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
            <Link to="/resi/login" className="text-accent font-medium">
              Log in
            </Link>
          </p>

          
        </form>
        
      </div>
    </section>
  );
}

export default ResiSignup;
