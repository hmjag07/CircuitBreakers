import { useEffect } from 'react';
// import SignUp from './components/auth/Signup.jsx';
import { Link } from 'react-router-dom'
import './../../index.css'

const Login = () => {
  useEffect(() => {
    document.title = "All At Home - Login";
  }, []);


  return (
    <section className="bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
       <h1 className="text-6xl font-extrabold text-center mb-10 -mt-11 text-neutral paddin">Welcome Back !!
      </h1>
      <h3 className="text-5xl font-extrabold text-center mb-10 -mt-1 text-neutral">
        All At Home
      </h3>

      <div className="w-full max-w-md bg-[#E8ECD7] rounded-lg shadow p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#3A3960]">
          Sign in to your account
        </h2>
        <form className="space-y-4" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#3A3960]">Your email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="bg-[#E8ECD7] border border-[#3A3960] text-[#3A3960] rounded-lg focus:ring-[#85A947] focus:border-[#85A947] block w-full p-2.5" 
              placeholder="xyz@gmail.com" 
              required 
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
              required 
            />
          </div>
          {/* <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-[#85A947] hover:underline">Forgot password?</a>
          </div> */}
          <button 
          
            type="submit" 
            className="custom-button"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-[#3A3960]">
            Don’t have an account yet? 
            <Link to="/Signup" className="font-medium text-[#85A947] hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;




