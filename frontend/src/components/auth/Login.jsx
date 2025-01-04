import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    document.title = "All At Home - Login";
  }, []);


  return (
    <section className="bg-[#BED754] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center mb-10 -mt-16 text-[#3A3960]">
        All At Home
      </h1>

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
              className="bg-[#E8ECD7] border border-[#3A3960] text-[#3A3960] rounded-lg focus:ring-[#85A947] focus:border-[#85A947] block w-full p-2.5" 
              required 
            />
          </div>
          {/* <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-[#85A947] hover:underline">Forgot password?</a>
          </div> */}
          <button 
            type="submit" 
            className="w-full text-[#3A3960] border-[#4e813a] bg-[#BED754] hover:bg-[#73ae35] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-[#3A3960]">
            Don’t have an account yet? <a href="#" className="font-medium text-[#85A947] hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;




