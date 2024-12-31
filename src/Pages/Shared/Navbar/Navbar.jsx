import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/Context";
import { FaUser } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `font-bold border-b-2 border-custom-orange` : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `font-bold border-b-2 border-custom-orange` : ""
          }
          to="/available-foods"
        >
          Available Foods
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `font-bold border-b-2 border-custom-orange` : ""
              }
              to="/add-food"
            >
              Add food
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `font-bold border-b-2 border-custom-orange` : ""
              }
              to="/manage-myFoods"
            >
              Manage my foods
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `font-bold border-b-2 border-custom-orange` : ""
              }
              to="/myFood-request"
            >
              My food request
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // sign out
  const handleSignOut = () => {
    logoutUser()
      .then(() => console.log("Logout successful"))
      .catch((error) => console.log("ERROR", error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 z-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            {/* Links */}
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl">
            <h2 className="text-xl font-black font-Kavivanar text-custom-orange whitespace-nowrap">
              <span className="font-black text-2xl">F</span>ood Circle
            </h2>
          </Link>
          <div className="w-10">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-8">
          {/* Links */}
          {links}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end space-x-2">
          {user && (
            <img
              title={user?.displayName}
              className="w-6 md:w-8 rounded-full"
              src={user?.photoURL}
              alt="user"
            />
          )}
          <button
            onClick={handleSignOut}
            className="bg-red-500 py-1 px-2 md:py-2 md:px-5 rounded-md text-white font-semibold text-xs"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="navbar-end space-x-2">
          <FaUser className="text-xl md:text-2xl"></FaUser>
          <Link to="/register">
            <button className="bg-lime-400 py-1.5 px-2 md:py-2 md:px-5 rounded-md text-white font-semibold text-xs">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-custom-orange py-1.5 px-2 md:py-2 md:px-5 rounded-md text-white font-semibold text-xs">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
