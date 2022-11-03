import {NavLink} from "react-router-dom";
import { useState} from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const navLink = `px-3 py-2 flex items-center text-lg text-white uppercase font-bold leading-snug hover:opacity-75`

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
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars text-md text- font-bold">#asdasd</i>
          </button>
        </div>
        <div
          className={
            "sm:flex flex-grow items-center" +
            (navbarOpen ? " flex justify-center" : " hidden")
          }
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
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/cart">Cart ({cartCount})</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
