import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
  <div className="navbar bg-[#3A3960] shadow-md fixed top-0 left-0 right-0 z-10">
  <div className="flex-1">
    <p className="btn btn-ghost text-xl hover:bg-[#252446] font-bold text-[#E8ECD7]">
      All At Home</p>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold font-mono text-[#E8ECD7]">
      <li className="rounded-lg hover:bg-[#252446]">
        <Link to="/home">Home</Link>
      </li>
      <li className="rounded-lg hover:bg-[#252446]">
        <Link to="/about">Know More</Link>
      </li>
      <li className="rounded-lg hover:bg-[#252446]">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </div>
</div>

  );
};

export default Nav
