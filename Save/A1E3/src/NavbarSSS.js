import {NavLink} from "react-router-dom";
import React from "react";

export default function NavbarSSS({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navLink = `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75`

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-50 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
            <NavLink to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black">
              SuperM
            </NavLink>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">asd</i>
            </button>
          </div>
          <div
            className={
              "sm:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >


        <ul className="flex flex-col sm:flex-row list-none sm:ml-auto">
          <li className="nav-item">
            <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/about">About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/cart">Cart </NavLink>
          </li>
        </ul>


          </div>
        </div>
      </nav>
    </>
  );
}


//  <ul className="flex flex-col sm:flex-row list-none sm:ml-auto">
//  <li className="nav-item">
//    <a
//      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//      href="#pablo"
//    >
//      <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
//    </a>
//  </li>
//  <li className="nav-item">
//    <a
//      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//      href="#pablo"
//    >
//      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
//    </a>
//  </li>
//  <li className="nav-item">
//    <a
//      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//      href="#pablo"
//    >
//      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
//    </a>
//  </li>
//  </ul>