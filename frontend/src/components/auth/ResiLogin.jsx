import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../../index.css';
import Error from './Error';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context/AuthContext';

function ResiLogin() {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('error');
  const [loged, setLoged] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields!');
      setSeverity('warning');
      return;
    }
    try {
      const token = localStorage.getItem('resiToken');
      const response = await fetch('http://localhost:3001/api/resi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setSeverity('error');
        return;
      }

      localStorage.setItem("resiUser", JSON.stringify(data.user));
      localStorage.setItem('resiToken', data.token);
      dispatch({ type: "LOGIN", payload: data.user });

      setError('Login Successful!');
      setSeverity('success');
      setLoged(true);
      navigate('/resi/home');
    } catch (error) {
      setError(`Login failed: ${error.message}`);
      setSeverity('error');
    }
  };

  return (
    <section className="bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center mb-10 -mt-11 text-neutral">Welcome Back!!</h1>
      <h3 className="text-5xl font-extrabold text-center mb-10 -mt-1 text-neutral">All At Home</h3>

      {!loged ?
        <div className="w-full max-w-md bg-[#E8ECD7] rounded-lg shadow p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#3A3960]">Sign in to your account</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <Error error={error} severity={severity} setError={setError} />
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#3A3960]">Your email</label>
              <input type="email" id="email" className="custom-input" placeholder="xyz@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#3A3960]">Password</label>
              <input type="password" id="password" placeholder="••••••••" className="custom-input" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="custom-button !w-full">Sign in</button>
            <p className="text-sm font-light text-[#3A3960]">Don’t have an account yet? <Link to="/resi/signup" className="font-medium text-[#85A947] hover:underline">Sign up</Link></p>
          </form>
        </div>
        :
        <div>
          <Button variant="contained" sx={{ backgroundColor: '#85A947', color: '#ffffff', '&:hover': { backgroundColor: '#6c8c3b' } }}>
            <Link to={'/resi/home'}>Home</Link>
          </Button>
        </div>
      }
    </section>
  );
}

export default ResiLogin;





