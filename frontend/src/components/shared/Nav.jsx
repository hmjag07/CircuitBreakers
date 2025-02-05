import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar !bg-[#3A3960] !shadow-md !fixed !top-0 !left-0 !right-0 !z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-lg font-bold text-[#E8ECD7] hover:bg-[#252446]">
          All At Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-mono font-medium text-sm text-[#E8ECD7]">
          <li className="rounded-lg hover:bg-[#252446]">
            <Link to="/home">Home</Link>
          </li>
          <li className="rounded-lg hover:bg-[#252446]">
            <details className="dropdown">
              <summary className="cursor-pointer">Appointments</summary>
              <ul className="dropdown-content menu bg-[#85A947] rounded-box p-2 mt-2 w-48 text-sm">
                <li className="rounded-lg hover:bg-[#252446]">
                  <Link to="/resi/services">Book Professional</Link>
                </li>
                <li className="rounded-lg hover:bg-[#252446]">
                  <Link to="/about">Manage Requests</Link>
                </li>
                <li className="rounded-lg hover:bg-[#252446]">
                  <Link to="/about">My Appointments</Link>
                </li>
                <li className="rounded-lg hover:bg-[#252446]">
                  <Link to="/about">Help</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="rounded-lg hover:bg-[#252446]">
            <Link to="/about">Know More</Link>
          </li>
          <li className="rounded-lg hover:bg-[#252446]">
            <Link to="/resi/home">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;







