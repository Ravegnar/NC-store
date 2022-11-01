import {NavLink} from "react-router-dom";

export default function NavbarSSS(props) {


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    return (<>
      <nav className="topnav" id="myTopnav">
        <NavLink to="/" className="nav-brand">
          SuperM
        </NavLink>
        <a className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/" end>Home</NavLink>
        </a>
        <a className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about">About us</NavLink>
        </a>
        <a className="nav-item">
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/store">Store</NavLink>
        </a>
        <a>
          <NavLink className={(navData) => navData.isActive ? "nav-item nav-cart btn btn-accent active" : "nav-item nav-cart btn btn-accent" }
            to="/cart">Cart</NavLink>
        </a>
      <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars">asd</i>
        </a>
    </nav>
    </>);
}

//<div className="topnav" id="myTopnav">
//  <a href="#home" className="active">Home</a>
//  <a href="#news" className="split">News</a>
//  <a href="#contact" className="split">Contact</a>
//  <a href="#about" className="split">About</a>
//  <a className="icon" onClick={myFunction}>
//    <i className="fa fa-bars">asd</i>
//  </a>
//</div>