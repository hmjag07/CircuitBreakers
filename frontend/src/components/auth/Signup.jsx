import { Link } from 'react-router-dom';
import { useState } from 'react';
import './../../index.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

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

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              required
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
              required
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
              required
            />
          </div>

          {/* sign up button */}
          <button
            type="submit"
            className="custom-button"
          >
            Sign up
          </button>

          {/*Login page link */}
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/Login" className="text-accent font-medium">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
