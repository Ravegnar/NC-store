import {NavLink} from "react-router-dom";
import { useState} from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const navLink = `px-3 py-2 flex items-center text-lg text-white uppercase font-bold leading-snug hover:opacity-75`
  const navLinkDrop = `text-white flex w-full px-4 py-2 text-md font-bold leading-5 text-right`

  return (
    <nav className="flex sticky top-0 z-50 flex-wrap items-center justify-between px-2 py-1 bg-slate-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start">
          <NavLink to="/"
            className="text-lg font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase">
            <img
              src="http://ravengar.wz.cz/Images/NS/NS.png"
              backgroundcolor="transparent"
              width="55"
              height="auto"
              className="logo"
              alt="logo"
            />
          </NavLink>
          <button
            className="cursor-pointer text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div
          className={
            "sm:flex flex-grow items-center" +
            (navbarOpen ? " flex justify-center" : " hidden")
          }
        >
          <ul className="flex flex-col sm:flex-row list-none sm:ml-auto items-center">
            <li className="nav-item">
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/about">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(navData) => navData.isActive ? `${navLink} md:pr-0 active` : `${navLink} md:pr-0` } to="/store">Store</NavLink>
            </li>
            
            <div className="flex relative items-center text-left dropdown">
                <button className="inline-flex justify-center w-full text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <svg className="w-7 h-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div className="absolute -right-12 sm:right-0 w-auto mt-3 p-2 origin-top-right bg-slate-700 border border-slate-800 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                  <ul className="flex flex-col justify-center items-end sm:ml-auto">
                    <li>
                      <NavLink className={(navData) => navData.isActive ? `${navLinkDrop} active` : `${navLinkDrop}` } to="/store/NSO" end>Operatives</NavLink>
                    </li>
                    <li>
                      <NavLink className={(navData) => navData.isActive ? `${navLinkDrop} active` : `${navLinkDrop}` } to="/store/NSW/weapons">Weapons</NavLink>
                    </li>
                    <li>
                      <NavLink className={(navData) => navData.isActive ? `${navLinkDrop} active` : `${navLinkDrop}` } to="/store/NSW/tools">Tools</NavLink>
                    </li>
                    <li>
                      <NavLink className={(navData) => navData.isActive ? `${navLinkDrop} active` : `${navLinkDrop}` } to="/store/NSW/equipment">Equipments</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/cart">Cart ({cartCount})</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
