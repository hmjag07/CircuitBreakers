import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import './../../index.css'
import Error from './Error';
function ProfSignup() {
    // variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  // const [profession, setProfession] = useState('');
  
//   alert/errors
  const [error, setError]= useState('');
  const [severity, setSeverity]= useState('warning');

  const navigate = useNavigate(); 

  // To redirect after successful signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    //missing proffesional showing error same on line 25 and 38
    console.log({ name, email, phone,  password });

    // form validation
    if (!name || !email || !password || !phone) {
      setError('Please fill in all fields !'); 
      setSeverity('warning');
      return;
    }
    // checking validity of phn number
    if(phone.length !== 10){
      setError('Enter VALID Phone Number!'); setSeverity('warning');
      return;
    }
      const response = await fetch('http://localhost:3001/api/prof/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email,password}), 
      });

      const data = await response.json(); 

      if (!response.ok) {
        setError(`Signup failed: ${data.error}`);
        setSeverity('error');
        return;
      }

      localStorage.setItem('authToken', data.token);

      if (response.ok)
        {
          setError('Sign Up successful!'); setSeverity('success');
      navigate('/login');
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
{/* profession  */}
                  <div className="form-control">
                  <label for="countries" className="label">Select an option</label>
  <select id="profession" className="custom-input">
    <option selected>Choose a profession</option>
    <option value="Plumber">Plumber</option>
    <option value="Electrician">Electrician</option>
    <option value="Carpenter">Carpenter</option>
    <option value="RO engineer">RO engineer</option>
  </select>
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

export default ProfSignup;
