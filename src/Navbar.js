import {NavLink} from "react-router-dom";

export default function Navbar(props) {
    const cartCount = props.cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
  
    return (
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          SuperM
        </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/" end>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/products">Operatives</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "nav-item nav-cart btn btn-accent active" : "nav-item nav-cart btn btn-accent" }
            to="/cart">Cart ({cartCount})</NavLink>
        </li>
      </ul>
    </nav>
  );
}